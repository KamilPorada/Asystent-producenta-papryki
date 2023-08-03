import React from 'react'
import ChartArea from '@components/UI/ChartArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Button from '@components/UI/Button'

interface Fertigation {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	date: string
	fertilizerName: string
	numberOfTunnels: number
	fertilizerDosePerTunnel: number
	waterAmountPerTunnel: number
}

const Fertigations: React.FC<{ allFertigations: Fertigation[] }> = props => {
	const getFormattedDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}

	return (
		<ChartArea className='flex flex-col justify-around w-full md:w-5/12 h-[320px] text-black '>
			<p className='font-bold text-center'>Moje ostatnie dozowania nawozów</p>
			<div className='flex flex-col overflow-x-auto'>
				{props.allFertigations.map(fertigation => (
					<div
						key={fertigation._id}
						className='flex flex-row justify-between items-center mt-1 p-1 border-b-[1px] border-zinc-300'>
						<div className='flex flex-row'>
							<FontAwesomeIcon icon={faDroplet} className='h-6 text-blue-500' />
							<p className='ml-2'>{getFormattedDate(fertigation.date)}</p>
						</div>
						<p className='w-1/2 text-right'>{fertigation.fertilizerName}</p>
					</div>
				))}
			</div>
			<Link href='/fertigations' className='flex justify-center items-center mt-4 text-white'>
				<Button>Zobacz więcej</Button>
			</Link>
		</ChartArea>
	)
}

export default Fertigations
