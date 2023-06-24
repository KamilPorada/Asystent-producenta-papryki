import { FormEvent } from 'react'
import Link from 'next/link'
import Button from '@components/UI/Button'
import SectionTitle from '@components/UI/SectionTitle'

interface AddPointOfSaleFormProps {
	pointOfSale: {
		name: string
		address: string
		type: string
		latitude: string
		longitude: string
	}
	setPointOfSale: (pointOfSale: any) => void
	submitting: boolean
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
	error: string
}

const AddPointOfSaleForm: React.FC<AddPointOfSaleFormProps> = props => {
	const { pointOfSale, setPointOfSale, submitting, handleSubmit } = props

	return (
		<section className='w-full mt-3 flex flex-col items-center text-black'>
			<SectionTitle title='Nowy punkt sprzedaży' />
			<p className='mt-3 lg:text-lg text-center'>Dodaj nowy punkt sprzedaży i podaj niezbędne informacje.</p>
			<form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4 glassmorphism'>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Nazwa</span>
					<input
						onChange={e => setPointOfSale({ ...pointOfSale, name: e.target.value })}
						type='text'
						placeholder='Wpisz nazwę'
						className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Adres</span>
					<input
						onChange={e => setPointOfSale({ ...pointOfSale, address: e.target.value })}
						type='text'
						placeholder='Wpisz adres'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Typ</span>
					<select
						onChange={e => setPointOfSale({ ...pointOfSale, type: e.target.value })}
						className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
						<option value='Skup' className='text-sm'>
							Skup
						</option>
						<option value='Rynek hurtowy' className='text-sm'>
							Rynek hurtowy
						</option>
						<option value='Klient prywatny' className='text-sm'>
							Klient prywatny
						</option>
						<option value='Inne' className='text-sm'>
							Inne
						</option>
					</select>
				</label>

				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Szerokość geograficzna</span>
					<input
						onChange={e => setPointOfSale({ ...pointOfSale, latitude: e.target.value })}
						type='text'
						placeholder='Wpisz szerokość geograficzną'
						pattern='^-?\d+(\.\d+)?$' 
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					/>
				</label>

				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Długość geograficzna</span>
					<input
						onChange={e => setPointOfSale({ ...pointOfSale, longitude: e.target.value })}
						type='text'
						placeholder='Wpisz długość geograficzną'
						pattern='^-?\d+(\.\d+)?$' // Regex dla liczby dziesiętnej
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					/>
				</label>
				<p className='mt-1 text-center font-semibold text-red-500'>{props.error}</p>
				<div className='flex flex-row justify-center text-white'>
					<Link href='/'>
						<Button>Anuluj</Button>
					</Link>
					<Button disabled={submitting}>{submitting ? 'Dodawanie...' : 'Dodaj'}</Button>
				</div>
			</form>
		</section>
	)
}

export default AddPointOfSaleForm
