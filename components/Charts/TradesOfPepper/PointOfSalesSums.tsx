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

interface Props {
	allTrades: TradeOfPepper[]
}

const PointOfSalesSums: React.FC<Props> = ({ allTrades }) => {
	const calculateProfitsBySeller = (trades: TradeOfPepper[]) => {
		const profitsBySeller: { [sellerId: string]: number } = {}

		trades.forEach(trade => {
			const sellerId = trade.pointOfSaleId
			const profit = trade.totalSum

			if (profitsBySeller[sellerId]) {
				profitsBySeller[sellerId] += profit
			} else {
				profitsBySeller[sellerId] = profit
			}
		})

		return profitsBySeller
	}

	const formatCurrency = (value: number) => {
		return value.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })
	}

	const profitsBySeller = calculateProfitsBySeller(allTrades)

	const sellers = Object.keys(profitsBySeller)
	const seriesData = sellers.map(sellerId => profitsBySeller[sellerId])

	const sellersNames = sellers.map(sellerId => sellerId)

	const sortedSellers = sellersNames.sort((a, b) => profitsBySeller[b] - profitsBySeller[a])
	const sortedSeriesData = sortedSellers.map(sellerId => profitsBySeller[sellerId])

	const [chartData] = useState(() => {
		const options: ApexCharts.ApexOptions = {
			chart: {
				type: 'bar',
				height: 350,
			},
			plotOptions: {
				bar: {
					horizontal: true,
                    barHeight: '40%'
				},
			},
			xaxis: {
				categories: sortedSellers,
				title: {
					text: 'Zyski',
				},
			},
			yaxis: {
				labels: {
					formatter: (value: number) => formatCurrency(value),
                    
				},
				title: {
					text: 'Punkty sprzedaży',
				},
			},

			dataLabels: {
				enabled: false,
			},
			labels: sortedSellers,
			colors: ['#00b000'],
		}

		return {
			series: [{ name: 'Zyski', data: sortedSeriesData }],
			options: options,
		}
	})

	return (
		<ChartArea className='w-full h-[420px]'>
			<div id='chart' className='h-full flex flex-col justify-start items-center overflow-x-auto'>
				<p className='font-semibold text-center'>Dochody z poszczególnych punktów sprzedaży</p>
				<div className='mt-5'>
					<ReactApexChart options={chartData.options} series={chartData.series} type='bar' height={350} width={1100} />
				</div>
			</div>
		</ChartArea>
	)
}

export default PointOfSalesSums
