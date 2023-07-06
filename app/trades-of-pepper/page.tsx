'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import SectionTitle from '@components/UI/SectionTitle'
import TradeOfPepperTableHeader from '@components/Items/TradeOfPepperTableHeader'
import TradeOfPepperItem from '@components/Items/TradeOfPepperItem'
import TradeOfPepperFilterItem from '@components/Items/TradeOfPepperFilterItem'

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

interface TradeOfPepperFilters {
	date: string
	clas: number
	color: number
	pointOfSale: string
}

function TradesOfPepper() {
	const [allTrades, setAllTrades] = useState<TradeOfPepper[]>([])
	const [filteredTrades, setFilteredTrades] = useState<TradeOfPepper[]>([])
	const [showFilters, setShowFilters] = useState(false)
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const handleShowFilters = () => {
		setShowFilters(true)
	}

	const handleHideFilters = () => {
		setShowFilters(false)
	}

	const handleFilter = (filters: TradeOfPepperFilters) => {
		const { date, clas, color, pointOfSale } = filters

		const filteredItems = allTrades.filter(trade => {
			let matchesFilter = true

			// Filtruj po dacie
			if (date && formatDate(trade.date) !== formatDate(date)) {
				matchesFilter = false
			}

			// Filtruj po klasie
			if (clas && trade.clas !== clas) {
				matchesFilter = false
			}

			// Filtruj po kolorze
			if (color && trade.color !== color) {
				matchesFilter = false
			}

			// Filtruj po punkcie sprzedaży
			if (pointOfSale && trade.pointOfSaleId !== pointOfSale) {
				matchesFilter = false
			}

			return matchesFilter
		})

		setFilteredTrades(filteredItems)
	}

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

	const handleDelete = async (trade: TradeOfPepper) => {
		try {
			await fetch(`/api/trade-of-pepper/${trade._id.toString()}`, {
				method: 'DELETE',
			})

			const filteredTrades = allTrades.filter(item => item._id !== trade._id)

			setAllTrades(filteredTrades)
			setLoading(true)
		} catch (error) {
			console.log(error)
		}
	}

	const handleEdit = async (trade: TradeOfPepper) => {
		router.push(`/edit-trade-of-pepper?id=${trade._id}`)
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
			{showFilters ? (
				<TradeOfPepperFilterItem handleFilter={handleFilter} handleCancel={handleHideFilters} />
			) : (
				<div className='flex flex-row justify-end'>
					<button
						className='px-2 py-1 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors'
						onClick={handleShowFilters}>
						Zastosuj filtry
					</button>
				</div>
			)}
			{filteredTrades.length > 0 ? (
				<div className='overflow-x-auto ring-1 ring-black mt-5'>
					<TradeOfPepperTableHeader />
					{filteredTrades.length > 0
						? filteredTrades.map((trade, index) => (
								<TradeOfPepperItem
									key={trade._id}
									index={index + 1}
									date={formatDate(trade.date)}
									clas={getClassLabel(trade.clas)}
									color={getColorLabel(trade.color)}
									price={trade.price}
									weight={trade.weight}
									vatRate={trade.vatRate}
									totalSum={trade.totalSum}
									pointOfSale={trade.pointOfSaleId}
									handleDelete={() => handleDelete(trade)}
									handleEdit={() => handleEdit(trade)}
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
