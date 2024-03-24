import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
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
	const [averagePricesByMonth, setAveragePricesByMonth] = useState<{ month: string; price: string }[]>([])
	const [averageSeasonPrice, setAverageSeasonPrice] = useState<number>(0)
	const [sumOfTotalSumWithVatRate7, setSumOfTotalSumWithVatRate7] = useState<number>(0)
	const [averageProfitPerTunnel, setAverageProfitPerTunnel] = useState<string>('0')
	const [averageYieldPerTunnel, setAverageYieldPerTunnel] = useState<string>('0')
	const [numberOfTunnels, setNumberOfTunnels] = useState(0)
	const [chartData, setChartData] = useState<{
		series: { data: number[]; name: string }[]
		options: ApexCharts.ApexOptions
	}>({
		series: [],
		options: {},
	})
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	useEffect(() => {
		const calculateAveragePrices = (trades: TradeOfPepper[]) => {
			const monthlyPrices: number[] = [0, 0, 0, 0, 0]

			const monthlyWeights: number[] = [0, 0, 0, 0, 0]

			trades.forEach(trade => {
				const month = new Date(trade.date).getMonth()

				if (month >= 6 && month <= 10) {
					monthlyPrices[month - 6] += (trade.price + (trade.price * trade.vatRate) / 100) * trade.weight
					monthlyWeights[month - 6] += trade.weight
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
				totalPrice += (trade.price + (trade.price * trade.vatRate) / 100) * trade.weight
				totalWeight += trade.weight
			})

			return totalWeight > 0 ? totalPrice / totalWeight : 0
		}

		const calculateAverageProfitPerTunnel = (trades: TradeOfPepper[]): number => {
			let totalSum = 0
			trades.forEach(trade => {
				totalSum += trade.totalSum
			})
			return totalSum / numberOfTunnels
		}

		const calculateAverageYieldPerTunnel = (trades: TradeOfPepper[]): number => {
			let totalWeight = 0
			trades.forEach(trade => {
				totalWeight += trade.weight
			})
			return totalWeight / numberOfTunnels
		}

		const calculateSumOfTotalSumWithVatRate7 = (trades: TradeOfPepper[]): number => {
			const filteredTrades = trades.filter(trade => trade.vatRate === 7)

			const sum = filteredTrades.reduce((total, trade) => {
				return total + trade.totalSum
			}, 0)

			return sum
		}

		const averagePrices = calculateAveragePrices(allTrades)
		const averageSeasonPrice = calculateAverageSeasonPrice(allTrades)
		const averageProfitPerTunnel = calculateAverageProfitPerTunnel(allTrades).toFixed(2)
		const averageYieldPerTunnel = calculateAverageYieldPerTunnel(allTrades).toFixed()
		const sumOfTotalSumWithVatRate7 = calculateSumOfTotalSumWithVatRate7(allTrades)

		const averagePricesByMonth = averagePrices.map((price, index) => ({
			month: ['Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad'][index],
			price: price.toFixed(2),
		}))

		setAveragePricesByMonth(averagePricesByMonth)
		setAverageSeasonPrice(averageSeasonPrice)
		setAverageProfitPerTunnel(averageProfitPerTunnel)
		setAverageYieldPerTunnel(averageYieldPerTunnel)
		setSumOfTotalSumWithVatRate7(sumOfTotalSumWithVatRate7)

    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'line',
      },
      xaxis: {
        categories: ['Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad'],
      },
      yaxis: {
        title: {
          text: 'Średnia cena (zł)',
        },
        labels: {
          formatter: (value: number) => value.toFixed(2),
        },
        min: 3,
        max: 5,
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
    };
    const labels = 'Średnia cena papryki';
    const seriesData = [
      {
        data: averagePrices,
        name: labels,
      },
      {
        data: [averageSeasonPrice, averageSeasonPrice, averageSeasonPrice, averageSeasonPrice, averageSeasonPrice],
        name: 'Średnia cena papryki sezonu',
        type: 'line',
        stroke: {
          width: 2,
          curve: 'dot',
          dashArray: [0, 2],
        },
      },
    ];
    setChartData({ series: seriesData, options: options });
	}, [allTrades])

	useEffect(() => {
		const getUserDetails = async () => {
			const response = await fetch(`/api/user/${userId}`)
			const data = await response.json()

			setNumberOfTunnels(data.numberOfTunnels)
		}

		if (userId) getUserDetails()
	}, [userId])

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 2,
    })
  }

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
								Faktury: <span className='font-semibold'>{formatCurrency(sumOfTotalSumWithVatRate7)}</span>
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
