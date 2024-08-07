import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import Brand from '@components/UI/Brand'
import MenuButton from './MenuButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBars,
	faXmark,
	faCompass,
	faArrowTrendUp,
	faArrowTrendDown,
	faScaleBalanced,
	faSkullCrossbones,
	faDroplet,
	faClipboard,
	faPeopleGroup,
	faUserPen,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

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
		signOut({
			callbackUrl: '/',
		})
	}

	const handleMenuButtonClick = (title: string) => {
		setActiveMenuButton(title)
	}

	return (
		<>
			<div
				className='fixed top-5 left-2 flex flex-row justify-around items-center w-[100px] px-1/5 uppercase bg-secondaryColor text-white rounded-md cursor-pointer z-20'
				onClick={handleMenuButton}>
				<FontAwesomeIcon icon={faBars} />
				<p className='hamburger-menu__text'>menu</p>
			</div>
			<nav
				className={`fixed top-0 bottom-0 flex flex-col justify-start w-[200px] sm:w-[220px] h-screen pt-14 px-2 bg-secondaryColor transform transition-transform duration-300 z-30  ${
					isMenuVisible ? 'translate-x-0' : '-translate-x-full'
				}`}>
				<div className='absolute top-5 left-5 text-white cursor-pointer' onClick={handleXButton}>
					<FontAwesomeIcon icon={faXmark} />
				</div>
				<Brand />
				<div className='flex flex-col space-y-2 mt-5'>
					<div className='h-px w-full bg-zinc-600'></div>
					<MenuButton
						links={['/']}
						title='Strona główna'
						icon={faCompass}
						active={activeMenuButton === 'dashboard'}
						onClick={() => handleMenuButtonClick('dashboard')}
					/>
					<MenuButton
						links={['/my-account']}
						title='Moje konto'
						icon={faUserPen}
						active={activeMenuButton === 'account'}
						onClick={() => handleMenuButtonClick('account')}
					/>
					<div className='h-px w-full bg-zinc-600'></div>
					<MenuButton
						links={[
							'/new-trade-of-pepper',
							'/trades-of-pepper',
							'/new-invoice',
							'/invoices',
							'/new-point-of-sale',
							'/points-of-sale',
						]}
						title='Sprzedaż papryki'
						icon={faArrowTrendUp}
						submenuIcon={true}
						active={activeMenuButton === 'trade'}
						submenuItems={[
							'Nowa transakcja',
							'Lista transakcji',
							'Nowa faktura',
							'Lista faktur',
							'Nowy punkt sprzedaży',
							'Punkty sprzedaży',
						]}
						onClick={() => handleMenuButtonClick('trade')}
					/>
					<MenuButton
						links={['/new-outgoing', '/outgoings']}
						title='Wydatki'
						icon={faArrowTrendDown}
						submenuIcon={true}
						active={activeMenuButton === 'outgoings'}
						submenuItems={['Nowy wydatek', 'Lista wydatków']}
						onClick={() => handleMenuButtonClick('outgoings')}
					/>
					<MenuButton
						links={['/balance-of-pepper-trades', '/balance-of-outgoings']}
						title='Bilans zysków i strat'
						icon={faScaleBalanced}
						submenuIcon={true}
						active={activeMenuButton === 'balanced'}
						submenuItems={['Bilans sprzedaży papryki', 'Bilans wydatków']}
						onClick={() => handleMenuButtonClick('balanced')}
					/>
					<MenuButton
						links={['/new-operation', '/operations']}
						title='Zabiegi cheminizacyjne'
						icon={faSkullCrossbones}
						submenuIcon={true}
						active={activeMenuButton === 'pesticides'}
						submenuItems={['Nowy zabieg', 'Lista zabiegów']}
						onClick={() => handleMenuButtonClick('pesticides')}
					/>
					<MenuButton
						links={['/new-fertigation', '/fertigations']}
						title='Dziennik fertygacji'
						icon={faDroplet}
						submenuIcon={true}
						active={activeMenuButton === 'fertigation'}
						submenuItems={['Nowa fertgacja', 'Lista fertygacji']}
						onClick={() => handleMenuButtonClick('fertigation')}
					/>
					<MenuButton
						links={['/new-note', '/notes']}
						title='Notatki'
						icon={faClipboard}
						submenuIcon={true}
						active={activeMenuButton === 'notes'}
						submenuItems={['Nowa notatka', 'Lista notatek']}
						onClick={() => handleMenuButtonClick('notes')}
					/>
					<MenuButton
						links={['/new-employee', '/employees']}
						title='Pracownicy'
						icon={faPeopleGroup}
						submenuIcon={true}
						active={activeMenuButton === 'employees'}
						submenuItems={['Dodaj pracownika', 'Lista pracowników']}
						onClick={() => handleMenuButtonClick('employees')}
					/>
					<div className='h-px w-full bg-zinc-600'></div>
					<MenuButton links={['/']} title='Wyloguj się' icon={faRightFromBracket} onClick={handleSignOut} />
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
