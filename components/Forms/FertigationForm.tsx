import { FormEvent } from 'react'
import Link from 'next/link'
import Button from '@components/UI/Button'
import SectionTitle from '@components/UI/SectionTitle'
import Slider from 'react-slider'

interface FertigationFormProps {
	fertigation: {
		date: string
		fertilizerName: string
		numberOfTunnels: number
		fertilizerDosePerTunnel: number
		waterAmountPerTunnel: number
	}
	type: string
	setFertigation: (fertigation: any) => void
	submitting: boolean
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
	error: string
}

const FertigationForm: React.FC<FertigationFormProps> = props => {
	const { type, fertigation, setFertigation, submitting, handleSubmit } = props

	return (
		<section className='w-full mt-3 flex flex-col items-center text-black'>
			<SectionTitle title={type === 'ADD' ? 'Nowa fertygacja' : 'Edycja fertygacji'} />
			<p className='mt-3 lg:text-lg text-center'>
				{type === 'ADD'
					? 'Dodaj nową fertygację i podaj niezbędne informacje.'
					: 'Edytuj fertygację i podaj niezbędne informacje.'}
			</p>
			<form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4'>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Data</span>
					<input
						type='date'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={fertigation?.date || ''}
						onChange={e => setFertigation({ ...fertigation, date: e.target.value })}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Nazwa nawozu</span>
					<input
						onChange={e => setFertigation({ ...fertigation, fertilizerName: e.target.value })}
						type='text'
						placeholder='Wpisz nazwę nawozu'
						className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={fertigation?.fertilizerName || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>
						Liczba tuneli: {fertigation?.numberOfTunnels || 0}
					</span>
					<Slider
						value={fertigation?.numberOfTunnels || 0}
						min={1}
						max={57}
						className='w-ful mt-2'
						thumbClassName='absolute h-4 w-4 bg-mainColor rounded-full -translate-y-1/2'
						trackClassName='h-[2px] bg-secondaryColor'
						onChange={value =>
							setFertigation({
								...fertigation,
								numberOfTunnels: value,
							})
						}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Dawka nawozu na 1 tunel</span>
					<input
						onChange={e =>
							setFertigation({
								...fertigation,
								fertilizerDosePerTunnel: parseFloat(e.target.value),
							})
						}
						type='number'
						step='any'
						placeholder='Wpisz dawkę nawozu [kg/tunel]'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={fertigation?.fertilizerDosePerTunnel || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Ilość wody na 1 tunel</span>
					<input
						onChange={e =>
							setFertigation({
								...fertigation,
								waterAmountPerTunnel: parseFloat(e.target.value),
							})
						}
						type='number'
						step='any'
						placeholder='Wpisz ilość wody [l/tunel]'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={fertigation?.waterAmountPerTunnel || ''}
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

export default FertigationForm
