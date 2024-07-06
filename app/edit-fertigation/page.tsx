'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { parseISO, format } from 'date-fns'
import EditFertigationForm from '@components/Forms/FertigationForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function EditFertigation() {
	const [fertigation, setFertigation] = useState({
		date: '',
		fertilizerName: '',
		numberOfTunnels: 0,
		isLiquid: false,
		fertilizerDosePerTunnel: 0,
		waterAmountPerTunnel: 0,
	})
	const [userNumberOfTunnels, setUserNumberOfTunnels] = useState(0)
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const searchParams = useSearchParams()
	const fertigationId = searchParams.get('id')
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

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
					isLiquid: fertigation.isLiquid,
					fertilizerDosePerTunnel: fertigation.fertilizerDosePerTunnel,
					waterAmountPerTunnel: fertigation.waterAmountPerTunnel,
				}),
			})

			if (response.ok) {
				toast.success('Pomyślnie zaktualizowano dane zabiegu fertygacji!', {
					position: toast.POSITION.TOP_CENTER,
				})
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
				isLiquid: data.isLiquid,
				fertilizerDosePerTunnel: data.fertilizerDosePerTunnel,
				waterAmountPerTunnel: data.waterAmountPerTunnel,
			})
		}

		if (fertigationId) getFertigationDetails()
	}, [fertigationId])

	useEffect(() => {
		const getUserDetails = async () => {
			const response = await fetch(`/api/user/${userId}`)
			const data = await response.json()

			setUserNumberOfTunnels(data.numberOfTunnels)
		}

		if (userId) getUserDetails()
	}, [userId])

	return (
		<section className='container py-20'>
			<EditFertigationForm
				type='EDIT'
				fertigation={fertigation}
				setFertigation={setFertigation}
				userNumberOfTunnels={userNumberOfTunnels}
				submitting={submitting}
				handleSubmit={editFertigation}
				error={error}
			/>
		</section>
	)
}

export default EditFertigation
