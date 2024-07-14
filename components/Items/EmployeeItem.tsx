import React, { useState } from 'react'
import Button from '@components/UI/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus, faTransgenderAlt, faCalendarAlt, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

interface EmployeeCardProps {
	name: string
	surname: string
	age: number
	gender: string
	nationality: string
	hoursWorked: number
	salaryPerHour: number
	handleDelete: () => Promise<void>
	handleEdit: () => Promise<void>
	handleOpenCalendar: () => void
}

const EmployeeCard: React.FC<EmployeeCardProps> = props => {
	const [showModal, setShowModal] = useState(false)

	const handleDeleteClick = async () => {
		setShowModal(true)
	}

	const handleCancelDelete = () => {
		setShowModal(false)
	}

	const handleConfirmDelete = async () => {
		await props.handleDelete()
		setShowModal(false)
	}

	const genderIcon = () => {
		switch (props.gender) {
			case 'Mężczyzna':
				return <FontAwesomeIcon icon={faMars} className='text-blue-500 text-4xl' />
			case 'Kobieta':
				return <FontAwesomeIcon icon={faVenus} className='text-pink-500 text-4xl' />
			default:
				return <FontAwesomeIcon icon={faTransgenderAlt} className='text-green-500 text-4xl' />
		}
	}

	function calculateTimeToHours(timeInMinutes: number) {
		const hours = Math.floor(timeInMinutes / 60)
		const minutes = timeInMinutes % 60

		return `${hours}h ${minutes}min`
	}

	function calculateSalary(timeInMinutes: number) {
		const hours = Math.floor(timeInMinutes / 60);
		const minutes = timeInMinutes % 60;
	
		const time = hours + minutes / 60;
		const salary = time * props.salaryPerHour;
	
		return salary.toFixed(2);
	}
	

	return (
		<>
			<div className='flex flex-col justify-between w-full sm:w-1/2 lg:w-1/4 h-auto ring-1 ring-zinc-300 rounded-lg shadow-md bg-white text-black relative'>
				<div className='flex flex-row justify-between items-start p-6'>
					<div className='flex flex-col'>
						<p className='text-lg font-bold mb-2'>
							{props.name} {props.surname}
						</p>
						<p className='text-md leading-4'>Wiek: {props.age}</p>
						<p className='text-md leading-4'>Narodowość: {props.nationality}</p>
						<p className='text-md leading-4'>Czas pracy: {calculateTimeToHours(props.hoursWorked)}</p>
						<p className='text-md leading-4'>Stawka: {props.salaryPerHour}zł/h</p>
						<p className='text-md leading-4'>Wynagrodzenie: {calculateSalary(props.hoursWorked)}zł</p>
					</div>
					<div className='flex items-center'>{genderIcon()}</div>
				</div>
				<div className='flex flex-row justify-around items-center bg-mainColor text-white rounded-b-lg py-2 px-4'>
					<button className='hover:text-green-400' onClick={props.handleOpenCalendar}>
						<FontAwesomeIcon icon={faCalendarAlt} className='text-xl' />
					</button>
					<button className='hover:text-blue-700' onClick={props.handleEdit}>
						<FontAwesomeIcon icon={faEdit} className='text-xl' />
					</button>
					<button className='hover:text-red-500' onClick={handleDeleteClick}>
						<FontAwesomeIcon icon={faTrashAlt} className='text-xl' />
					</button>
				</div>
			</div>
			{showModal && (
				<div className='fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-4 rounded w-3/4 sm:w-auto'>
						<p className='text-black font-semibold'>Czy na pewno chcesz usunąć tego pracownika?</p>
						<div className='flex justify-end mt-4 space-x-4'>
							<Button className='' onClick={handleConfirmDelete}>
								Tak
							</Button>
							<Button className='' onClick={handleCancelDelete}>
								Nie
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default EmployeeCard
