'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import SectionTitle from '@components/UI/SectionTitle'
import React from 'react'
import { useTopBar } from '../../components/contexts/TopBarContext'
import TradesOfPepperByMonth from '@components/Charts/TradesOfPepper/TradesOfPepperByMonth'
import NumberOfTradesPepper from '@components/Charts/TradesOfPepper/NumberOfTradesPepper'
import ClassesOfPepper from '@components/Charts/TradesOfPepper/ColorsAndClassOfPepper'
import AveragePepperPrices from '@components/Charts/TradesOfPepper/AveragePepperPrices'
import MonthlyPointOfSalesTrades from '@components/Charts/TradesOfPepper/MonthlyPointOfSalesTrades'
import PointOfSaleSum from '@components/Charts/TradesOfPepper/PointOfSalesSums'

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

function BalanceOfPepperTrades() {
	const [allTrades, setAllTrades] = useState<TradeOfPepper[]>([])
	const [loading, setLoading] = useState(true)
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''
	const { selectedYear } = useTopBar()

	useEffect(() => {
		const fetchTradesOfPepper = async () => {
			try {
				const response = await fetch('/api/trade-of-pepper')
				const data = await response.json()

				const filteredTrades = data.filter((trade: TradeOfPepper) => {
					return trade.creator && trade.creator._id && trade.creator._id.toString() === userId.toString();
				});
				

				const filteredTradesCurrentYear = filteredTrades.filter((trade: TradeOfPepper) => {
					const tradeYear = new Date(trade.date).getFullYear()
					return tradeYear === selectedYear
				})

				setAllTrades(filteredTradesCurrentYear)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchTradesOfPepper()
	}, [selectedYear, loading])

	if (loading) {
		return (
			<section className='container py-20'>
				<p className='mt-10 text-black text-center'>Wczytywanie danych...</p>
			</section>
		)
	}

	return (
		<section className='container py-20 text-black'>
			<SectionTitle title='Bilans sprzedaży papryki' />
			{allTrades.length > 0 ? (
				<div className='flex flex-row justify-center flex-wrap gap-6 py-6'>
					<TradesOfPepperByMonth allTrades={allTrades} />
					<NumberOfTradesPepper allTrades={allTrades} />
					<ClassesOfPepper allTrades={allTrades} />
					<AveragePepperPrices allTrades={allTrades} />
					<MonthlyPointOfSalesTrades allTrades={allTrades} />
					<PointOfSaleSum allTrades={allTrades} />
				</div>
			) : (
				<p className='mt-10 text-black text-center'>Brak danych z tego roku!</p>
			)}
		</section>
	)
}

export default BalanceOfPepperTrades
