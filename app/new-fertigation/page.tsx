'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import FertigationForm from '@components/Forms/FertigationForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTopBar } from '../../components/contexts/TopBarContext'

function NewFertigation() {
	const [fertigation, setFertigation] = useState({
		date: new Date().toISOString().slice(0, 10),
		fertilizerName: '',
		numberOfTunnels: 0,
		isLiquid: false,
		fertilizerDosePerTunnel: 0,
		waterAmountPerTunnel: 0,
	})
	const [userNumberOfTunnels, setUserNumberOfTunnels] = useState(0)
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const { selectedYear } = useTopBar()
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
					isLiquid: fertigation.isLiquid,
					fertilizerDosePerTunnel: fertigation.fertilizerDosePerTunnel,
					waterAmountPerTunnel: fertigation.waterAmountPerTunnel,
				}),
			})
			setError('')
			if (response.ok) {
				toast.success('Pomyślnie utworzono nowy zabieg fertygacji!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/fertigations')
			} else {
				throw new Error('Błąd podczas dodawania zabiegu fertygacji')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	useEffect(() => {
		const getUserDetails = async () => {
			const response = await fetch(`/api/user/${userId}`)
			const data = await response.json()

			setUserNumberOfTunnels(data.numberOfTunnels[selectedYear])
		}

		if (userId) getUserDetails()
	}, [userId])

	return (
		<section className='container py-20'>
			<FertigationForm
				type='ADD'
				fertigation={fertigation}
				setFertigation={setFertigation}
				userNumberOfTunnels={userNumberOfTunnels}
				submitting={submitting}
				handleSubmit={addFertigation}
				error={error}
			/>
		</section>
	)
}

export default NewFertigation
