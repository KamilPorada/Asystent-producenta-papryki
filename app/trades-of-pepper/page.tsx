'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import SectionTitle from '@components/UI/SectionTitle'
import TradeOfPepperTableHeader from '@components/Items/TradeOfPepperTableHeader'
import TradeOfPepperItem from '@components/Items/TradeOfPepperItem'

interface TradeOfPepper {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	pointOfSaleId:string
	date: string
	clas: number
	color: number
	price: number
	weight: number
	vatRate: number
	totalSum: number
}

function TradesOfPepper() {
	const [allTrades, setAllTrades] = useState<TradeOfPepper[]>([])
	const [filteredTrades, setFilteredTrades] = useState<TradeOfPepper[]>([])
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`
	}

	const getClassLabel = (index: number) => {
		if (index === 3) {
			return 'Krojona'
		}
		return index.toString()
	}

	const getColorLabel = (index: number) => {
		switch (index) {
			case 1:
				return 'Czerwona'
			case 2:
				return 'Żółta'
			case 3:
				return 'Zielona'
			case 4:
				return 'Pomarańczowa'
			case 5:
				return 'Blondyna'
			default:
				return ''
		}
	}

	const fetchTradesOfPepper = async () => {
		try {
			const response = await fetch('/api/trade-of-pepper')
			const data = await response.json()

			const filteredTrades = data.filter((trade: TradeOfPepper) => trade.creator._id.toString() === userId.toString())

			setAllTrades(filteredTrades)
			setFilteredTrades(filteredTrades)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchTradesOfPepper()
	}, [loading])

	if (loading) {
		return (
			<section className='container py-20'>
				<p className='mt-10 text-black text-center'>Wczytywanie danych...</p>
			</section>
		)
	}

	return (
		<section className='container py-20'>
			<SectionTitle title='Moje transakcje sprzedaży papryki' />
			{filteredTrades.length > 0 ? (
				<div className='overflow-x-auto ring-1 ring-black mt-5'>
					<TradeOfPepperTableHeader />
					{filteredTrades.length > 0
						? filteredTrades.map((point, index) => (
								<TradeOfPepperItem
									key={point._id}
									index={index + 1}
									date={formatDate(point.date)}
									clas={getClassLabel(point.clas)}
									color={getColorLabel(point.color)}
									price={point.price}
									weight={point.weight}
									vatRate={point.vatRate}
									totalSum={point.totalSum}
									pointOfSale={point.pointOfSaleId}
								/>
						  ))
						: ''}
				</div>
			) : (
				<p className='mt-10 text-black text-center'>Brak transakcji sprzedaży papryki</p>
			)}
		</section>
	)
}

export default TradesOfPepper
