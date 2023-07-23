import React, { useState } from 'react'
import Button from '@components/UI/Button'

const NoteItem: React.FC<{
	date: string
	title: string
	content: string
	handleDelete: () => Promise<void>
	handleEdit: () => Promise<void>
}> = props => {
	const getFormattedDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`
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
			<div className='flex flex-col justify-between items-center w-full md:w-5/12 lg:w-3/12 h-72 py-4 px-2 ring-1 ring-zinc-300 rounded-sm shadow-md bg-white text-black'>
				<div className='flex flex-col justify-around items-center pb-2 border-b-[2px] border-mainColor'>
					<p className='text-lg font-semibold'>{props.title}</p>
					<p className='text-lg'>{getFormattedDate(props.date)}</p>
				</div>
				<div className='pt-3'>
					<p className='text-center'>{props.content}</p>
				</div>
				<div className='flex flex-row justify-between text-sm text-white'>
					<Button onClick={props.handleEdit}>Edytuj</Button>
					<Button onClick={handleDeleteClick}>Usuń</Button>
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

export default NoteItem
