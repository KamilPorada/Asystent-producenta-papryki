import { FormEvent } from 'react'
import Link from 'next/link'
import Button from '@components/UI/Button'

interface AddFarmFormProps {
	farmData: {
		area: number
		numberOfTunnels: number
		cityName: string
	}
	setFarmData: (data: any) => void
	submitting: boolean
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
	error: string
	onCancel: () => void
}

const AddFarmForm: React.FC<AddFarmFormProps> = props => {
	const { farmData, setFarmData, submitting, handleSubmit, onCancel } = props

	return (
		<form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4'>
			<label className='flex flex-col'>
				<span className='font-semibold text-secondaryColor'>Powierzchnia gospodarstwa (ha)</span>
				<input
					type='number'
					step='any'
					className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					value={farmData?.area || ''}
					onChange={e => setFarmData({ ...farmData, area: parseFloat(e.target.value) })}
				/>
			</label>
			<label className='flex flex-col'>
				<span className='font-semibold text-secondaryColor'>Liczba tuneli</span>
				<input
					type='number'
					className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					value={farmData?.numberOfTunnels || ''}
					onChange={e => setFarmData({ ...farmData, numberOfTunnels: parseInt(e.target.value) })}
				/>
			</label>
			<label className='flex flex-col'>
				<span className='font-semibold text-secondaryColor'>Lokalizacja gospodarstwa</span>
				<input
					type='text'
					className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
					value={farmData?.cityName || ''}
					onChange={e => setFarmData({ ...farmData, cityName: e.target.value})}
				/>
			</label>
			<p className='mt-1 text-center font-semibold text-red-500'>{props.error}</p>
			<div className='flex flex-row justify-center text-white'>
				<Button onClick={onCancel}>Anuluj</Button>
				<Button disabled={submitting}>{submitting ? 'Edycja...' : 'Edytuj'}</Button>
			</div>
		</form>
	)
}

export default AddFarmForm
