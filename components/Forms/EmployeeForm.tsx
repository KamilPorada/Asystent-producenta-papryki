import { FormEvent } from 'react'
import Link from 'next/link'
import Button from '@components/UI/Button'
import SectionTitle from '@components/UI/SectionTitle'

interface AddEmployeeFormProps {
	type: 'ADD' | 'EDIT'
	employee: {
		name: string
		surname: string
		gender: string
		age: number
		nationality: string
		year: number
		salaryPerHour: number
	}
	setEmployee: (employee: any) => void
	submitting: boolean
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
	error: string
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({
	type,
	employee,
	setEmployee,
	submitting,
	handleSubmit,
	error,
}) => {
	return (
		<section className='w-full mt-3 flex flex-col items-center text-black'>
			<SectionTitle title={`${type === 'ADD' ? 'Nowy pracownik' : 'Edycja danych pracownika'}`} />
			<p className='mt-3 lg:text-lg text-center'>{`${
				type === 'ADD'
					? 'Dodaj nowego pracownika i wprowadź niezbędne informacje.'
					: 'Edytuj dane pracownika i wprowadź niezbędne informacje.'
			}`}</p>
			<form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4'>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Imię</span>
					<input
						type='text'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={employee?.name || ''}
						onChange={e => setEmployee({ ...employee, name: e.target.value })}
						placeholder='Wpisz imię'
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Nazwisko</span>
					<input
						type='text'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={employee?.surname || ''}
						onChange={e => setEmployee({ ...employee, surname: e.target.value })}
						placeholder='Wpisz nazwisko'
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Płeć</span>
					<div className='flex gap-4 mt-1'>
						<label className='flex items-center'>
							<input
								type='radio'
								className='form-radio'
								name='gender'
								value='Mężczyzna'
								checked={employee?.gender === 'Mężczyzna'}
								onChange={e => setEmployee({ ...employee, gender: e.target.value })}
							/>
							<span className='ml-2'>Mężczyzna</span>
						</label>
						<label className='flex items-center'>
							<input
								type='radio'
								className='form-radio'
								name='gender'
								value='Kobieta'
								checked={employee?.gender === 'Kobieta'}
								onChange={e => setEmployee({ ...employee, gender: e.target.value })}
							/>
							<span className='ml-2'>Kobieta</span>
						</label>
						<label className='flex items-center'>
							<input
								type='radio'
								className='form-radio'
								name='gender'
								value='Inna'
								checked={employee?.gender === 'Inna'}
								onChange={e => setEmployee({ ...employee, gender: e.target.value })}
							/>
							<span className='ml-2'>Inna</span>
						</label>
					</div>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Wiek</span>
					<input
						type='number'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={employee?.age || ''}
						onChange={e => setEmployee({ ...employee, age: e.target.value })}
						placeholder='Wpisz wiek'
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Narodowość</span>
					<input
						type='text'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={employee?.nationality || ''}
						onChange={e => setEmployee({ ...employee, nationality: e.target.value })}
						placeholder='Wpisz narodowość'
					/>
				</label>
				<label className='flex flex-col'>
					<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Wysokość wynagrodzenia [zł/h]</span>
					<input
						type='number'
						className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						value={employee?.salaryPerHour || ''}
						onChange={e => setEmployee({ ...employee, salaryPerHour: e.target.value })}
						placeholder='Wpisz wiek'
					/>
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

export default AddEmployeeForm
