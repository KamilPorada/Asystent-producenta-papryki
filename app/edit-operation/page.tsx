'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { parseISO, format } from 'date-fns'
import EditOperationForm from '@components/Forms/OperationForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function EditOperation() {
	const [operation, setOperation] = useState({
		date: '',
		time: '',
		pesticideType: 0,
		pestName: '',
		pesticideName: '',
		isLiquid: false,
		pesticideDose: 0,
		liquidAmount: 0,
		waitingTime: 0,
		waitingTimeDate: '',
		status: false,
		note: ''
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const searchParams = useSearchParams()
	const operationId = searchParams.get('id')

	const editOperation = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!operation.time || !operation.pesticideName) {
			setError('Wypełnij wszystkie pola formularza odpowiednimi danymi!')

			setIsSubmitting(false)
			return
		}
		if (
			operation.pesticideType <= 0 ||
			operation.pesticideDose <= 0 ||
			operation.liquidAmount <= 0
		) {
			setError('Wszystkie pola liczbowe powinny być większe zera!')

			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch(`/api/operation/${operationId?.toString()}`, {
				method: 'PATCH',
				body: JSON.stringify({
					date: operation.date,
					time: operation.time,
					pesticideType: operation.pesticideType,
					pestName: operation.pestName,
					pesticideName: operation.pesticideName,
					isLiquid: operation.isLiquid,
					pesticideDose: operation.pesticideDose,
					liquidAmount: operation.liquidAmount,
					waitingTime: operation.waitingTime,
					waitingTimeDate: operation.waitingTimeDate,
					status: operation.status,
					note: operation.note
				}),
			})

			if (response.ok) {
				toast.success('Pomyślnie zaktualizowano dane zebiegu cheminizacyjnego!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/operations')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	useEffect(() => {
		const getOperationsDetails = async () => {
			const response = await fetch(`/api/operation/${operationId?.toString()}`)
			const data = await response.json()
			const formattedDate = format(parseISO(data.date), 'yyyy-MM-dd')
			const formattedEndDate = format(parseISO(data.waitingTimeDate), 'yyyy-MM-dd')

			setOperation({
				...operation,
				date: formattedDate,
				time: data.time,
				pesticideType: data.pesticideType,
				pestName: data.pestName,
				pesticideName: data.pesticideName,
				isLiquid: data.isLiquid,
				pesticideDose: data.pesticideDose,
				liquidAmount: data.liquidAmount,
				waitingTime: data.waitingTime,
				waitingTimeDate: formattedEndDate,
				status: data.status,
				note: data.note
			})
		}

		if (operationId) getOperationsDetails()
	}, [operationId])

	return (
		<section className='container py-20'>
			<EditOperationForm
				type='EDIT'
				operation={operation}
				setOperation={setOperation}
				submitting={submitting}
				handleSubmit={editOperation}
				error={error}
			/>
		</section>
	)
}

export default EditOperation
