import React, { useState } from 'react'
import {
	format,
	addMonths,
	subMonths,
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	startOfWeek,
	endOfWeek,
	isSunday,
	getMonth,
	setMonth,
	setYear,
	getYear,
} from 'date-fns'
import Button from '@components/UI/Button'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface Employee {
	_id: string
	name: string
	surname: string
	gender: string
	age: number
	nationality: string
	year: number
	salaryPerHour: number
}

interface WorkTime {
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
	_id: string
}

interface CalendarItemProps {
	employee: Employee
	workTimes: WorkTime[]
	onDelete: (workTimeId: string) => void
}

const CalendarItem: React.FC<CalendarItemProps> = ({ employee, workTimes, onDelete }) => {
	const currentMonthIndex = getMonth(new Date())
	const initialDate = setYear(setMonth(new Date(), currentMonthIndex), employee.year)
	const [currentDate, setCurrentDate] = useState(initialDate)
	const [showConfirmDialog, setShowConfirmDialog] = useState(false)
	const [workTimeToDelete, setWorkTimeToDelete] = useState<string | null>(null)

	const isStartOfYear = getMonth(currentDate) === 0
	const isEndOfYear = getMonth(currentDate) === 11
	const router = useRouter()

	const handlePreviousMonth = () => {
		if (!isStartOfYear) {
			setCurrentDate(prevDate => subMonths(prevDate, 1))
		}
	}

	const handleNextMonth = () => {
		if (!isEndOfYear) {
			setCurrentDate(prevDate => addMonths(prevDate, 1))
		}
	}

	const handleDeleteClick = (workTimeId: string) => {
		setWorkTimeToDelete(workTimeId)
		setShowConfirmDialog(true)
	}

	const confirmDelete = () => {
		if (workTimeToDelete) {
			onDelete(workTimeToDelete)
		}
		setShowConfirmDialog(false)
		setWorkTimeToDelete(null)
	}

	const cancelDelete = () => {
		setShowConfirmDialog(false)
		setWorkTimeToDelete(null)
	}

	const renderCalendar = () => {
		const startDay = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 })
		const endDay = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 })
		const days = eachDayOfInterval({ start: startDay, end: endDay })

		const polishWeekDays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']

		return (
			<div className='grid grid-cols-7 gap-4'>
				{days.map(day => {
					const isCurrentMonth = day.getMonth() === currentDate.getMonth()
					const isSun = isSunday(day)
					const workTimesForDay = workTimes.filter(
						wt => format(new Date(wt.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
					)

					return (
						<div
							key={day.toISOString()}
							className={`w-36 h-36 flex flex-col items-center justify-between gap-2 border border-gray-300  ${
								isSun ? 'text-red-500' : ''
							} ${isCurrentMonth ? '' : 'text-gray-400'}`}>
							<div className='h-1/3 flex flex-col justify-center items-center mt-2'>
								<div className='font-bold text-lg'>{format(day, 'd')}</div>
								<div className='text-sm'>{polishWeekDays[(day.getDay() + 6) % 7]}</div>
							</div>
							{workTimesForDay.length > 0 && (
								<div className='h-2/3 w-full flex flex-col items-start justify-baseline text-xs px-1'>
									<p className='font-bold text-black'>Godziny pracy:</p>
									{workTimesForDay.map(workTime => {
										const durationHours = calculateWorkDuration(workTime.startTime, workTime.endTime)
										return (
											<div
												key={`${workTime.startTime}-${workTime.endTime}`}
												className='flex items-center justify-between w-full text-black'>
												<div>{`${workTime.startTime}-${workTime.endTime} -> ${durationHours}`}</div>
												<FontAwesomeIcon
													icon={faTrash}
													className='text-red-500 cursor-pointer transition-all hover:scale-110'
													onClick={() => handleDeleteClick(workTime._id)}
												/>
											</div>
										)
									})}
								</div>
							)}
						</div>
					)
				})}
			</div>
		)
	}

	const monthNamesInNominative = [
		'Styczeń',
		'Luty',
		'Marzec',
		'Kwiecień',
		'Maj',
		'Czerwiec',
		'Lipiec',
		'Sierpień',
		'Wrzesień',
		'Październik',
		'Listopad',
		'Grudzień',
	]

	const currentMonth = monthNamesInNominative[getMonth(currentDate)]
	const currentYear = getYear(currentDate)

	const navigateToAddWorkHour = () => {
		router.push(`/add-work-hour?id=${employee._id}`)
	}

	const calculateWorkDuration = (startTime: string, endTime: string) => {
		const [startHour, startMinute] = startTime.split(':').map(Number)
		const [endHour, endMinute] = endTime.split(':').map(Number)

		const startTotalMinutes = startHour * 60 + startMinute
		const endTotalMinutes = endHour * 60 + endMinute

		const durationMinutes = endTotalMinutes - startTotalMinutes
		const hours = Math.floor(durationMinutes / 60)
		const minutes = durationMinutes % 60

		return `${hours}h ${minutes}min`
	}

	return (
		<div className='flex flex-col items-center w-[1150px] p-5 mt-12 bg-white text-black rounded shadow-md'>
			<div className='w-full flex flex-col items-center mb-4'>
				<h2 className='text-xl font-semibold'>{`${employee.name} ${employee.surname}`}</h2>
				<div className='flex justify-between items-center w-full mt-2'>
					<Button
						onClick={handlePreviousMonth}
						disabled={isStartOfYear}
						className={`${isStartOfYear ? 'text-black' : 'text-white'} bg-mainColor rounded`}>
						&lt;
					</Button>
					<div className='text-lg font-semibold'>{`${currentMonth} ${currentYear}`}</div>
					<Button
						onClick={handleNextMonth}
						disabled={isEndOfYear}
						className={`${isEndOfYear ? 'text-black' : 'text-white'} bg-mainColor rounded`}>
						&gt;
					</Button>
				</div>
			</div>
			{renderCalendar()}
			<Button className='mt-4 text-white' onClick={navigateToAddWorkHour}>
				Dodaj godziny pracy
			</Button>

			{showConfirmDialog && (
				<div className='fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-4 rounded w-3/4 sm:w-auto'>
						<p className='text-black font-semibold'>Czy na pewno chcesz usunąć ten czas pracy?</p>
						<div className='flex justify-end mt-4 text-white'>
							<Button onClick={confirmDelete}>Tak</Button>
							<Button onClick={cancelDelete}>Nie</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default CalendarItem
