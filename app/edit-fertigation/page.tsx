'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { parseISO, format } from 'date-fns'
import EditFertigationForm from '@components/Forms/FertigationForm'

function EditFertigation() {
	const [fertigation, setFertigation] = useState({
		date: '',
		fertilizerName: '',
		numberOfTunnels: 0,
		fertilizerDosePerTunnel: 0,
		waterAmountPerTunnel: 0,
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const searchParams = useSearchParams()
	const fertigationId = searchParams.get('id')

	const editFertigation = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!fertigation.fertilizerName) {
			setError('Wypełnij wszystkie pola formularza odpowiednimi danymi!')

			setIsSubmitting(false)
			return
		}
		if (
			fertigation.numberOfTunnels <= 0 ||
			fertigation.fertilizerDosePerTunnel <= 0 ||
			fertigation.waterAmountPerTunnel <= 0
		) {
			setError('Wszystkie pola liczbowe powinny być większe zera!')

			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch(`/api/fertigation/${fertigationId?.toString()}`, {
				method: 'PATCH',
				body: JSON.stringify({
					date: fertigation.date,
					fertilizerName: fertigation.fertilizerName,
					numberOfTunnels: fertigation.numberOfTunnels,
					fertilizerDosePerTunnel: fertigation.fertilizerDosePerTunnel,
					waterAmountPerTunnel: fertigation.waterAmountPerTunnel,
				}),
			})

			if (response.ok) {
				router.push('/fertigations')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	useEffect(() => {
		const getFertigationDetails = async () => {
			const response = await fetch(`/api/fertigation/${fertigationId?.toString()}`)
			const data = await response.json()
			const formattedDate = format(parseISO(data.date), 'yyyy-MM-dd')

			setFertigation({
				...fertigation,
				date: formattedDate,
				fertilizerName: data.fertilizerName,
				numberOfTunnels: data.numberOfTunnels,
				fertilizerDosePerTunnel: data.fertilizerDosePerTunnel,
				waterAmountPerTunnel: data.waterAmountPerTunnel,
			})
		}

		if (fertigationId) getFertigationDetails()
	}, [fertigationId])

	return (
		<section className='container py-20'>
			<EditFertigationForm
				type='EDIT'
				fertigation={fertigation}
				setFertigation={setFertigation}
				submitting={submitting}
				handleSubmit={editFertigation}
				error={error}
			/>
		</section>
	)
}

export default EditFertigation
