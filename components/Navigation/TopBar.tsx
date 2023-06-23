'use client'
import React from 'react'

import { useSession } from 'next-auth/react'

function TopBar() {
	const { data: session } = useSession()
	return (
		<div className='fixed flex flex-row justify-end items-center t-0 l-0 w-full h-16  bg-mainColor'>
			<p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg sm:text-xl md:text-2xl font-semibold'>
				Sezon 2023
			</p>
			<div className='flex flex-row sm:mr-10'>
				{session?.user?.image && typeof session.user.image === 'string' && (
					<img src={session.user.image} width={37} height={37} className='rounded-full' alt='profile' />
				)}
				<p className='ml-2 self-center md:text-lg'>{session?.user?.name}</p>
			</div>
		</div>
	)
}

export default TopBar
