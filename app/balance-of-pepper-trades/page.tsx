'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import SectionTitle from '@components/UI/SectionTitle'
import React from 'react'
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

	const fetchTradesOfPepper = async () => {
		try {
			const response = await fetch('/api/trade-of-pepper')
			const data = await response.json()

			const currentYear = new Date().getFullYear()
			const filteredTrades = data.filter((trade: TradeOfPepper) => {
				const tradeYear = new Date(trade.date).getFullYear()
				return trade.creator._id.toString() === userId.toString() && tradeYear === currentYear
			})

			setAllTrades(filteredTrades)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchTradesOfPepper()
	}, [loading])

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
					<PointOfSaleSum allTrades={allTrades}/>
				</div>
			) : (
				<p className='mt-10 md:text-lg text-center'>Wczytywanie danych...</p>
			)}
		</section>
	)
}

export default BalanceOfPepperTrades
