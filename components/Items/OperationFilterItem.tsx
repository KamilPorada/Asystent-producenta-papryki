import { useState } from 'react'

interface OperationFilterItemProps {
	handleFilter: (filters: OperationFilters) => void
	handleCancel: () => void
}

interface OperationFilters {
	date: string
	time: string
	pesticideType: number
	status: number
}

const OperationFilterItem: React.FC<OperationFilterItemProps> = props => {
	const [filters, setFilters] = useState<OperationFilters>({
		date: '',
		time: '',
		pesticideType: 0,
		status: 0,
	})
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		props.handleFilter(filters)
	}

	const handleClearFilters = () => {
		setFilters({ ...filters, date: '', time: '', pesticideType: Number(0), status: 0 })
	}

	return (
		<section className='w-full mt-3 p-3 rounded flex flex-col items-center ring-1 ring-zinc-300 text-black bg-white'>
			<p className='text-black self-start font-semibold text-lg'>Filtruj zabiegi cheminizacyjne</p>
			<form onSubmit={handleSubmit} className='mt-3 w-full flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-4'>
				<div className='sm:col-span-1 lg:col-span-1'>
					<label className='flex flex-col'>
						<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Data</span>
						<input
							type='date'
							value={filters.date}
							onChange={e => setFilters({ ...filters, date: e.target.value })}
							className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						/>
					</label>
				</div>
				<div className='sm:col-span-1 lg:col-span-1'>
					<label className='flex flex-col'>
						<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Godzina</span>
						<input
							type='time'
							value={filters.time}
							onChange={e => setFilters({ ...filters, time: e.target.value })}
							className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
						/>
					</label>
				</div>
				<div className='sm:col-span-1 lg:col-span-1'>
					<label className='flex flex-col'>
						<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Rodzaj pestycydu</span>
						<select
							value={filters.pesticideType}
							onChange={e => setFilters({ ...filters, pesticideType: Number(e.target.value) })}
							className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
							<option value={0} disabled className='text-sm'>
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
						</select>
					</label>
				</div>
				<div className='sm:col-span-1 lg:col-span-1'>
					<label className='flex flex-col'>
						<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Status zabiegu</span>
						<div className='flex flex-row gap-x-2 items-center'>
							<label>
								<input
									type='radio'
									value='planned'
									checked={filters.status === 1}
									onChange={() => setFilters({ ...filters, status: 1 })}
									className='mr-1'
								/>
								zaplanowany
							</label>
							<label>
								<input
									type='radio'
									value='executed'
									checked={filters.status === 2}
									onChange={() => setFilters({ ...filters, status: 2 })}
									className='mr-1'
								/>
								wykonany
							</label>
						</div>
					</label>
				</div>
				<div className='sm:col-span-4 flex flex-row justify-end text-white'>
					<button
						onClick={props.handleCancel}
						className='px-2 py-1 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors'>
						Anuluj
					</button>
					<button
						onClick={handleClearFilters}
						className='px-2 py-1 ml-5 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors'>
						Wyczyść filtry
					</button>
					<button className='px-2 py-1 ml-5 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors'>
						Zastosuj filtry
					</button>
				</div>
			</form>
		</section>
	)
}

export default OperationFilterItem
