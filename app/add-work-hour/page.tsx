'use client'
import { useEffect, useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import AddWorkHoursForm from '@components/Forms/WorkHoursForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddWorkHour = () => {
	const searchParams = useSearchParams()
	const employeeId = searchParams.get('id')
	const [employeeName, setEmployeeName] = useState('')
	const [workHours, setWorkHours] = useState({
		date: new Date().toISOString().slice(0, 10),
		startTime: '',
		endTime: '',
	})
	const [submitting, setSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	useEffect(() => {
		const fetchEmployeeData = async () => {
			if (!employeeId) {
				toast.error('Brak ID pracownika!', {
					position: toast.POSITION.TOP_CENTER,
				})
				return
			}

			try {
				const response = await fetch(`/api/employee/${employeeId}`)
				if (!response.ok) {
					throw new Error('Błąd podczas pobierania danych pracownika')
				}
				const data = await response.json()
				setEmployeeName(`${data.name} ${data.surname}`)
			} catch (error) {
				toast.error('Nie udało się pobrać danych pracownika!', {
					position: toast.POSITION.TOP_CENTER,
				})
				console.error(error)
			}
		}

		fetchEmployeeData()
	}, [employeeId])

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSubmitting(true)
		setError('')

		const { date, startTime, endTime } = workHours

		// Walidacja formularza
		if (!date || !startTime || !endTime) {
			setError('Wszystkie pola muszą być wypełnione!')
			setSubmitting(false)
			return
		}

		if (startTime >= endTime) {
			setError('Godzina rozpoczęcia nie może być późniejsza niż godzina zakończenia!')
			setSubmitting(false)
			return
		}

		try {
			const response = await fetch('/api/employee-work-time/new', {
				method: 'POST',
				body: JSON.stringify({
					userId: userId,
					employeeId: employeeId,
					date: date,
					startTime: startTime,
					endTime: endTime,
				}),
			})

			if (!response.ok) {
				throw new Error('Błąd podczas zapisywania godzin pracy')
			} else {
				toast.success('Godziny pracy zostały zapisane!', {
					position: toast.POSITION.TOP_CENTER,
				})

				router.push(`/employee-calendar?id=${employeeId}`)
			}
		} catch (error) {
			toast.error('Nie udało się zapisać godzin pracy!', {
				position: toast.POSITION.TOP_CENTER,
			})
			console.error(error)
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<section className='container py-20'>
			<AddWorkHoursForm
				employeeName={employeeName}
				workHours={workHours}
				setWorkHours={setWorkHours}
				submitting={submitting}
				handleSubmit={handleSubmit}
				error={error}
			/>
		</section>
	)
}

export default AddWorkHour
