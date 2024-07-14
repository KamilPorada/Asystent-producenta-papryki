import React, { FormEvent } from 'react'
import Button from '@components/UI/Button'

interface FarmData {
	area: number
	numberOfTunnels: Record<number, number>
	cityName: string
	salaryPerHour: number
}

interface AddFarmFormProps {
	farmData: FarmData
	setFarmData: React.Dispatch<React.SetStateAction<FarmData>>
	submitting: boolean
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
	error: string
	onCancel: () => void
}

const AddFarmForm: React.FC<AddFarmFormProps> = ({
	farmData,
	setFarmData,
	submitting,
	handleSubmit,
	error,
	onCancel,
}) => {
	const currentYear = new Date().getFullYear()
	const currentYearTunnels = farmData.numberOfTunnels[currentYear] || 0

	return (
		<form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4'>
			<label className='flex flex-col'>
				<span className='font-semibold text-secondaryColor'>Powierzchnia gospodarstwa (ha)</span>
				<input
					type='number'
					step='any'
					className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					value={farmData.area || ''}
					onChange={e =>
						setFarmData(prevData => ({
							...prevData,
							area: parseFloat(e.target.value),
						}))
					}
				/>
			</label>
			<label className='flex flex-col'>
				<span className='font-semibold text-secondaryColor'>Liczba tuneli (bieżący rok)</span>
				<input
					type='number'
					className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					value={currentYearTunnels || ''}
					onChange={e =>
						setFarmData(prevData => ({
							...prevData,
							numberOfTunnels: {
								...prevData.numberOfTunnels,
								[currentYear]: parseInt(e.target.value, 10),
							},
						}))
					}
					disabled={farmData.numberOfTunnels[currentYear] !== currentYearTunnels} // Disable input if not editing current year
				/>
			</label>
			<label className='flex flex-col'>
				<span className='font-semibold text-secondaryColor'>Lokalizacja gospodarstwa</span>
				<input
					type='text'
					className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					value={farmData.cityName || ''}
					onChange={e =>
						setFarmData(prevData => ({
							...prevData,
							cityName: e.target.value,
						}))
					}
				/>
			</label>
			<label className='flex flex-col'>
				<span className='font-semibold text-secondaryColor'>Wynagrodzenie pracownika</span>
				<input
					type='number'
					className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					value={farmData.salaryPerHour || ''}
					onChange={e =>
						setFarmData(prevData => ({
							...prevData,
							salaryPerHour: parseFloat(e.target.value),
						}))
					}
				/>
			</label>
			<p className='mt-1 text-center font-semibold text-red-500'>{error}</p>
			<div className='flex flex-row justify-center text-white'>
				<Button onClick={onCancel}>Anuluj</Button>
				<Button disabled={submitting}>{submitting ? 'Edycja...' : 'Edytuj'}</Button>
			</div>
		</form>
	)
}

export default AddFarmForm
