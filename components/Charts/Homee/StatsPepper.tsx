import React, { useMemo } from 'react'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

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

// Typ dla przedziału
interface Interval {
	start: Date
	end: Date
}

const CombinedPepperStats: React.FC<Props> = ({ allTrades }) => {
	const currentYear = new Date().getFullYear()
	const intervalDays = 5

	const calculateIntervals = (year: number): Interval[] => {
		const startDate = new Date(year, 6, 10) // 10 lipca
		const endDate = new Date(year, 10, 7) // 7 listopada

		const intervals: Interval[] = []
		for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + intervalDays)) {
			const intervalEnd = new Date(d)
			intervalEnd.setDate(intervalEnd.getDate() + intervalDays)
			intervals.push({ start: new Date(d), end: intervalEnd })
		}
		return intervals
	}

	const totalWeight = useMemo(() => {
		return allTrades
			.filter(trade => new Date(trade.date).getFullYear() !== currentYear)
			.reduce((sum, trade) => sum + trade.weight, 0)
	}, [allTrades, currentYear])

	const totalWeightsByInterval = useMemo(() => {
		const tradesByYear: { [key: number]: TradeOfPepper[] } = {}

		allTrades.forEach(trade => {
			const tradeYear = new Date(trade.date).getFullYear()
			if (tradeYear !== currentYear) {
				if (!tradesByYear[tradeYear]) {
					tradesByYear[tradeYear] = []
				}
				tradesByYear[tradeYear].push(trade)
			}
		})

		const totalIntervals = 25
		const allYearsTotalWeights = new Array(totalIntervals).fill(0)

		Object.keys(tradesByYear).forEach(year => {
			const trades = tradesByYear[parseInt(year)]
			const intervals = calculateIntervals(parseInt(year))

			intervals.forEach(({ start, end }, index) => {
				const intervalTrades = trades.filter(trade => {
					const tradeDate = new Date(trade.date)
					return tradeDate >= start && tradeDate < end
				})

				const totalWeight = intervalTrades.reduce((sum, trade) => sum + trade.weight, 0)
				allYearsTotalWeights[index] += totalWeight
			})
		})

		return allYearsTotalWeights
	}, [allTrades, currentYear])

	const normalizedWeightsByInterval = useMemo(() => {
		if (totalWeight === 0) return totalWeightsByInterval
		return totalWeightsByInterval.map(weight => {
			const normalized = (weight / totalWeight) * 100
			return Math.round(normalized * 100) / 100
		})
	}, [totalWeightsByInterval, totalWeight])

	const averagePricesByYear = useMemo(() => {
		const tradesByYear: { [key: number]: TradeOfPepper[] } = {}

		allTrades.forEach(trade => {
			const tradeYear = new Date(trade.date).getFullYear()
			if (tradeYear !== currentYear) {
				if (!tradesByYear[tradeYear]) {
					tradesByYear[tradeYear] = []
				}
				tradesByYear[tradeYear].push(trade)
			}
		})

		const averagePrices: { [key: number]: number } = {}

		Object.keys(tradesByYear).forEach(year => {
			const trades = tradesByYear[parseInt(year)]
			const totalWeightedPrice = trades.reduce((sum, trade) => {
				return sum + trade.weight * trade.price * (1 + trade.vatRate / 100)
			}, 0)
			const totalWeight = trades.reduce((sum, trade) => sum + trade.weight, 0)
			averagePrices[parseInt(year)] = totalWeightedPrice / totalWeight
		})

		return averagePrices
	}, [allTrades, currentYear])

	const intervalIndicatorsByYear = useMemo(() => {
		const indicatorsByYear: { [key: number]: number[] } = {}
		const filteredTrades = allTrades.filter(trade => trade.clas === 1 && trade.color === 1 && trade.vatRate === 7)
		const tradesByYear: { [key: number]: TradeOfPepper[] } = {}

		filteredTrades.forEach(trade => {
			const tradeYear = new Date(trade.date).getFullYear()
			if (tradeYear !== currentYear) {
				if (!tradesByYear[tradeYear]) {
					tradesByYear[tradeYear] = []
				}
				tradesByYear[tradeYear].push(trade)
			}
		})

		Object.keys(tradesByYear).forEach(year => {
			const trades = tradesByYear[parseInt(year)]
			const averagePrice = averagePricesByYear[parseInt(year)]
			const intervals = calculateIntervals(parseInt(year))
			let indicators: number[] = []

			intervals.forEach((interval, index) => {
				const { start, end } = interval

				const intervalTrades = trades.filter(trade => {
					const tradeDate = new Date(trade.date)
					return tradeDate >= start && tradeDate < end
				})

				const totalPrices = intervalTrades.reduce((sum, trade) => sum + trade.price, 0)
				const tradeCount = intervalTrades.length
				const intervalIndicator = tradeCount > 0 ? totalPrices / tradeCount / averagePrice : 0

				indicators.push(intervalIndicator)
			})

			indicators = indicators.map((indicator, index, arr) => {
				if (indicator === 0) {
					let nearestNonZero = 0
					let left = index - 1
					let right = index + 1

					while (left >= 0 || right < arr.length) {
						if (left >= 0 && arr[left] !== 0) {
							nearestNonZero = arr[left]
							break
						}
						if (right < arr.length && arr[right] !== 0) {
							nearestNonZero = arr[right]
							break
						}
						left--
						right++
					}

					return nearestNonZero
				}
				return indicator
			})

			indicatorsByYear[parseInt(year)] = indicators
		})

		const allYearIndicators: number[] = []
		const intervals = calculateIntervals(currentYear)

		intervals.forEach((interval, index) => {
			const { start, end } = interval

			let totalPrices = 0
			let tradeCount = 0

			Object.values(indicatorsByYear).forEach(yearIndicators => {
				totalPrices += yearIndicators[index] * averagePricesByYear[currentYear - 1]
				if (yearIndicators[index] !== 0) {
					tradeCount += 1
				}
			})

			const averagePrice = averagePricesByYear[currentYear - 1]
			const allYearIndicator = tradeCount > 0 ? totalPrices / tradeCount / averagePrice : 0
			allYearIndicators.push(allYearIndicator)
		})

		return { indicatorsByYear, allYearIndicators }
	}, [allTrades, averagePricesByYear, currentYear])

	const categories = useMemo(() => {
		return calculateIntervals(currentYear).map(interval => 
			`${interval.start.toLocaleDateString()}`
		)
	}, [currentYear])

	const chartOptions: ApexOptions = useMemo(
		() => ({
			chart: {
				height: 350,
				type: 'line',
			},
			stroke: {
				curve: 'smooth',
        width: [4, 2],
			},
			fill: {
				type: 'solid',
				opacity: [0.8, 0.6],
			},
			labels: categories,
			xaxis: {
				categories: categories,
				title: {
					text: 'Data rozpoczęcia przedziału',
				},
				labels: {
					formatter: (value: string) => {
						return value;
					}
				}
			},
			yaxis: [
				{
					title: {
						text: 'Wskaźnik (%)',
					},
					labels: {
						formatter: (value: number) => {
							return value.toFixed(2);
						}
					}
				},
				{
					opposite: true,
					title: {
						text: 'Znormalizowana Waga (%)',
					},
					labels: {
						formatter: (value: number) => {
							return value.toFixed(2);
						}
					}
				},
			],
			tooltip: {
				shared: true,
				intersect: false,
				y: {
					formatter: (value: number) => {
						if (typeof value !== "undefined") {
							return value.toFixed(2) + " %";
						}
						return value;
					}
				}
			},
      colors: ['#262626', '#009000']
		}),
		[categories]
	)

	const chartSeries = useMemo(
		() => [
			{
				name: 'Wskaźniki',
				type: 'line',
				data: intervalIndicatorsByYear.allYearIndicators.map(indicator => 100 * (indicator - 1)),
				yAxisIndex: 0,
			},
			{
				name: 'Znormalizowane Wagi',
				type: 'area',
				data: normalizedWeightsByInterval,
				yAxisIndex: 1,
			},
		],
		[normalizedWeightsByInterval, intervalIndicatorsByYear]
	)

	return (
		<div className='w-full'>
			<div id='chart'>
				<ReactApexChart options={chartOptions} series={chartSeries} type='line' height={350} />
			</div>
		</div>
	)
}

export default CombinedPepperStats
