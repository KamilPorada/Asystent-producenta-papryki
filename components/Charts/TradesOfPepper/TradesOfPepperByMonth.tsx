import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import ChartArea from '@components/UI/ChartArea'

type ChartData = {
	name: string
	type: string
	data: number[]
}

interface TradeOfPepper {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	pointOfSaleId: string
	date: string
	clas: number
	color: number
	price: number
	weight: number
	vatRate: number
	totalSum: number
}

interface Props {
	allTrades: TradeOfPepper[]
}

function TradesOfPepperByMonth({ allTrades }: Props) {
	const calculateMonthlySums = (trades: TradeOfPepper[]): number[] => {
		const currentYear = new Date().getFullYear()
		const monthlySums: number[] = [0, 0, 0, 0, 0, 0]

		trades.forEach(trade => {
			const year = new Date(trade.date).getFullYear()
			const month = new Date(trade.date).getMonth()

			if (year === currentYear && month >= 5 && month <= 10) {
				monthlySums[month - 5] += trade.totalSum
			}
		})

		return monthlySums.map(sum => parseFloat(sum.toFixed(2)))
	}

	const calculateMonthlyWeights = (trades: TradeOfPepper[]): number[] => {
		const currentYear = new Date().getFullYear()
		const monthlyWeights: number[] = [0, 0, 0, 0, 0, 0]

		trades.forEach(trade => {
			const year = new Date(trade.date).getFullYear()
			const month = new Date(trade.date).getMonth()

			if (year === currentYear && month >= 5 && month <= 10) {
				monthlyWeights[month - 5] += trade.weight
			}
		})

		return monthlyWeights.map(weight => parseFloat(weight.toFixed(2)))
	}

	const monthlySums = calculateMonthlySums(allTrades)
	const monthlyWeights = calculateMonthlyWeights(allTrades)

	const annualProfit = monthlySums.reduce((total, sum) => total + sum, 0)
	const formattedAnnualProfit = annualProfit.toLocaleString('pl-PL')

	const annualHarvest = monthlyWeights.reduce((total, weight) => total + weight, 0)
	const formattedAnnualHarvest = annualHarvest.toLocaleString('pl-PL')

	const [series] = useState<ChartData[]>([
		{
			name: 'Zyski (zł)',
			type: 'bar',
			data: monthlySums,
		},
		{
			name: 'Zbiory (kg)',
			type: 'bar',
			data: monthlyWeights,
		},
	])

	const [options] = useState<any>({
		chart: {
			type: 'line',
			stacked: false,
		},
		stroke: {
			width: [0, 1],
		},
		plotOptions: {
			bar: {
				columnWidth: '50%',
			},
		},
		xaxis: {
			categories: ['Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad'],
		},
		yaxis: [
			{
				seriesName: 'Zyski (zł)',
				axisTicks: {
					show: true,
				},
				axisBorder: {
					show: true,
					color: '#262626',
				},
				labels: {
					style: {
						colors: '#262626',
					},
				},
				title: {
					text: 'Zyski (zł)',
					style: {
						color: '#262626',
					},
				},
			},
			{
				seriesName: 'Zbiory (kg)',
				opposite: true,
				axisTicks: {
					show: true,
				},
				axisBorder: {
					show: true,
					color: '#262626',
				},
				labels: {
					style: {
						colors: '#262626',
					},
				},
				title: {
					text: 'Zbiory (kg)',
					style: {
						color: '#262626',
					},
				},
			},
		],
		tooltip: {
			shared: false,
			intersect: true,
			y: {
				formatter: function (val: number, { seriesName }: { seriesName: string }) {
					if (seriesName === 'Zbiory (kg)') {
						return val + ' kg'
					} else if (seriesName === 'Zyski (zł)') {
						return val.toLocaleString('pl-PL') + ' zł'
					}
					return val
				},
			},
		},
		colors: ['#00b000', '#262626'],
	})

	return (
		<ChartArea className='w-full md:w-[760px] h-[420px]'>
			<div className='flex flex-row justify-between mx-10'>
				<div>
					<p className='font-semibold'>Roczne zyski:</p>
					<p className='text-lg font-semibold text-mainColor'>{formattedAnnualProfit} zł</p>
				</div>
				<div className='text-right'>
					<p className='font-semibold'>Roczne zbiory:</p>
					<p className='text-lg font-semibold text-mainColor'>{formattedAnnualHarvest} kg</p>
				</div>
			</div>
			<div id='chart' className='flex md:justify-center md:items-center overflow-x-auto'>
				<ReactApexChart options={options} series={series} type='line' height={320} width={700} />
			</div>
		</ChartArea>
	)
}

export default TradesOfPepperByMonth
