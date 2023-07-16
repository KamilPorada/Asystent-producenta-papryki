import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import ChartArea from '@components/UI/ChartArea'

type ChartData = {
	name: string
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

function NumberOfTradesPepper({ allTrades }: Props) {

	const calculateMonthlyTransactionCount = (trades: TradeOfPepper[]): number[] => {
		const currentYear = new Date().getFullYear()
		const monthlyTransactionCounts: number[] = [0, 0, 0, 0, 0, 0]

		trades.forEach(trade => {
			const year = new Date(trade.date).getFullYear()
			const month = new Date(trade.date).getMonth()

			if (year === currentYear && month >= 5 && month <= 10) {
				monthlyTransactionCounts[month - 5] += 1
			}
		})

		return monthlyTransactionCounts
	}

	const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades)

	const [series] = useState<ChartData[]>([
		{
			name: 'Liczba transakcji w poszczególnych miesiącach sezonu',
			data: monthlyTransactionCounts,
		},
	])

	const [options] = useState<any>({
		chart: {
			type: 'radar',
		},
		title: {
			text: '',
		},
		xaxis: {
			categories: ['Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad'],
		},
		colors: ['#00b000'],
	})

	return (
		<ChartArea className='w-full md:w-[340px] h-[420px]'>
			<div className='flex flex-col justify-center items-center'>
				<p className='mb-3 text-center font-semibold'>
					Liczba transakcji sprzedaży papryki na przestrzeni kolejnych miesięcy sezonu
				</p>
				<div id='chart'>
					<ReactApexChart options={options} series={series} type='radar' height={350} width={300} />
				</div>
			</div>
		</ChartArea>
	)
}

export default NumberOfTradesPepper
