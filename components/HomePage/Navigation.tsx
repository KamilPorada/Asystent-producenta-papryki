'use client'

import React, { useState, useEffect } from 'react'
import Brand from '@components/UI/Brand'
import Button from '@components/UI/Button'

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import google from '@public/assets/img/google.png'
import Link from 'next/link'

import { LiteralUnion, ClientSafeProvider } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const { data: session } = useSession()
	const currentYear = new Date().getFullYear()

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

	const [isMenuVisible, setIsMenuVisible] = useState(true)

	const handleMenuButton = () => {
		setIsMenuVisible(true)
	}

	const handleXButton = () => {
		setIsMenuVisible(false)
	}

	if (session?.user?.name) {
		return (
			<>
				<div className='fixed flex flex-row justify-end items-center t-0 l-0 w-full h-16 bg-mainColor'>
					<p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg sm:text-xl md:text-2xl font-semibold'>
						Sezon 2023
					</p>
					<div className='flex flex-row sm:mr-10'>
						{session?.user.image && typeof session.user.image === 'string' && (
							<img src={session.user.image} width={37} height={37} className='rounded-full' alt='profile' />
						)}
						<p className='ml-2 self-center md:text-lg'>{session?.user?.name}</p>
					</div>
				</div>
				<div
					className='fixed top-5 left-2 flex flex-row justify-around items-center w-[100px] px-1/5 uppercase bg-secondaryColor text-white rounded-md cursor-pointer z-20 '
					onClick={handleMenuButton}>
					<i className='fa-solid fa-bars'></i>
					<p className='hamburger-menu__text'>menu</p>
				</div>
				<nav
					className={`fixed top-0 bottom-0 flex flex-col justify-start w-[200px] h-screen pt-14 px-2 bg-secondaryColor transform transition-transform duration-300 z-30  ${
						isMenuVisible ? 'translate-x-0' : '-translate-x-full'
					}`}>
					<div className='absolute top-5 left-5 text-white cursor-pointer' onClick={handleXButton}>
						<i className='fa-solid fa-xmark'></i>
					</div>
					<Brand />
					<div className='flex flex-col space-y-2 mt-5'>
						<button className='flex items-center justify-start py-2 transition-colors duration-300 hover:text-mainColor'>
							<div className='w-6 h-6 mr-2'>
								<i className='fa-solid fa-compass'></i>
							</div>
							Strona główna
						</button>
						<div className='h-px w-full bg-zinc-600'></div>
						<button className='flex items-center justify-start py-1 transition-colors duration-300 hover:text-mainColor'>
							<div className='w-6 h-6 mr-2'>
								<i className='fa-solid fa-arrow-trend-up'></i>
							</div>
							Sprzedaż papryki
						</button>
						<button className='flex items-center justify-start py-1 transition-colors duration-300 hover:text-mainColor'>
							<div className='w-6 h-6 mr-2'>
								<i className='fa-solid fa-arrow-trend-down'></i>
							</div>
							Wydatki
						</button>
						<button className='flex items-center justify-start py-1 transition-colors duration-300 hover:text-mainColor'>
							<div className='w-6 h-6 mr-2'>
								<i className='fa-solid fa-scale-balanced'></i>
							</div>
							Bilans zysków i strat
						</button>
						<button className='flex items-center justify-start py-1 transition-colors duration-300 hover:text-mainColor'>
							<div className='w-6 h-6 mr-2'>
								<i className='fa-solid fa-skull-crossbones'></i>
							</div>
							Zabiegi cheminizacyjne
						</button>
						<button className='flex items-center justify-start py-1 transition-colors duration-300 hover:text-mainColor'>
							<div className='w-6 h-6 mr-2'>
								<i className='fa-solid fa-droplet'></i>
							</div>
							Dziennik fertygacji
						</button>
						<button className='flex items-center justify-start py-1 transition-colors duration-300 hover:text-mainColor'>
							<div className='w-6 h-6 mr-2'>
								<i className='fa-regular fa-clipboard'></i>
							</div>
							Notatki
						</button>
						<div className='h-px w-full bg-zinc-600'></div>
						<button className='flex items-center justify-start py-2 transition-colors duration-300 hover:text-mainColor'>
							<div className='w-6 h-6 mr-2'>
								<i className='fa-solid fa-gear'></i>
							</div>
							Ustawienia
						</button>
						<Link href='/'>
							<button
								className='flex items-center justify-start py-1 transition-colors duration-300 hover:text-mainColor'
								onClick={() => {
									signOut()
								}}>
								<div className='w-6 h-6 mr-2'>
									<i className='fa-solid fa-right-from-bracket'></i>
								</div>
								Wyloguj się
							</button>
						</Link>
					</div>
					<footer className='absolute bottom-0 w-full -mx-2 flex flex-col text-center text-white text-md font-light'>
						<p>&copy; {currentYear} Asystent Producenta Papryki</p>
						<p>Wszelkie prawa zastrzeżone</p>
					</footer>
				</nav>
			</>
		)
	} else {
		return (
			<nav
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
			</nav>
		)
	}
}

export default Navigation
