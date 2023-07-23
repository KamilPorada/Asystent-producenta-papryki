import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrescriptionBottle, faDroplet } from '@fortawesome/free-solid-svg-icons'
import Button from '@components/UI/Button'

const FertigationItem: React.FC<{
	date: string
	fertilizerName: string
	numberOfTunnels: number
	fertilizerDosePerTunnel: number
	waterAmountPerTunnel: number
	handleDelete: () => Promise<void>
	handleEdit: () => Promise<void>
}> = props => {
	const getFormattedDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}

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

	return (
		<>
			<div className='flex flex-col justify-around items-center w-[330px] h-auto py-4 px-2 ring-1 ring-zinc-300 rounded-sm shadow-md bg-white text-black'>
				<p className='w-3/4 pb-1 text-lg text-center font-semibold border-b-[1px] border-zinc-300'>
					FERTYGACJA {getFormattedDate(props.date)}
				</p>
				<div className='flex flex-col items-start w-3/4 py-2 border-b-[1px] border-zinc-300'>
					<p className='mb-1 font-bold self-center'>Dane zabiegu:</p>
					<p className='leading-4 font-thin'>
						<span className='font-semibold'>Nawóz:</span> {props.fertilizerName}
					</p>
					<p className='leading-4 font-thin'>
						<span className='font-semibold'>Liczba tuneli:</span> {props.numberOfTunnels}
					</p>
					<p className='leading-4 font-thin'>
						<span className='font-semibold'>Ilość roztworu:</span> {props.numberOfTunnels * props.waterAmountPerTunnel}l
					</p>
					<p className='leading-4 font-thin'>
						<span className='font-semibold'>Ilość nawozu:</span> {props.numberOfTunnels * props.fertilizerDosePerTunnel}
						kg
					</p>
				</div>
				<div className='flex flex-col items-start w-3/4 pt-3 pb-3 border-b-[1px] border-zinc-300'>
					<p className='mb-1 font-bold self-center'>Dawkowanie:</p>
					<div className='flex flex-row justify-between items-center w-full'>
						<div className='flex flex-row justify-center items-center mt-1'>
							<FontAwesomeIcon icon={faPrescriptionBottle} className='mr-2 text-2xl' />
							<p className='font-thin'>{props.fertilizerDosePerTunnel}kg/tunel</p>
						</div>
						<div className='flex flex-row justify-center items-center mt-1'>
							<FontAwesomeIcon icon={faDroplet} className='mr-2 text-2xl' />
							<p className='font-thin'>{props.waterAmountPerTunnel}l/tunel</p>
						</div>
					</div>
				</div>
				<div className='flex flex-row justify-between w-3/4 pt-4 text-white text-sm'>
					<Button onClick={props.handleEdit}>Edytuj</Button>
					<Button onClick={handleDeleteClick}>Usuń</Button>
				</div>
			</div>
			{showModal && (
				<div className='fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-4 rounded w-3/4 sm:w-auto'>
						<p className='text-black font-semibold'>Czy na pewno chcesz usunąć ten zabieg fertygacji?</p>
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

export default FertigationItem
