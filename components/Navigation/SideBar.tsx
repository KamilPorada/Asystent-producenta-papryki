import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import Brand from '@components/UI/Brand'
import MenuButton from './MenuButton'

function SideBar() {
	const [isMenuVisible, setIsMenuVisible] = useState(true)
	const [activeMenuButton, setActiveMenuButton] = useState('dashboard')

	const currentYear = new Date().getFullYear()

	const handleMenuButton = () => {
		setIsMenuVisible(true)
	}

	const handleXButton = () => {
		setIsMenuVisible(false)
	}

	const handleSignOut = () => {
		signOut()
	}

	const handleMenuButtonClick = (title: string) => {
		setActiveMenuButton(title)
	}

	return (
		<>
			<div
				className='fixed top-5 left-2 flex flex-row justify-around items-center w-[100px] px-1/5 uppercase bg-secondaryColor text-white rounded-md cursor-pointer z-20'
				onClick={handleMenuButton}>
				<i className='fa-solid fa-bars'></i>
				<p className='hamburger-menu__text'>menu</p>
			</div>
			<nav
				className={`fixed top-0 bottom-0 flex flex-col justify-start w-[200px] sm:w-[220px] h-screen pt-14 px-2 bg-secondaryColor transform transition-transform duration-300 z-30  ${
					isMenuVisible ? 'translate-x-0' : '-translate-x-full'
				}`}>
				<div className='absolute top-5 left-5 text-white cursor-pointer' onClick={handleXButton}>
					<i className='fa-solid fa-xmark'></i>
				</div>
				<Brand />
				<div className='flex flex-col space-y-2 mt-5'>
					<div className='h-px w-full bg-zinc-600'></div>
					<MenuButton
						links={['/']}
						title='Strona główna'
						icon='fa-solid fa-compass'
						active={activeMenuButton === 'dashboard'}
						onClick={() => handleMenuButtonClick('dashboard')}
					/>
					<div className='h-px w-full bg-zinc-600'></div>
					<MenuButton
						links={['/trade-pepper', '/', '/new-point-of-sale', '/']}
						title='Sprzedaż papryki'
						icon='fa-solid fa-arrow-trend-up'
						submenuIcon={true}
						active={activeMenuButton === 'trade'}
						submenuItems={['Nowa transakcja', 'Lista transakcji', 'Nowy punkt sprzedaży', 'Punkty sprzedaży']}
						onClick={() => handleMenuButtonClick('trade')}
					/>
					<MenuButton
						links={['/', '/', '/']}
						title='Wydatki'
						icon='fa-solid fa-arrow-trend-down'
						submenuIcon={true}
						active={activeMenuButton === 'outgoings'}
						submenuItems={['Nowy wydatek', 'Lista wydatków']}
						onClick={() => handleMenuButtonClick('outgoings')}
					/>
					<MenuButton
						links={['/', '/', '/']}
						title='Bilans zysków i strat'
						icon='fa-solid fa-scale-balanced'
						submenuIcon={true}
						active={activeMenuButton === 'balanced'}
						submenuItems={['Bilans w liczbach', 'Bilans na wykresach']}
						onClick={() => handleMenuButtonClick('balanced')}
					/>
					<MenuButton
						links={['/', '/', '/']}
						title='Zabiegi cheminizacyjne'
						icon='fa-solid fa-skull-crossbones'
						submenuIcon={true}
						active={activeMenuButton === 'pesticides'}
						submenuItems={['Nowy zabieg', 'Lista zabiegów']}
						onClick={() => handleMenuButtonClick('pesticides')}
					/>
					<MenuButton
						links={['/', '/', '/']}
						title='Dziennik fertygacji'
						icon='fa-solid fa-droplet'
						submenuIcon={true}
						active={activeMenuButton === 'fertigation'}
						submenuItems={['Nowa fertgacja', 'Lista fertygacji']}
						onClick={() => handleMenuButtonClick('fertigation')}
					/>
					<MenuButton
						links={['/', '/', '/']}
						title='Notatki'
						icon='fa-regular fa-clipboard'
						submenuIcon={true}
						active={activeMenuButton === 'notes'}
						submenuItems={['Nowa notatka', 'Lista notatek', 'Ważne daty']}
						onClick={() => handleMenuButtonClick('notes')}
					/>
					<div className='h-px w-full bg-zinc-600'></div>
					<MenuButton
						links={['/']}
						title='Ustawienia'
						icon='fa-solid fa-right-from-bracket'
						active={activeMenuButton === 'settings'}
						onClick={() => handleMenuButtonClick('settings')}
					/>
					<MenuButton links={['/']} title='Wyloguj się' icon='fa-solid fa-gear' onClick={handleSignOut} />
				</div>
				<footer className='absolute bottom-0 w-full -mx-2 mb-2 flex flex-col text-center text-white text-xs sm:text-sm font-light'>
					<p>&copy; {currentYear} Asystent Producenta Papryki</p>
					<p>Wszelkie prawa zastrzeżone</p>
				</footer>
			</nav>
		</>
	)
}

export default SideBar
