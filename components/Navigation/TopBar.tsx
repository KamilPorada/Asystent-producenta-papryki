import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

function TopBar() {
	const { data: session } = useSession()

	const currentYear = new Date().getFullYear()
	const seasons = []

	for (let i = 10; i > 0; i--) {
		const year = currentYear - i
		seasons.push(year)
	}
	seasons.push(currentYear)
	for (let i = 1; i <= 10; i++) {
		const year = currentYear + i
		seasons.push(year)
	}

	const [selectedYear, setSelectedYear] = useState(currentYear)

	useEffect(() => {
		const storedYear = localStorage.getItem('selectedYear')
		const parsedYear = storedYear ? parseInt(storedYear) : currentYear
		setSelectedYear(parsedYear)
	}, [])

	const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedYear = parseInt(event.target.value)
		setSelectedYear(selectedYear)
		localStorage.setItem('selectedYear', selectedYear.toString())
	}

	return (
		<div className='fixed flex flex-row justify-end items-center t-0 l-0 w-full h-16 bg-mainColor z-10'>
			<select
				className='absolute top-1/2 left-1/3 sm:left-1/2 transform -translate-y-1/2 sm:-translate-x-1/2 text-lg sm:text-xl md:text-2xl font-semibold bg-mainColor border-none focus:outline-none'
				value={selectedYear}
				onChange={handleYearChange}>
				{seasons.map(year => (
					<option className='text-sm' key={year} value={year}>
						Sezon {year}
					</option>
				))}
			</select>
			<div className='flex flex-row mr-1 sm:mr-10'>
				{session?.user?.image && typeof session.user.image === 'string' && (
					<img src={session.user.image} width={37} height={37} className='rounded-full' alt='profile' />
				)}
				<p className='ml-2 self-center md:text-lg'>{session?.user?.name}</p>
			</div>
		</div>
	)
}

export default TopBar
