'use client'
import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Header from '@/components/HomePage/Header'
import AboutUs from '@/components/HomePage/AboutUs'
import HeroSeedling from '@/components/HomePage/HeroSeedling'
import OurTools from '@/components/HomePage/OurTools'
import JoinToUs from '@/components/HomePage/JoinToUs'
import DateItem from '@components/Items/DateItem'
import WeatherItem from '@components/Items/WeatherItem'

const Home = () => {
	const { data: session } = useSession();

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
				<WeatherItem/>
			</section>
		)
	}
}

export default Home
