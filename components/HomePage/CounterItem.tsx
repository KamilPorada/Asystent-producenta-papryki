import React from 'react'
import ChartArea from '@components/UI/ChartArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

const CounterItem: React.FC<{ title: string; length: number; icon: IconDefinition }> = props => {
	return (
		<ChartArea className='flex flex-row justify-center items-center w-full md:w-auto'>
			<div className='flex flex-row p-1'>
				<FontAwesomeIcon icon={props.icon} className='text-4xl' />
				<div className='flex flex-col items-center mx-5'>
					<p>{props.title}</p>
					<p className='font-bold text-2xl'>{props.length}</p>
				</div>
			</div>
		</ChartArea>
	)
}

export default CounterItem
