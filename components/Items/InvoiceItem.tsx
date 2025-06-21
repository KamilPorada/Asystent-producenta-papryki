import React, { useState } from 'react'
import Button from '@components/UI/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

const InvoiceItem: React.FC<{
	index: number
	date: string
	pointOfSale: string
	invoiceNumber: string
	totalSum: number
	status: boolean
	updatedStatus: boolean
	handleUpdateStatus: () => Promise<void>
	handleEdit: () => Promise<void>
	handleDelete: () => Promise<void>
}> = props => {
	const [showModal, setShowModal] = useState(false)

	const formatNumber = (number: number | undefined) => {
		if (number === undefined || number === null) {
			console.error('totalSum is undefined or null');
			return '0,00 PLN'; // lub inna wartość domyślna
		}

		return number.toLocaleString('pl-PL', {
			style: 'currency',
			currency: 'PLN',
			minimumFractionDigits: 2,
		});
	}

	const handleDeleteClick = async () => {
		setShowModal(true)
	}

	const handleConfirmDelete = async () => {
		await props.handleDelete()
		setShowModal(false)
	}

	const handleCancelDelete = () => {
		setShowModal(false)
	}

	const handleUpdateStatus = async () => {
		await props.handleUpdateStatus()
	}

	const getStatusLabel = (status: boolean): string => {
		return status ? 'Zrealizowana' : 'Niezrealizowana'
	}

	return (
		<>
			<div
				className={`flex w-[1137px] h-auto text-sm lg:text-base text-black text-center ring-1 ring-black overflow-x-auto ${
					props.status ? 'bg-zinc-300' : 'bg-white'
				}`}>
				<div className='flex flex-row justify-evenly items-center w-full h-full'>
					<p className='w-16 h-full ring-1 ring-black'>{props.index}</p>
					<p className='w-28 ring-1 ring-black'>{props.date}</p>
					<p className='w-44 ring-1 ring-black'>{props.invoiceNumber}</p>
					<p className='w-40 ring-1 ring-black'>{formatNumber(props.totalSum)}</p>
					<p className='w-80 ring-1 ring-black'>{props.pointOfSale}</p>
					<p className='w-36 ring-1 ring-black'>{getStatusLabel(props.status)}</p>
					<div className='flex flex-row justify-evenly w-44 ring-1 ring-black text-white'>
						<button
							className={`scale-75 px-[10px] bg-mainColor ${
								props.status
									? 'bg-gray-100 text-zinc-400 cursor-not-allowed ring-1 ring-zinc-400'
									: 'hover:bg-green-800 transition'
							}`}
							disabled={props.status}
							onClick={handleUpdateStatus}>
							<FontAwesomeIcon icon={faCheck} />
						</button>
						<button
							className='scale-75 px-[10px] bg-mainColor hover:bg-green-800 transition'
							onClick={props.handleEdit}>
							<FontAwesomeIcon icon={faPenToSquare} />
						</button>
						<button
							className='scale-75 px-[10px] bg-mainColor hover:bg-green-800 transition'
							onClick={handleDeleteClick}>
							<FontAwesomeIcon icon={faTrash} />
						</button>
					</div>
				</div>
			</div>

			{showModal && (
				<div className='fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-4 rounded w-3/4 sm:w-auto'>
						<p className='text-black font-semibold'>Czy na pewno chcesz usunąć tę fakturę?</p>
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

export default InvoiceItem
