import { FormEvent } from 'react'
import Link from 'next/link'
import Button from '@components/UI/Button'
import SectionTitle from '@components/UI/SectionTitle'

interface AddPointOfSaleFormProps {
	pointOfSale: {
		name: string
		address: string
		type: number
		latitude: number
		longitude: number
	}
	type: string
	setPointOfSale: (pointOfSale: any) => void
	submitting: boolean
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
	error: string
}

const AddPointOfSaleForm: React.FC<AddPointOfSaleFormProps> = props => {
	const { type, pointOfSale, setPointOfSale, submitting, handleSubmit } = props

	return (
		<section className='w-full mt-3 flex flex-col items-center text-black'>
			<SectionTitle title={type === 'ADD' ? 'Nowy punkt sprzedaży' : 'Edycja punktu sprzedaży'} />
			<p className='mt-3 lg:text-lg text-center'>
				{type === 'ADD' ? 'Dodaj nowy' : 'Edytuj'} punkt sprzedaży i podaj niezbędne informacje.
			</p>
			<form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4'>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Nazwa</span>
					<input
						onChange={e => setPointOfSale({ ...pointOfSale, name: e.target.value })}
						type='text'
						placeholder='Wpisz nazwę'
						className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={pointOfSale?.name || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Adres</span>
					<input
						onChange={e => setPointOfSale({ ...pointOfSale, address: e.target.value })}
						type='text'
						placeholder='Wpisz adres'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={pointOfSale?.address || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Typ</span>
					<select
						value={pointOfSale?.type || 0}
						onChange={e => setPointOfSale({ ...pointOfSale, type: Number(e.target.value) })}
						className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
						<option disabled value={0} className='text-sm'>
							--Wybierz typ punktu sprzedaży--
						</option>
						<option value={1} className='text-sm'>
							Skup
						</option>
						<option value={2} className='text-sm'>
							Rynek hurtowy
						</option>
						<option value={3} className='text-sm'>
							Klient prywatny
						</option>
						<option value={4} className='text-sm'>
							Inne
						</option>
					</select>
				</label>

				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Szerokość geograficzna</span>
					<input
						onChange={e => setPointOfSale({ ...pointOfSale, latitude: e.target.value })}
						type='number'
						step='any'
						placeholder='Wpisz szerokość geograficzną'
						pattern='^-?\d+(\.\d+)?$'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={pointOfSale?.latitude || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Długość geograficzna</span>
					<input
						onChange={e => setPointOfSale({ ...pointOfSale, longitude: e.target.value })}
						type='number'
						step='any'
						placeholder='Wpisz długość geograficzną'
						pattern='^-?\d+(\.\d+)?$'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={pointOfSale?.longitude || ''}
					/>
				</label>
				<p className='mt-1 text-center font-semibold text-red-500'>{props.error}</p>
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

export default AddPointOfSaleForm
