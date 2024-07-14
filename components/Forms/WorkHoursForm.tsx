import { FormEvent } from 'react'
import Link from 'next/link'
import Button from '@components/UI/Button'
import SectionTitle from '@components/UI/SectionTitle'

interface AddWorkHoursFormProps {
	employeeName: string
	workHours: {
		date: string
		startTime: string
		endTime: string
	}
	setWorkHours: (workHours: any) => void
	submitting: boolean
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
	error: string
}

const AddWorkHoursForm: React.FC<AddWorkHoursFormProps> = props => {
	const { employeeName, workHours, setWorkHours, submitting, handleSubmit, error } = props

	return (
		<section className='w-full mt-3 flex flex-col items-center text-black'>
			<SectionTitle title='Dodaj godziny pracy' />
			<p className='mt-3 lg:text-lg text-center'>Dodaj godziny pracy dla pracownika.</p>
			<form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4'>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Pracownik</span>
					<input
						type='text'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={employeeName}
						disabled
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Data</span>
					<input
						type='date'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={workHours?.date || ''}
						onChange={e => setWorkHours({ ...workHours, date: e.target.value })}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Godzina rozpoczęcia</span>
					<input
						type='time'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={workHours?.startTime || ''}
						onChange={e => setWorkHours({ ...workHours, startTime: e.target.value })}
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Godzina zakończenia</span>
					<input
						type='time'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={workHours?.endTime || ''}
						onChange={e => setWorkHours({ ...workHours, endTime: e.target.value })}
					/>
				</label>
				<p className='mt-1 text-center font-semibold text-red-500'>{error}</p>
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

export default AddWorkHoursForm
