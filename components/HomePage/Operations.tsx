import React from 'react'
import ChartArea from '@components/UI/ChartArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBugs, faViruses, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Button from '@components/UI/Button'

interface Operation {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	date: string
	time: string
	pesticideType: number
	pesticideName: string
	pesticideDose: number
	liquidAmount: number
	waitingTime: number
	waitingTimeDate: string
	status: boolean
}

const Operations: React.FC<{ allOperations: Operation[] }> = props => {
	const getFormattedDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}
	const getOperationIcon = (pesticideIndex: number) => {
		switch (pesticideIndex) {
			case 1:
				return faBugs
			case 2:
				return faViruses
			case 3:
				return faPagelines
			default:
				return faSkullCrossbones
		}
	}

	return (
		<ChartArea className='flex flex-col justify-between w-full md:w-5/12 h-[320px] text-black'>
			<p className='font-bold text-center'>Moje ostatnie zabiegi cheminizacyjne</p>
			<div className='flex flex-col'>
				{props.allOperations.map(operation => (
					<div
						key={operation._id}
						className='flex flex-row justify-between items-center mt-1 p-1 border-b-[1px] border-zinc-300'>
						<div className='flex flex-row'>
							<FontAwesomeIcon icon={getOperationIcon(operation.pesticideType)} className='w-[50px] h-6 text-secondaryColor' />
							<p className='w-3/4 ml-2'>{getFormattedDate(operation.date)}</p>
						</div>
						<p className='w-1/2 text-right'>
							{operation.pesticideName}
						</p>
					</div>
				))}
			</div>
			<Link href='/operations' className='flex justify-center items-center text-white'>
				<Button>Zobacz więcej</Button>
			</Link>
		</ChartArea>
	)
}

export default Operations
