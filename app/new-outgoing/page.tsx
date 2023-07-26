'use client'
import { useState, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import NewOutgoingForm from '@components/Forms/OutgoingForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function NewOutgoing() {
	const [outgoing, setOutgoing] = useState({
		name: '',
		category: 0,
		date: new Date().toISOString().slice(0, 10),
		price: 0,
		amount: 0,
		totalSum: 0,
		describe: '',
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const addOutgoing = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!outgoing.name || !outgoing.date || outgoing.price === 0 || outgoing.amount === 0 || !outgoing.describe) {
			setError('Wypełnij wszystkie pola formularza!')
			setIsSubmitting(false)
			return
		}

		try {
			const totalSum = (outgoing.amount * outgoing.price).toFixed(2)
			const response = await fetch('/api/outgoing/new', {
				method: 'POST',
				body: JSON.stringify({
					userId: userId,
					name: outgoing.name,
					category: outgoing.category,
					date: outgoing.date,
					price: outgoing.price,
					amount: outgoing.amount,
					totalSum: parseFloat(totalSum),
					describe: outgoing.describe,
				}),
			})
			setError('')
			if (response.ok) {
				toast.success('Pomyślnie dodano nowy wydatek!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/outgoings')
			} else {
				throw new Error('Błąd podczas dodawania wydatku')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className='container py-20'>
			<NewOutgoingForm
				type='ADD'
				outgoing={outgoing}
				setOutgoing={setOutgoing}
				submitting={submitting}
				handleSubmit={addOutgoing}
				error={error}
			/>
		</section>
	)
}

export default NewOutgoing
