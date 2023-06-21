'use client'

import React, { useState, useEffect } from 'react'
import Brand from '@components/UI/Brand'
import Button from '@components/UI/Button'

import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import google from '@public/assets/img/google.png'

import { LiteralUnion, ClientSafeProvider } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const { data: session } = useSession()

	const [providers, setProviders] = useState<Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	> | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const headerHeight = document.getElementById('header')?.offsetHeight || 0

			setIsScrolled(scrollPosition > headerHeight)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		;(async () => {
			const res = await getProviders()
			setProviders(res)
		})()
	}, [])

	return (
		<div
			className={`flex flex-row justify-between md:justify-around items-center fixed top-0 left-0 w-screen h-20 transition-colors duration-300 z-100 ${
				isScrolled ? 'bg-black bg-opacity-60' : ''
			}`}>
			<Brand />
			{providers &&
				!session?.user?.name &&
				Object.values(providers).map(provider => (
					<div
						className='flex flex-row justify-between mx-3 sm:text-lg rounded font-semibold bg-mainColor hover:scale-105 cursor-pointer transition-transform'
						onClick={() => {
							signIn(provider.id)
						}}
						key={provider.id}>
						<div className='bg-white p-2 ring-mainColor rounded'>
							<img
								alt='Google "G" Logo'
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
								className='w-7 rounded-sm'
							/>
						</div>
						<button className='mx-5'>Zaloguj się</button>
					</div>
				))}
			{session?.user?.name && (
				<>
					<Button
						onClick={() => {
							signOut()
						}}>
						Wyloguj się
					</Button>
					<p>{session?.user?.name}</p>
					{session?.user.image && typeof session.user.image === 'string' ? (
						<img src={session.user.image} width={37} height={37} className='rounded-full' alt='profile' />
					) : (
						<img
							src={google.src} // Zastąp '/default-profile-image.png' odpowiednim źródłem obrazu domyślnego
							width={37}
							height={37}
							className='rounded-full'
							alt='profile'
						/>
					)}
				</>
			)}
		</div>
	)
}

export default Navigation
