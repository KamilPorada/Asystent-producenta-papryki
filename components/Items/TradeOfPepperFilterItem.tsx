import { useState, useEffect, FormEvent } from 'react'
import { useSession } from 'next-auth/react'

interface TradeOfPepperFilterItemProps {
	handleFilter: (filters: TradeOfPepperFilters) => void
	handleCancel: () => void
}

interface TradeOfPepperFilters {
	dateFrom: string
	dateTo: string
	clas: number
	color: number
	pointOfSale: string
	vatRate: number
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

const TradeOfPepperFilterItem: React.FC<TradeOfPepperFilterItemProps> = props => {
	const [filters, setFilters] = useState<TradeOfPepperFilters>({
		dateFrom: '', // Dodaj pole dateFrom (data początkowa)
		dateTo: '', // Dodaj pole dateTo (data końcowa)
		clas: 0,
		color: 0,
		pointOfSale: '',
		vatRate: -1,
	})
	const [pointOfSales, setPointOfSales] = useState<PointOfSale[]>([])
	const [loading, setLoading] = useState(true)
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		props.handleFilter(filters)
	}

	const handleClearFilters = () => {
		setFilters({
			...filters,
			dateFrom: '',
			dateTo: '',
			clas: Number(0),
			color: Number(0),
			pointOfSale: '',
			vatRate: Number(-1),
		})
	}

	const fetchPointOfSales = async () => {
		try {
			const response = await fetch('/api/point-of-sale')
			const data = await response.json()

			const filteredPoints = data.filter((point: PointOfSale) => point.creator._id.toString() === userId.toString())

			setPointOfSales(filteredPoints)
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchPointOfSales()
	}, [loading])

	return (
		<section className='w-full mt-3 p-3 rounded flex flex-col items-center ring-1 ring-zinc-300 text-black bg-white'>
			<p className='text-black self-start font-semibold text-lg'>Filtruj transakcje sprzedaży papryki</p>
			<form onSubmit={handleSubmit} className='mt-3 w-full flex flex-col gap-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
					<div>
						<label className='flex flex-col'>
							<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Data od</span>
							<input
								type='date'
								value={filters.dateFrom}
								onChange={e => setFilters({ ...filters, dateFrom: e.target.value })}
								className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
							/>
						</label>
					</div>
					<div>
						<label className='flex flex-col'>
							<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Data do</span>
							<input
								type='date'
								value={filters.dateTo}
								onChange={e => setFilters({ ...filters, dateTo: e.target.value })}
								className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
							/>
						</label>
					</div>
					<div>
						<label className='flex flex-col'>
							<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Klasa</span>
							<select
								value={filters.clas}
								onChange={e => setFilters({ ...filters, clas: Number(e.target.value) })}
								className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
								<option value={0} disabled className='text-sm'>
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
					</div>
					<div>
						<label className='flex flex-col'>
							<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Kolor</span>
							<select
								value={filters.color}
								onChange={e => setFilters({ ...filters, color: Number(e.target.value) })}
								className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
								<option value={0} disabled className='text-sm'>
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
					</div>
					<div>
						<label className='flex flex-col'>
							<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Punkt sprzedaży</span>
							<select
								value={filters.pointOfSale}
								onChange={e => setFilters({ ...filters, pointOfSale: e.target.value })}
								className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
								<option value='' disabled className='text-sm'>
									--Wybierz punkt sprzedaży--
								</option>
								{pointOfSales.map((point, index) => (
									<option key={index} value={point.name} className='text-sm'>
										{point.name}
									</option>
								))}
							</select>
						</label>
					</div>
					<div>
						<label className='flex flex-col'>
							<span className='font-semibold text-base lg:text-lg text-secondaryColor'>Stawka VAT</span>
							<select
								value={filters.vatRate}
								onChange={e => setFilters({ ...filters, vatRate: Number(e.target.value) })}
								className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'>
								<option value={-1} className='text-sm'>
									--Wybierz stawkę VAT--
								</option>
								<option value={0} className='text-sm'>
									0%
								</option>
								<option value={7} className='text-sm'>
									7%
								</option>
							</select>
						</label>
					</div>
				</div>
				<div className='flex justify-end mt-4 text-white'>
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
					<button
						type='submit'
						className='px-2 py-1 ml-5 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors'>
						Zastosuj filtry
					</button>
				</div>
			</form>
		</section>
	)
}

export default TradeOfPepperFilterItem
