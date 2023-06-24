import React, { useState } from 'react'
import Link from 'next/link'

interface MenuButtonProps {
	links: string[]
	title: string
	icon: string
	submenuIcon?: boolean
	active?: boolean
	submenuItems?: string[]
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const MenuButton: React.FC<MenuButtonProps> = props => {
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
	const padding = props.title === 'Menu główne' || props.title === 'Ustawienia' ? 'py-2' : 'py-1'
	const activeStyle = props.active ? 'text-mainColor font-semibold' : ''

	const handleSubMenuToggle = () => {
		setIsSubMenuOpen(!isSubMenuOpen)
	}

	return (
		<>
			<Link href={props.links[0]} className={`flex flex-col`}>
				<div className={`flex flex-row justify-between items-center ${activeStyle}`} onClick={handleSubMenuToggle}>
					<button
						className={`flex items-center justify-start text-sm sm:text-base transition-colors duration-300 hover:text-mainColor hover:font-semibold ${padding}`}
						onClick={props.onClick}>
						<div className='w-6 h-6 mr-2'>
							<i className={props.icon}></i>
						</div>
						{props.title}
					</button>
					{props.submenuIcon && <i className='fa-solid fa-sort-down mb-2 cursor-pointer'></i>}
				</div>
			</Link>
			<div
				className={`flex flex-col items-end ${
					props.active && isSubMenuOpen
						? 'h-auto max-h-screen transition-all duration-300'
						: 'max-h-0 transition-all duration-300'
				}`}>
				{props.submenuItems &&
					props.submenuItems.map((item: string, index: number) => (
						<React.Fragment key={index}>
							<div>
								<Link
									href={props.links[index]}
									className={`${
										props.active && isSubMenuOpen ? 'block' : 'hidden'
									} hover:text-mainColor transition-colors text-sm sm:text-base`}>
									{item}
								</Link>
							</div>
							<div className='h-px w-full bg-zinc-600'></div>
						</React.Fragment>
					))}
			</div>
		</>
	)
}

export default MenuButton
