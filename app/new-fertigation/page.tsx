'use client'
import { useState, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { parseISO } from 'date-fns'
import FertigationForm from '@components/Forms/FertigationForm'

function NewFertigation() {
	const [fertigation, setFertigation] = useState({
		date: new Date().toISOString().slice(0, 10),
		fertilizerName: '',
		numberOfTunnels: 0,
		fertilizerDosePerTunnel: 0,
		waterAmountPerTunnel: 0,
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const addFertigation = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

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
			const response = await fetch('/api/fertigation/new', {
				method: 'POST',
				body: JSON.stringify({
					userId: userId,
					date: fertigation.date,
					fertilizerName: fertigation.fertilizerName,
					numberOfTunnels: fertigation.numberOfTunnels,
					fertilizerDosePerTunnel: fertigation.fertilizerDosePerTunnel,
					waterAmountPerTunnel: fertigation.waterAmountPerTunnel,
				}),
			})
			setError('')
			if (response.ok) {
				router.push('/')
			} else {
				throw new Error('Błąd podczas dodawania zabiegu fertygacji')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className='container py-20'>
			<FertigationForm
				type='ADD'
				fertigation={fertigation}
				setFertigation={setFertigation}
				submitting={submitting}
				handleSubmit={addFertigation}
				error={error}
			/>
		</section>
	)
}

export default NewFertigation
