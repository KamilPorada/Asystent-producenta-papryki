import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import ChartArea from '@components/UI/ChartArea'

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

interface ChartData {
	name: string
	type: string
	data: number[]
}

interface Props {
	allTrades: TradeOfPepper[]
	allOutgoings: Outgoing[]
}

const TradesOfPepperByMonth: React.FC<Props> = ({ allTrades, allOutgoings }) => {
	const calculateMonthlySumsFromTrades = (trades: TradeOfPepper[]): number[] => {
		const monthlySums: number[] = Array(12).fill(0)

		trades.forEach(trade => {
			const year = new Date(trade.date).getFullYear()
			const month = new Date(trade.date).getMonth()

			if (year === new Date().getFullYear()) {
				monthlySums[month] += trade.totalSum
			}
		})

		return monthlySums.map(sum => parseFloat(sum.toFixed(2)))
	}

	const calculateMonthlySumsFromOutgoing = (outgoings: Outgoing[]): number[] => {
		const monthlySums: number[] = Array(12).fill(0)

		outgoings.forEach(outgoing => {
			const year = new Date(outgoing.date).getFullYear()
			const month = new Date(outgoing.date).getMonth()

			if (year === new Date().getFullYear()) {
				monthlySums[month] += outgoing.totalSum
			}
		})

		return monthlySums.map(sum => parseFloat(sum.toFixed(2)))
	}

	const tradesTotalSums = calculateMonthlySumsFromTrades(allTrades)
	const outgoingsTotalSums = calculateMonthlySumsFromOutgoing(allOutgoings)

	const calculateTotalSum = (sums: number[]): number => {
		return sums.reduce((total, sum) => total + sum, 0)
	}

	const formatAmount = (amount: number): string => {
		return amount.toLocaleString('pl-PL')
	}

	const totalProfits = formatAmount(calculateTotalSum(tradesTotalSums))
	const totalExpenses = formatAmount(calculateTotalSum(outgoingsTotalSums))

	const [series] = useState<ChartData[]>([
		{
			name: 'Zyski (zł)',
			type: 'bar',
			data: tradesTotalSums,
		},
		{
			name: 'Wydatki (zł)',
			type: 'bar',
			data: outgoingsTotalSums,
		},
	])

	const [options] = useState<any>({
		chart: {
			type: 'bar',
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '40%',
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		xaxis: {
			categories: [
				'Styczeń',
				'Luty',
				'Marzec',
				'Kwiecień',
				'Maj',
				'Czerwiec',
				'Lipiec',
				'Sierpień',
				'Wrzesień',
				'Październik',
				'Listopdad',
				'Grudzień',
			],
		},
		yaxis: {
			labels: {
				formatter: function (val: number) {
					const formattedValue = (val / 1000).toFixed(2)
					return formattedValue + ' tyś. zł'
				},
			},
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			y: {
				formatter: function (val: number) {
					const formattedValue = (val / 1000).toFixed(2)
					return formattedValue + ' tyś. zł'
				},
			},
		},
		colors: ['#00b000', '#262626'],
	})

	return (
		<ChartArea className='w-full md:w-[1200px] h-[430px] text-black'>
			<p className='font-semibold text-center'>Zestawienie zysków oraz strat w bieżącym sezonie</p>
			<div className='flex flex-row justify-between items-center px-4'>
				<div className='flex flex-col justify-start text-mainColor font-semibold'>
					<p>Zyski:</p>
					<p>{totalProfits}zł</p>
				</div>
				<div className='flex flex-col justify-start text-secondaryColor font-semibold'>
					<p>Wydatki:</p>
					<p>{totalExpenses}zł</p>
				</div>
			</div>

			<div id='chart' className='flex md:justify-center md:items-center overflow-x-auto'>
				<ReactApexChart options={options} series={series} type='bar' height={320} width={1100} />
			</div>
		</ChartArea>
	)
}

export default TradesOfPepperByMonth
