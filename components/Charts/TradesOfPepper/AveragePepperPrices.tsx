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

const PepperPrices: React.FC<Props> = ({ allTrades }) => {
	const calculateAveragePrices = (trades: TradeOfPepper[]) => {
		const monthlyPrices: number[] = [0, 0, 0, 0, 0, 0]
		const monthlyWeights: number[] = [0, 0, 0, 0, 0, 0]

		trades.forEach(trade => {
			const month = new Date(trade.date).getMonth()

			if (month >= 5 && month <= 10) {
				monthlyPrices[month - 5] += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight
				monthlyWeights[month - 5] += trade.weight
			}
		})

		const averagePrices = monthlyPrices.map((price, index) => {
			const count = monthlyWeights[index]
			return count > 0 ? price / count : 0
		})

		return averagePrices
	}

	const calculateAverageSeasonPrice = (trades: TradeOfPepper[]): number => {
		let totalPrice = 0
		let totalWeight = 0

		trades.forEach(trade => {
			totalPrice += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight
			totalWeight += trade.weight
		})

		return totalWeight > 0 ? totalPrice / totalWeight : 0
	}

	const averagePrices = calculateAveragePrices(allTrades)
	const averageSeasonPrice = calculateAverageSeasonPrice(allTrades)

	const [chartData] = useState<{ series: { data: number[]; name: string }[]; options: ApexCharts.ApexOptions }>(() => {
		const options: ApexCharts.ApexOptions = {
			chart: {
				type: 'line',
			},
			xaxis: {
				categories: ['Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad'],
			},
			yaxis: {
				title: {
					text: 'Średnia cena (zł)',
				},
				labels: {
					formatter: (value: number) => value.toFixed(2),
				},
				min: 2,
				max: 6,
			},
			stroke: {
				width: [3, 2],
				curve: 'straight',
				dashArray: [0, 5],
			},
			tooltip: {
				y: {
					formatter: (value: number) => value.toFixed(2) + ' zł',
				},
			},
			colors: ['#00b000', '#0033ff'],
		}

		const labels = 'Średnia cena papryki'

		const seriesData = [
			{
				data: averagePrices,
				name: labels,
			},
			{
				data: [
					averageSeasonPrice,
					averageSeasonPrice,
					averageSeasonPrice,
					averageSeasonPrice,
					averageSeasonPrice,
					averageSeasonPrice,
				],
				name: 'Średnia cena papryki sezonu',
				type: 'line',
				stroke: {
					width: 2,
					curve: 'dot',
					dashArray: [0, 2],
				},
			},
		]

		return {
			series: seriesData,
			options: options,
		}
	})

	// Statystyki
	const averagePricesByMonth = averagePrices.map((price, index) => ({
		month: ['Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad'][index],
		price: price.toFixed(2),
	}))

	const averageProfitPerTunnel = (averageSeasonPrice * 1000).toFixed(2)
	const averageYieldPerTunnel = ((averageSeasonPrice * 1000) / averagePrices.length).toFixed(2)

	return (
		<ChartArea className='w-full h-[420px] overflow-x-auto'>
			<div className='w-[1100px] xl:w-auto'>
				<p className='font-semibold text-center'>Kształtowanie się cen papryki na przestrzeni miesięcy sezonu</p>
				<div className='flex flex-row justify-between items-center h-full'>
					<div className='mt-5 xl:w-2/3'>
						<ReactApexChart
							options={chartData.options}
							series={chartData.series}
							type='line'
							width={700}
							height={350}
						/>
					</div>
					<div className='w-[400px] xl:w-1/3 self-start mt-5'>
						<ul>
							{averagePricesByMonth.map(month => (
								<li key={month.month} className='flex flex-row justify-between border-b border-gray-400'>
									Średnia cena papryki ({month.month}): <span className='font-semibold'>{month.price} zł</span>
								</li>
							))}
							<li className='flex flex-row justify-between border-b border-gray-400'>
								Średnia cena papryki sezonu: <span className='font-semibold'>{averageSeasonPrice.toFixed(2)} zł</span>
							</li>
							<li className='flex flex-row justify-between border-b border-gray-400'>
								Średni zysk przypadający na 1 tunel: <span className='font-semibold'>{averageProfitPerTunnel} zł</span>
							</li>
							<li className='flex flex-row justify-between border-b border-gray-400'>
								Średnia zbiorów przypadająca na 1 tunel:{' '}
								<span className='font-semibold'>{averageYieldPerTunnel} kg</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</ChartArea>
	)
}

export default PepperPrices
