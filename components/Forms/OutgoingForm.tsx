import { FormEvent, useState } from 'react'
import Link from 'next/link'
import Button from '@components/UI/Button'
import SectionTitle from '@components/UI/SectionTitle'

interface AddOutgoingFormProps {
	outgoing: {
		date: string
		name: string
		category: number
		price: number
		amount: number
		describe: string
	}
	type: string
	setOutgoing: (outgoing: any) => void
	submitting: boolean
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
	error: string
}

const AddOutgoingForm: React.FC<AddOutgoingFormProps> = props => {
	const { type, outgoing, setOutgoing, submitting, handleSubmit } = props
	const [categoryOptions] = useState([
		'Nasiona',
		'Pestycydy',
		'Nawozy',
		'Narzędzia',
		'Maszyny',
		'Eksploatacja produkcji papryki',
		'Inne',
	])

	const setOutgoingCategory = (category: number) => {
		setOutgoing({ ...outgoing, category })
	}

	return (
		<section className='w-full mt-3 flex flex-col items-center text-black'>
			<SectionTitle title={type === 'ADD' ? 'Nowy wydatek' : 'Edycja wydatku'} />
			<p className='mt-3 lg:text-lg text-center'>
				{type === 'ADD' ? 'Dodaj nowy' : 'Edytuj'} wydatek i podaj niezbędne informacje.
			</p>
			<form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4'>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Data</span>
					<input
						type='date'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={outgoing?.date || ''}
						onChange={e => setOutgoing({ ...outgoing, date: e.target.value })}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Nazwa</span>
					<input
						onChange={e => setOutgoing({ ...outgoing, name: e.target.value })}
						type='text'
						placeholder='Wpisz nazwę'
						className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={outgoing?.name || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Kategoria</span>
					<select
						value={outgoing?.category !== undefined ? outgoing.category.toString() : ''}
						onChange={e => setOutgoingCategory(parseInt(e.target.value))}
						className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
						<option disabled value=''>
							-- Wybierz kategorię --
						</option>
						{categoryOptions.map((category, index) => (
							<option key={index} value={index.toString()} className='text-sm'>
								{category}
							</option>
						))}
					</select>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Cena</span>
					<input
						onChange={e => setOutgoing({ ...outgoing, price: parseFloat(e.target.value) })}
						type='number'
						step='any'
						placeholder='Wpisz cenę'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={outgoing?.price || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Liczba sztuk</span>
					<input
						onChange={e => setOutgoing({ ...outgoing, amount: parseFloat(e.target.value) })}
						type='number'
						placeholder='Wpisz liczbę sztuk'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={outgoing?.amount || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Opis</span>
					<textarea
						onChange={e => setOutgoing({ ...outgoing, describe: e.target.value })}
						placeholder='Wpisz opis'
						className='max-h-28 px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={outgoing?.describe || ''}></textarea>
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

export default AddOutgoingForm
