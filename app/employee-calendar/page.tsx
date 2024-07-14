'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTopBar } from '../../components/contexts/TopBarContext'
import { useSession } from 'next-auth/react'
import CalendarItem from '@components/Items/CalendarItem'
import SectionTitle from '@components/UI/SectionTitle'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Employee {
	_id: string
	name: string
	surname: string
	gender: string
	age: number
	nationality: string
}

interface WorkTime {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	employee: string
	date: string
	startTime: string
	endTime: string
}

const EmployeeCalendar = () => {
	const searchParams = useSearchParams()
	const employeeId = searchParams.get('id')
	const [employee, setEmployee] = useState<Employee | null>(null)
	const [workTimes, setWorkTimes] = useState<WorkTime[]>([])
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''
	const { selectedYear } = useTopBar()

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
				console.log('Dane pracownika:', data)
				setEmployee(data)
			} catch (error) {
				toast.error('Nie udało się pobrać danych pracownika!', {
					position: toast.POSITION.TOP_CENTER,
				})
				console.error(error)
			}
		}

		fetchEmployeeData()
	}, [employeeId])

	useEffect(() => {
		const fetchWorkTimesData = async () => {
			if (!employee) return

			try {
				const response = await fetch('/api/employee-work-time')
				if (!response.ok) {
					throw new Error('Błąd podczas pobierania danych godzin pracy')
				}
				const data: WorkTime[] = await response.json()

				const filteredWorkTimes = data.filter(
					workTime =>
						workTime.creator._id === userId &&
						workTime.employee === employeeId &&
						new Date(workTime.date).getFullYear() === selectedYear
				)
				setWorkTimes(filteredWorkTimes)
			} catch (error) {
				toast.error('Nie udało się pobrać danych godzin pracy!', {
					position: toast.POSITION.TOP_CENTER,
				})
				console.error(error)
			}
		}

		if (employee) {
			fetchWorkTimesData()
		}
	}, [employee, userId, selectedYear])

	const handleDelete = async (workTimeId: string) => {
		try {
			const response = await fetch(`/api/employee-work-time/${workTimeId}`, {
				method: 'DELETE',
			})

			if (!response.ok) {
				throw new Error('Błąd podczas usuwania godziny pracy')
			}

			setWorkTimes(prevWorkTimes => prevWorkTimes.filter(workTime => workTime._id !== workTimeId))

			toast.success('Godzina pracy została usunięta', {
				position: toast.POSITION.TOP_CENTER,
			})
		} catch (error) {
			toast.error('Nie udało się usunąć godziny pracy!', {
				position: toast.POSITION.TOP_CENTER,
			})
			console.error(error)
		}
	}

	return (
		<section className='container py-20'>
			<SectionTitle title='Kalendarz pracownika' />
			<div className='overflow-x-auto xl:overflow-visible'>
				{employee && <CalendarItem employee={employee} workTimes={workTimes} onDelete={handleDelete} />}
			</div>
		</section>
	)
}

export default EmployeeCalendar
