import React from 'react'
import Header from '@/components/HomePage/Header'
import AboutUs from '@/components/HomePage/AboutUs'
import OurTools from '@/components/HomePage/OurTools'
import HeroSeedling from '@/components/HomePage/HeroSeedling'
import JoinToUs from '@/components/HomePage/JoinToUs'

const Home = () => {
	return (
		<>
			<Header />
			<AboutUs />
			<HeroSeedling />
			<OurTools />
			<JoinToUs />
		</>
	)
}

export default Home
