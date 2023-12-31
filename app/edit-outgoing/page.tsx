'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { parseISO, format } from 'date-fns'
import EditOutgoingForm from '@components/Forms/OutgoingForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function EditOutgoing() {
	const [outgoing, setOutgoing] = useState({
		name: '',
		date: '',
		category: 0,
		price: 0,
		amount: 0,
		describe: '',
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const searchParams = useSearchParams()
	const outgoingId = searchParams.get('id')

	const editPointOfSale = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!outgoing.name || outgoing.price === 0 || outgoing.amount === 0 || !outgoing.describe) {
			setError('Wypełnij wszystkie pola formularza!')
			setIsSubmitting(false)
			return
		}

		try {
			const totalSum = (outgoing.amount * outgoing.price).toFixed(2)
			const response = await fetch(`/api/outgoing/${outgoingId}`, {
				method: 'PATCH',
				body: JSON.stringify({
					name: outgoing.name,
					date: outgoing.date,
					category: outgoing.category,
					price: outgoing.price,
					amount: outgoing.amount,
					totalSum: parseFloat(totalSum),
					describe: outgoing.describe,
				}),
			})

			if (response.ok) {
				toast.success('Pomyślnie zaktualizowano dane wydatku!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/outgoings')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	useEffect(() => {
		const getOutgoingDetails = async () => {
			const response = await fetch(`/api/outgoing/${outgoingId}`)
			const data = await response.json()
			const formattedDate = format(parseISO(data.date), 'yyyy-MM-dd')

			setOutgoing({
				...outgoing,
				name: data.name,
				date: formattedDate,
				category: data.category,
				price: data.price,
				amount: data.amount,
				describe: data.describe,
			})
		}

		if (outgoingId) getOutgoingDetails()
	}, [outgoingId])

	return (
		<section className='container py-20'>
			<EditOutgoingForm
				type='EDIT'
				outgoing={outgoing}
				setOutgoing={setOutgoing}
				submitting={submitting}
				handleSubmit={editPointOfSale}
				error={error}
			/>
		</section>
	)
}

export default EditOutgoing
