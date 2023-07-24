import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCalendar,
	faClock,
	faBugs,
	faViruses,
	faSkullCrossbones,
	faCheck,
	faDroplet,
} from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import Button from '@components/UI/Button'

const OperationItem: React.FC<{
	date: string
	time: string
	pesticideType: number
	pesticideName: string
	pesticideDose: number
	liquidAmount: number
	waitingTime: number
	waitingTimeDate: string
	status: boolean
	updatedStatus: boolean
	handleUpdateStatus: () => Promise<void>
	handleEdit: () => Promise<void>
	handleDelete: () => Promise<void>
	
}> = props => {
	const getOperationTypeName = (pesticideIndex: number) => {
		switch (pesticideIndex) {
			case 1:
				return 'Zabieg owadobójczy'
			case 2:
				return 'Zabieg grzybobójczy'
			case 3:
				return 'Zabieg chwastobójczy'
			default:
				return 'Zabieg'
		}
	}
	const getOperationIcon = (pesticideIndex: number) => {
		switch (pesticideIndex) {
			case 1:
				return faBugs
			case 2:
				return faViruses
			case 3:
				return faPagelines
			default:
				return faSkullCrossbones
		}
	}

	const getFormattedDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}

	const currentDate = new Date()
	const formattedWaitingTimeDate = new Date(props.waitingTimeDate)
	const formattedOperationDate = new Date(props.date)
	const isPastDate = currentDate < formattedOperationDate
	const isExecuted = props.status

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

	const handleUpdateStatus = async () => {
		await props.handleUpdateStatus()
	}

	return (
		<>
			<div className='w-80 p-2 mt-3 ring-1 ring-zinc-300 bg-white text-black rounded shadow-sm'>
				<div className='flex flex-col items-center w-full h-full'>
					<div className='flex flex-col items-center w-48 pb-3 border-b-[1px] border-zinc-300'>
						<p className='text-lg font-semibold leading-7'>{getOperationTypeName(props.pesticideType)}</p>
						<div className='flex flex-row'>
							<FontAwesomeIcon
								icon={getOperationIcon(props.pesticideType)}
								className='mr-3 text-5xl text-secondaryColor'
							/>
							<div className='flex flex-col justify-around pl-3 border-l-[1px] border-zinc-300'>
								<p className='leading-4 font-thin'>
									<FontAwesomeIcon icon={faCalendar} /> {getFormattedDate(props.date)}
								</p>
								<p className='leading-4 font-thin'>
									<FontAwesomeIcon icon={faClock} /> {props.time}
								</p>
							</div>
						</div>
					</div>
					<div className='w-48 py-2 border-b-[1px] border-zinc-300'>
						<p className='text-lg font-semibold leading-7'>Dane pestycydu:</p>
						<p className='leading-4 font-thin'>
							<span className='font-bold'>Pestycyd:</span> {props.pesticideName}
						</p>
						<p className='leading-4 font-thin'>
							<span className='font-bold'>Dawka:</span> {props.pesticideDose}ml/100l wody
						</p>
						<p className='leading-4 font-thin'>
							<span className='font-bold'>Ilość cieczy roboczej:</span> {props.liquidAmount}l
						</p>
					</div>
					<div className='w-48 py-2 border-b-[1px] border-zinc-300'>
						<p className='text-lg font-semibold leading-7'>Dane karencji:</p>
						<p className='leading-4 font-thin'>
							<span className='font-bold'>Karencja:</span> {props.waitingTime} dni
						</p>
						<p className='leading-4 font-thin'>
							<span className='font-bold'>Koniec karencji:</span> {getFormattedDate(props.waitingTimeDate)}
						</p>
						<p className='leading-4 font-thin'>
							<span className='font-bold'>Status:</span> {props.status ? 'Zabieg wykonany' : 'Zabieg zaplanowany'}
						</p>
					</div>
					<div className='flex flex-col justify-between items-center w-48 py-2  h-5/6 text-white border-b-[1px] border-zinc-300'>
						<Button
							className='w-full mb-1 py-[1px] text-sm'
							disabled={isPastDate || isExecuted}
							onClick={handleUpdateStatus}>
							Wykonaj zabieg
						</Button>
						<Button className='w-full mb-1 py-[1px] text-sm' disabled={isExecuted} onClick={props.handleEdit}>
							Edytuj zabieg
						</Button>
						<Button className='w-full py-[1px] text-sm' onClick={handleDeleteClick}>
							Usuń zabieg
						</Button>
					</div>
					<div className='flex flex-row justify-around items-center pt-2 w-48'>
						{!props.status && (
							<>
								<FontAwesomeIcon icon={faDroplet} className='text-3xl text-blue-600' />
								<p className='font-semibold text-blue-600'>WYKONAJ ZABIEG!</p>
							</>
						)}
						{props.status && currentDate < formattedWaitingTimeDate && (
							<>
								<FontAwesomeIcon icon={faSkullCrossbones} className='text-3xl text-red-600' />
								<p className='font-semibold text-red-600'>TRWA OKRES KARENCJI!</p>
							</>
						)}
						{props.status && currentDate >= formattedWaitingTimeDate && (
							<>
								<FontAwesomeIcon icon={faCheck} className='text-3xl text-green-800' />
								<p className='font-semibold text-green-800'>OKRES KARENCJI MINĄŁ!</p>
							</>
						)}
					</div>
				</div>
			</div>
			{showModal && (
				<div className='fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-4 rounded w-3/4 sm:w-auto'>
						<p className='text-black font-semibold'>Czy na pewno chcesz usunąć ten zabieg cheminizacyjny?</p>
						<div className='flex justify-end mt-4'>
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

export default OperationItem
