import React, { useState } from 'react'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import ChartArea from '@components/UI/ChartArea'

type ChartData = {
	name: string
	type: string
	data: number[]
}

interface Outgoing {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	name: string
	category: number
	date: string
	price: number
	amount: number
	totalSum: number
	describe: string
}

interface Props {
	allOutgoings: Outgoing[]
}

const categoryOptions = [
	'Nasiona',
	'Pestycydy',
	'Nawozy',
	'Narzędzia',
	'Maszyny',
	'Eksploatacja produkcji papryki',
	'Inne',
]

function OutgoingsByCategory({ allOutgoings }: Props) {
	const calculateCategoryOutgoings = (outgoings: Outgoing[]): number[] => {
		const categoryOutgoings: number[] = Array(categoryOptions.length).fill(0)

		outgoings.forEach(outgoing => {
			const category = outgoing.category
			categoryOutgoings[category] += outgoing.totalSum || 0
		})

		return categoryOutgoings
	}

	const categoryOutgoings = calculateCategoryOutgoings(allOutgoings)

	const [series] = useState<ChartData[]>([
		{
			name: 'Wydatki (zł)',
			type: 'bar',
			data: categoryOutgoings,
		},
	])

	const [options] = useState<any>({
		chart: {
			type: 'bar',
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				horizontal: true,
			},
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			categories: categoryOptions,
		},
        colors: ['#262626'],
	})

	return (
		<ChartArea className='w-full md:w-[950px] h-[420px]'>
            <p className='font-semibold text-center'>Wydatki na tle poszczególnych kategorii</p>
			<div id='chart' className='flex md:justify-center md:items-center overflow-x-auto'>
				<ReactApexChart options={options} series={series} type='bar' width={900} height={320} />
			</div>
		</ChartArea>
	)
}

export default OutgoingsByCategory
