'use client'

import React from 'react'
import Header from '@/components/HomePage/Header'
import AboutUs from '@/components/HomePage/AboutUs'
import OurTools from '@/components/HomePage/OurTools'
import HeroSeedling from '@/components/HomePage/HeroSeedling'
import JoinToUs from '@/components/HomePage/JoinToUs'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Home = () => {
	const { data: session } = useSession()
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
		return
	}
}

export default Home
