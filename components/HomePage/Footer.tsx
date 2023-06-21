'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	const { data: session } = useSession()

	if (!session?.user?.name) {
		return (
			<footer className='flex flex-col bg-gray-200 py-4 text-center text-black text-md md:text-lg'>
				<p>&copy; {currentYear} Asystent Producenta Papryki</p>
				<p>Wszelkie prawa zastrzeżone</p>
			</footer>
		)
	} else {
		return
	}
}

export default Footer
