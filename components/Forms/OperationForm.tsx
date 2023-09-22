import { FormEvent } from 'react'
import Link from 'next/link'
import Button from '@components/UI/Button'
import SectionTitle from '@components/UI/SectionTitle'

interface OperationFormProps {
	operation: {
		date: string
		time: string
		pesticideType: number
		pesticideName: string
		pesticideDose: number
		liquidAmount: number
		waitingTime: number
	}
	type: string
	setOperation: (operation: any) => void
	submitting: boolean
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
	error: string
}

const OperationForm: React.FC<OperationFormProps> = props => {
	const { type, operation, setOperation, submitting, handleSubmit } = props

	return (
		<section className='w-full mt-3 flex flex-col items-center text-black'>
			<SectionTitle title={type === 'ADD' ? 'Nowy zabieg chemizacyjny' : 'Edycja zabiegu chemizacyjnego'} />
			<p className='mt-3 lg:text-lg text-center'>
				{type === 'ADD' ? 'Dodaj nowy' : 'Edytuj'} zabieg chemizacyjny i podaj niezbędne informacje.
			</p>
			<form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4'>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Data</span>
					<input
						type='date'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={operation?.date || ''}
						onChange={e => setOperation({ ...operation, date: e.target.value })}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Godzina</span>
					<input
						type='time'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={operation?.time || ''}
						onChange={e => setOperation({ ...operation, time: e.target.value })}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>
						{operation.pesticideType === 4 ? 'Rodzaj odżywki' : 'Rodzaj pestycydu'}
					</span>
					<select
						value={operation?.pesticideType || 0}
						onChange={e => setOperation({ ...operation, pesticideType: Number(e.target.value) })}
						className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
						<option disabled value={0} className='text-sm'>
							--Wybierz rodzaj pestycydu--
						</option>
						<option value={1} className='text-sm'>
							Insektycydy
						</option>
						<option value={2} className='text-sm'>
							Fungicydy
						</option>
						<option value={3} className='text-sm'>
							Herbicydy
						</option>
						<option value={4} className='text-sm'>
							Odżywka
						</option>
						<option value={5} className='text-sm'>
							Stymulator wzrostu
						</option>
					</select>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>{operation.pesticideType === 4 ? 'Nazwa odżywki' : 'Nazwa pestycydu'}</span>
					<input
						onChange={e => setOperation({ ...operation, pesticideName: e.target.value })}
						type='text'
						placeholder='Wpisz nazwę pestycydu'
						className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={operation?.pesticideName || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>{operation.pesticideType === 4 ? 'Dawka odżywki' : 'Dawka pestycydu'}</span>
					<input
						onChange={e => setOperation({ ...operation, pesticideDose: parseFloat(e.target.value) })}
						type='number'
						step='any'
						placeholder='Wpisz dawkę pestycydu [ml/100l wody]'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={operation?.pesticideDose || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Ilość cieczy roboczej</span>
					<input
						onChange={e => setOperation({ ...operation, liquidAmount: parseFloat(e.target.value) })}
						type='number'
						placeholder='Wpisz ilość cieczy roboczej [l]'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={operation?.liquidAmount || ''}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Czas karencji</span>
					<input
						onChange={e => setOperation({ ...operation, waitingTime: e.target.value })}
						type='number'
						placeholder='Wpisz czas karencji [dni]'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={operation?.waitingTime || ''}
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

export default OperationForm
