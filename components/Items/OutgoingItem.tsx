import { useState } from 'react'

const categoryOptions = [
	'Nasiona',
	'Pestycydy',
	'Nawozy',
	'Narzędzia',
	'Maszyny',
	'Eksploatacja produkcji papryki',
	'Inne',
]

const categoryIcons = [
	'fa-solid fa-seedling',
	'fa-solid fa-skull-crossbones',
	'fa-solid fa-flask',
	'fa-solid fa-tools',
	'fa-solid fa-tractor',
	'fa-solid fa-pepper-hot',
	'fa-solid fa-cube',
]

const OutgoingItem: React.FC<{
	name: string
	category: number
	date: string
	price: number
	amount: number
	totalSum: number
	describe: string
	handleDelete: () => Promise<void>
	handleEdit: () => Promise<void>
}> = props => {
	const [showConfirmation, setShowConfirmation] = useState(false)

	const handleDeleteClick = async () => {
		setShowConfirmation(true)
	}

	const handleConfirmDelete = async () => {
		try {
			await props.handleDelete()
		} catch (error) {
			console.log(error)
		} finally {
			setShowConfirmation(false)
		}
	}

	const handleCancelDelete = () => {
		setShowConfirmation(false)
	}
	const getCategoryLabel = (categoryIndex: number) => {
		return categoryOptions[categoryIndex]
	}

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`
	}

	const formatPrice = (price: number) => {
		return price.toLocaleString('pl-PL') + 'zł'
	}

	const formatNumberWithSpaces = (number: number) => {
		return number.toLocaleString('pl-PL')
	}

	return (
		<div className='flex flex-row justify-between items-center w-full md:w-[48%] mt-5 p-3 bg-white text-black rounded ring-1 ring-zinc-300'>
			<div className='flex flex-col w-3/5'>
				<p className='font-semibold mb-1 text-lg leading-4'>{props.name}</p>
				<p className='leading-4 font-thin'>
					<span className='font-semibold'>Kategoria: </span>
					{getCategoryLabel(props.category)}
				</p>
				<p className='leading-4 font-thin'>
					<span className='font-semibold'>Data: </span>
					{formatDate(props.date)}
				</p>
				<p className='leading-4 font-thin'>
					<span className='font-semibold'>Cena: </span>
					{formatPrice(props.price)}
				</p>
				<p className='leading-4 font-thin'>
					<span className='font-semibold'>Liczba sztuk: </span>
					{formatNumberWithSpaces(props.amount)}
				</p>
				<p className='leading-4 font-thin'>
					<span className='font-semibold'>Suma: </span>
					{formatPrice(props.totalSum)}
				</p>
				{showConfirmation ? (
					<div className='flex flex-col justify-start w-auto text-white'>
						<p className='mb-1 text-red-500 font-semibold '>Potwierdź usunięcie!</p>
						<div className='flex flex-row'>
							<button className='bg-mainColor rounded font-semibold px-4 mr-2' onClick={handleCancelDelete}>
								Anuluj
							</button>
							<button className='bg-mainColor rounded font-semibold px-4' onClick={handleConfirmDelete}>
								Potwierdzam
							</button>
						</div>
					</div>
				) : (
					<div className='flex flex-row justify-start flex-wrap mt-3 text-white'>
						<button onClick={props.handleEdit} className='bg-mainColor rounded font-semibold px-4 mr-2'>
							Edytuj
						</button>
						<button onClick={handleDeleteClick} className='bg-mainColor rounded font-semibold px-4'>
							Usuń
						</button>
					</div>
				)}
			</div>
			<div className='flex flex-col justify-between w-2/5'>
				<p className='font-semibold leading-4'>
					Opis:
					<br />
					<span className='font-thin'>{props.describe}</span>
				</p>
				<i className={`fa-solid ${categoryIcons[props.category]} self-end text-5xl text-secondaryColor`}></i>
			</div>
		</div>
	)
}

export default OutgoingItem
