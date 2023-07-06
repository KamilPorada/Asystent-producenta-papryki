import React, { useState } from 'react'
import Button from '@components/UI/Button'

const TradeOfPepperItem: React.FC<{
	index: number
	date: string
	clas: string
	color: string
	price: number
	weight: number
	vatRate: number
	totalSum: number
	pointOfSale: string
	handleDelete: () => Promise<void>
	handleEdit: () => Promise<void>
}> = props => {
	const [showModal, setShowModal] = useState(false)

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

	return (
		<>
			<div
				className={`flex w-[1137px] h-auto text-sm lg:text-base text-black text-center ring-1 ring-black overflow-x-auto ${
					props.index % 2 === 0 ? 'bg-zinc-300' : 'bg-white'
				}`}>
				<div className='flex flex-row justify-evenly items-center w-full h-full'>
					<p className='w-10 h-full ring-1 ring-black'>{props.index}</p>
					<p className='w-24 ring-1 ring-black'>{props.date}</p>
					<p className='w-28 ring-1 ring-black'>{props.clas}</p>
					<p className='w-28 ring-1 ring-black'>{props.color}</p>
					<p className='w-20 ring-1 ring-black'>{props.price}zł</p>
					<p className='w-28 ring-1 ring-black'>{props.weight}kg</p>
					<p className='w-20 ring-1 ring-black'>{props.vatRate}%</p>
					<p className='w-28 ring-1 ring-black'>{props.totalSum}zł</p>
					<p className='w-80 ring-1 ring-black'>{props.pointOfSale}</p>
					<div className='flex flex-row justify-evenly w-20 text-white ring-1 ring-black -z-5'>
						<button
							className='scale-75 px-[10px] bg-mainColor hover:bg-green-800 transition'
							onClick={props.handleEdit}>
							<i className='fa-solid fa-pen-to-square'></i>
						</button>
						<button
							className='scale-75 px-[10px] bg-mainColor hover:bg-green-800 transition'
							onClick={handleDeleteClick}>
							<i className='fa-solid fa-trash'></i>
						</button>
					</div>
				</div>
			</div>

			{showModal && (
				<div className='fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-4 rounded w-3/4 sm:w-auto'>
						<p className='text-black font-semibold'>Czy na pewno chcesz usunąć tę transakcję sprzedaży papryki?</p>
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

export default TradeOfPepperItem
