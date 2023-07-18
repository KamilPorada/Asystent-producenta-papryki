import { FormEvent } from 'react'
import { useState ,useEffect } from 'react'
import Link from 'next/link'
import Button from '@components/UI/Button'
import SectionTitle from '@components/UI/SectionTitle'
import React from 'react'

interface AddTradeOfPepperFormProps {
	tradeOfPepper: {
		date: string
		clas: number
		color: number
		price: number
		weight: number
		vatRate: number
		pointOfSale: number
	}
	type: string
	setTradeOfPepper: (tradeOfPepper: any) => void
	submitting: boolean
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
	error: string
	pointOfSales: PointOfSale[]
}

interface PointOfSale {
	_id: string
	address: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	latitude: string
	longitude: string
	name: string
	type: string
}

const AddTradeOfPepperForm: React.FC<AddTradeOfPepperFormProps> = props => {
	const { type, tradeOfPepper, setTradeOfPepper, submitting, handleSubmit, error, pointOfSales } = props

	const [currentDate, setCurrentDate] = useState<string>('')

	useEffect(() => {
		if (type === 'ADD') {
			setCurrentDate(new Date().toISOString().slice(0, 10))
		} else if (type === 'EDIT' && tradeOfPepper?.date) {
			const parsedDate = Date.parse(tradeOfPepper.date)
			if (!isNaN(parsedDate)) {
				setCurrentDate(new Date(parsedDate).toISOString().slice(0, 10))
			}
		}
	}, [type, tradeOfPepper])

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentDate(e.target.value)
		setTradeOfPepper({ ...tradeOfPepper, date: e.target.value })
	}

	return (
		<section className='w-full mt-3 flex flex-col items-center text-black'>
			<SectionTitle title={type === 'ADD' ? 'Nowa sprzedaż papryki' : 'Edycja sprzedaży papryki'} />
			<p className='mt-3 lg:text-lg text-center'>
				{type === 'ADD' ? 'Dodaj nową' : 'Edytuj'} sprzedaż papryki i podaj niezbędne informacje.
			</p>
			<form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4'>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Data</span>
					<input
						type='date'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={currentDate}
						onChange={handleDateChange}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Klasa</span>
					<select
						value={tradeOfPepper?.clas || 0}
						onChange={e => setTradeOfPepper({ ...tradeOfPepper, clas: Number(e.target.value) })}
						className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
						<option disabled value={0} className='text-sm'>
							--Wybierz klasę papryki--
						</option>
						<option value={1} className='text-sm'>
							1
						</option>
						<option value={2} className='text-sm'>
							2
						</option>
						<option value={3} className='text-sm'>
							Krojona
						</option>
					</select>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Kolor</span>
					<select
						value={tradeOfPepper?.color || ''}
						onChange={e => setTradeOfPepper({ ...tradeOfPepper, color: e.target.value })}
						className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
						<option disabled value='' className='text-sm'>
							--Wybierz kolor papryki--
						</option>
						<option value={1} className='text-sm'>
							Czerwona
						</option>
						<option value={2} className='text-sm'>
							Żółta
						</option>
						<option value={3} className='text-sm'>
							Zielona
						</option>
						<option value={4} className='text-sm'>
							Pomarańczowa
						</option>
						<option value={5} className='text-sm'>
							Blondyna
						</option>
					</select>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Cena</span>
					<input
						onChange={e => setTradeOfPepper({ ...tradeOfPepper, price: e.target.value })}
						type='number'
						step='any'
						placeholder='Wpisz cenę [zł]'
						pattern='^\d+(\.\d{2})?$'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={tradeOfPepper?.price || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Masa</span>
					<input
						onChange={e => setTradeOfPepper({ ...tradeOfPepper, weight: e.target.value })}
						type='number'
						placeholder='Wpisz masę towaru [kg]'
						pattern='^\d+(\.\d{2})?$'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={tradeOfPepper?.weight || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Stawka VAT</span>
					<input
						onChange={e => setTradeOfPepper({ ...tradeOfPepper, vatRate: e.target.value })}
						type='number'
						placeholder='Wpisz stawkę VAT [%]'
						pattern='^\d+(\.\d{2})?$'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={tradeOfPepper?.vatRate || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Punkt sprzedaży</span>
					<select
						value={tradeOfPepper?.pointOfSale || ''}
						onChange={e => setTradeOfPepper({ ...tradeOfPepper, pointOfSale: e.target.value })}
						className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
						<option disabled value='' className='text-sm'>
							--Wybierz punkt sprzedaży--
						</option>
						{pointOfSales.map((point, index) => (
							<option key={index} value={point.name} className='text-sm'>
								{point.name}
							</option>
						))}
					</select>
				</label>
				<p className='mt-1 text-center font-semibold text-red-500'>{error}</p>
				<div className='flex flex-row justify-center text-white'>
					<Link href='/'>
						<Button>Anuluj</Button>
					</Link>
					<Button disabled={submitting}>
						{submitting ? (type === 'ADD' ? 'Dodawanie...' : 'Edycja...') : type === 'ADD' ? 'Dodaj' : 'Edytuj'}
					</Button>
				</div>
			</form>
		</section>
	)
}

export default AddTradeOfPepperForm
