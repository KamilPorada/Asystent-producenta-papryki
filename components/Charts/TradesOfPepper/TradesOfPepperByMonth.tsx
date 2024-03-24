import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import ChartArea from '@components/UI/ChartArea'
import { useTopBar } from '../../contexts/TopBarContext'

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
	const { selectedYear } = useTopBar()
	const [series, setSeries] = useState<ChartData[]>([])
	const [formattedAnnualProfit, setFormattedAnnualProfit] = useState<string>('')
	const [formattedAnnualHarvest, setFormattedAnnualHarvest] = useState<string>('')
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
			categories: ['Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad'],
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

	useEffect(() => {
		const calculateMonthlySums = (trades: TradeOfPepper[]): number[] => {
			const monthlySums: number[] = [0, 0, 0, 0, 0]
			trades.forEach(trade => {
				const month = new Date(trade.date).getMonth()
				if (month >= 6 && month <= 10) {
					monthlySums[month - 6] += trade.totalSum
				}
			})
			return monthlySums.map(sum => parseFloat(sum.toFixed(2)))
		}

		const calculateMonthlyWeights = (trades: TradeOfPepper[]): number[] => {
			const monthlyWeights: number[] = [0, 0, 0, 0, 0]
			trades.forEach(trade => {
				const month = new Date(trade.date).getMonth()
				if (month >= 6 && month <= 10) {
					monthlyWeights[month - 6] += trade.weight
				}
			})
			return monthlyWeights.map(weight => parseFloat(weight.toFixed(2)))
		}

		const monthlySums = calculateMonthlySums(allTrades)
		const monthlyWeights = calculateMonthlyWeights(allTrades)
		const annualProfit = monthlySums.reduce((total, sum) => total + sum, 0)
		const annualHarvest = monthlyWeights.reduce((total, weight) => total + weight, 0)
		setFormattedAnnualProfit(annualProfit.toLocaleString('pl-PL'))
		setFormattedAnnualHarvest(annualHarvest.toLocaleString('pl-PL'))

		setSeries([
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
	}, [allTrades, selectedYear])

	return (
		<ChartArea className='w-full md:w-[760px] h-[420px]'>
			{' '}
			<div className='flex flex-row justify-between mx-10'>
				{' '}
				<div>
					{' '}
					<p className='font-semibold'>Roczne zyski:</p>{' '}
					<p className='text-lg font-semibold text-mainColor'>{formattedAnnualProfit} zł</p>{' '}
				</div>{' '}
				<div className='text-right'>
					{' '}
					<p className='font-semibold'>Roczne zbiory:</p>{' '}
					<p className='text-lg font-semibold text-mainColor'>{formattedAnnualHarvest} kg</p>{' '}
				</div>{' '}
			</div>{' '}
			<div id='chart' className='flex md:justify-center md:items-center overflow-x-auto'>
				{' '}
				<ReactApexChart options={options} series={series} type='line' height={320} width={700} />{' '}
			</div>{' '}
		</ChartArea>
	)
}

export default TradesOfPepperByMonth
