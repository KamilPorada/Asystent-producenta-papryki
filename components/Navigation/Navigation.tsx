'use client'

import TopBar from './TopBar'
import SideBar from './SideBar'
import MainNavigation from './MainNavigation'

import { useSession } from 'next-auth/react'

const Navigation = () => {
	const { data: session } = useSession()

	if (session?.user?.name) {
		return (
			<>
				<TopBar />
				<SideBar />
			</>
		)
	} else {
		return <MainNavigation />
	}
}

export default Navigation
