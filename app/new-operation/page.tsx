'use client'
import { useState, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { parseISO, addDays } from 'date-fns'
import OperationForm from '../../components/Forms/OperationForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function NewOperation() {
	const [operation, setOperation] = useState({
		date: new Date().toISOString().slice(0, 10),
		time: '',
		pesticideType: 0,
		pesticideName: '',
		pesticideDose: 0,
		liquidAmount: 0,
		waitingTime: 0,
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const addChemicalTreatment = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!operation.time || !operation.pesticideName) {
			setError('Wypełnij wszystkie pola formularza odpowiednimi danymi!')

			setIsSubmitting(false)
			return
		}
		if (operation.pesticideType <= 0 || operation.pesticideDose <= 0 || operation.liquidAmount <= 0) {
			setError('Wszystkie pola liczbowe powinny być większe zera!')

			setIsSubmitting(false)
			return
		}

		try {
			const operationDate = parseISO(operation.date)
			const waitingTimeInDays = Number(operation.waitingTime) + 1
			const waitingTimeDate = addDays(operationDate, waitingTimeInDays)

			const today = new Date().toISOString().slice(0, 10)
			const isPastDate = operation.date < today
			const status = isPastDate ? true : false

			const response = await fetch('/api/operation/new', {
				method: 'POST',
				body: JSON.stringify({
					userId: userId,
					date: operation.date,
					time: operation.time,
					pesticideType: operation.pesticideType,
					pesticideName: operation.pesticideName,
					pesticideDose: operation.pesticideDose,
					liquidAmount: operation.liquidAmount,
					waitingTime: operation.waitingTime,
					waitingTimeDate: waitingTimeDate,
					status: status,
				}),
			})
			setError('')
			if (response.ok) {
				toast.success('Pomyślnie dodano nowy zabieg cheminizacyjny!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/operations')
			} else {
				throw new Error('Błąd podczas dodawania zabiegu pielęgnacyjnego')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className='container py-20'>
			<OperationForm
				type='ADD'
				operation={operation}
				setOperation={setOperation}
				submitting={submitting}
				handleSubmit={addChemicalTreatment}
				error={error}
			/>
		</section>
	)
}

export default NewOperation
