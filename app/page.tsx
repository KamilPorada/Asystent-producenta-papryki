'use client'
import React, { useState, useEffect } from 'react'
import Header from '@/components/HomePage/Header'
import AboutUs from '@/components/HomePage/AboutUs'
import HeroSeedling from '@/components/HomePage/HeroSeedling'
import OurTools from '@/components/HomePage/OurTools'
import JoinToUs from '@/components/HomePage/JoinToUs'
import DateItem from '@components/Items/DateItem'
import { useSession } from 'next-auth/react'

const Home = () => {
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	if (!session?.user?.name) {
		return (
			<>
				<Header />
				<AboutUs />
				<HeroSeedling />
				{/* <OurTools /> */}
				{/* <JoinToUs /> */}
			</>
		)
	} else {
		return (
			<section className=' flex flex-row flex-wrap justify-center container py-20 text-black'>
				<DateItem />
			</section>
		)
	}
}

export default Home
