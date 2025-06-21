'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Header from '@/components/HomePage/Header'
import AboutUs from '@/components/HomePage/AboutUs'
import HeroSeedling from '@/components/HomePage/HeroSeedling'
import OurTools from '@/components/HomePage/OurTools'
import JoinToUs from '@/components/HomePage/JoinToUs'
import DateItem from '@components/Items/DateItem'
import WeatherItem from '@components/Items/WeatherItem'
import StatsPepper from '@components/Charts/Homee/StatsPepper'
import WeightPepper from '@components/Charts/Homee/WeightPepper'

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

const Home = () => {
	const [allTrades, setAllTrades] = useState<TradeOfPepper[]>([])
	const [loading, setLoading] = useState(true)
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	useEffect(() => {
		const fetchTradesOfPepper = async () => {
			try {
				const response = await fetch('/api/trade-of-pepper')
				const data = await response.json()

				const filteredTrades = data.filter((trade: TradeOfPepper) => {
					return trade.creator && trade.creator._id && trade.creator._id.toString() === userId.toString()
				})

				setAllTrades(filteredTrades)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchTradesOfPepper()
	}, [loading])

	if (!session?.user?.name) {
		return (
			<>
				<Header />
				<AboutUs />
				<HeroSeedling />
				<OurTools />
				<JoinToUs />
			</>
		)
	} else {
		return (
			<section className=' flex flex-row flex-wrap justify-center container py-20 text-black'>
				<DateItem />
				<WeatherItem />
				<StatsPepper allTrades={allTrades} />
				{/* <WeightPepper allTrades={allTrades} /> */}
			</section>
		)
	}
}

export default Home
