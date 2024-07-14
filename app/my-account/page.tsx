'use client'
import React, { useState, useEffect, FormEvent } from 'react'
import SectionTitle from '@components/UI/SectionTitle'
import Button from '@components/UI/Button'
import { useSession } from 'next-auth/react'
import FarmDataForm from '../../components/Forms/FarmDataForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface FarmData {
	area: number
	numberOfTunnels: Record<string, number>
	cityName: string
	salaryPerHour: number
}

function MyAccount() {
	const [farmData, setFarmData] = useState<FarmData>({
		area: 0,
		numberOfTunnels: {},
		cityName: '',
		salaryPerHour: 0,
	})
	const [showForm, setShowForm] = useState<boolean>(false)
	const [submitting, setIsSubmitting] = useState<boolean>(false)
	const [error, setError] = useState<string>('')
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const editFarmData = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)
		setError('')

		const { area, numberOfTunnels, cityName, salaryPerHour } = farmData
		if (area <= 0 || salaryPerHour <= 0 || cityName.trim() === '') {
			setError('Proszę wypełnić wszystkie pola poprawnymi wartościami.')
			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch(`/api/user/${userId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					area,
					numberOfTunnels,
					cityName,
					salaryPerHour,
				}),
			})
			if (response.ok) {
				toast.success('Pomyślnie zaktualizowano dane użytkownika!', {
					position: toast.POSITION.TOP_CENTER,
				})
				handleHideForm()
			} else {
				setError('Wystąpił błąd podczas aktualizacji danych.')
			}
		} catch (error) {
			console.error(error)
			setError('Wystąpił błąd podczas aktualizacji danych.')
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleShowForm = () => {
		setShowForm(true)
	}

	const handleHideForm = () => {
		setShowForm(false)
	}

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				const response = await fetch(`/api/user/${userId}`)
				if (!response.ok) throw new Error('Nie udało się pobrać danych użytkownika')
				const data = await response.json()

				setFarmData({
					area: data.area || 0,
					numberOfTunnels: data.numberOfTunnels || {},
					cityName: data.cityName || '',
					salaryPerHour: data.salaryPerHour || 0,
				})
			} catch (error) {
				console.error('Błąd podczas pobierania danych użytkownika:', error)
			}
		}

		if (userId) getUserDetails()
	}, [userId])

	const currentYear = new Date().getFullYear()
	const currentYearTunnels = farmData.numberOfTunnels[currentYear] || 0

	return (
		<section className='flex flex-col items-center container py-20'>
			<SectionTitle title='Moje konto' />
			<div className='flex flex-col w-full sm:w-5/6 md:w-1/2 h-auto p-3 mt-5 bg-white border shadow text-black'>
				<div className='flex flex-row justify-evenly items-center'>
					{session?.user?.image && typeof session.user.image === 'string' && (
						<>
							<img
								src={session.user.image}
								width={60}
								height={60}
								className='rounded-full'
								alt='Zdjęcie profilowe użytkownika Google'
							/>
							<div>
								<p className='font-semibold text-lg'>{session.user.name}</p>
								<p className='font-thin'>{session.user.email}</p>
							</div>
						</>
					)}
				</div>
				<div className='border-b-[1px] border-mainColor mt-4'></div>
				{showForm ? (
					<FarmDataForm
						farmData={farmData}
						setFarmData={setFarmData}
						submitting={submitting}
						handleSubmit={editFarmData}
						error={error}
						onCancel={handleHideForm}
					/>
				) : (
					<>
						<div className='data grid grid-cols-2 gap-4 mt-5'>
							<div className='flex flex-col justify-center items-center text-center'>
								<p className='leading-4 mb-1'>
									Powierzchnia
									<br />
									gospodarstwa:
								</p>
								<p className='text-lg font-semibold'>{farmData.area} ha</p>
							</div>
							<div className='flex flex-col justify-center items-center text-center'>
								<p className='leading-4 mb-1'>
									Liczba
									<br />
									tuneli:
								</p>
								<p className='text-lg font-semibold'>{currentYearTunnels}</p>
							</div>
							<div className='flex flex-col justify-center items-center text-center'>
								<p className='leading-4 mb-1'>
									Lokalizacja
									<br />
									gospodarstwa:
								</p>
								<p className='text-lg font-semibold'>{farmData.cityName}</p>
							</div>
							<div className='flex flex-col justify-center items-center text-center'>
								<p className='leading-4 mb-1'>
									Wynagrodzenie
									<br />
									pracownika:
								</p>
								<p className='text-lg font-semibold'>{farmData.salaryPerHour} zł/h</p>
							</div>
						</div>
						<div className='border-b-[1px] border-mainColor mt-4'></div>

						<div className='mt-5'>
							<h3 className='leading-4 mb-1'>Liczba tuneli w poszczególnych latach:</h3>
							<table className='min-w-full mt-3 divide-y divide-gray-200'>
								<thead className='bg-mainColor text-white'>
									<tr>
										<th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>Rok</th>
										<th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>Liczba tuneli</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-gray-200'>
									{Object.entries(farmData.numberOfTunnels).map(([year, count]) => (
										<tr key={year}>
											<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{year}</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{count} tuneli</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</>
				)}
				{!showForm && (
					<Button className='mt-3 py-[3px] text-sm md:text-base text-white' onClick={handleShowForm}>
						Aktualizuj dane
					</Button>
				)}
			</div>
		</section>
	)
}

export default MyAccount
