'use client'
import React, { useState, useEffect, FormEvent } from 'react'
import SectionTitle from '@components/UI/SectionTitle'
import Button from '@components/UI/Button'
import { useSession } from 'next-auth/react'
import FarmDataForm from '../../components/Forms/FarmDataForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyAccount() {
	const [farmData, setFarmData] = useState({
		area: 0,
		numberOfTunnels: 0,
	})
	const [showForm, setShowForm] = useState(false)
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const editFarmData = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			const response = await fetch(`/api/user/${userId.toString()}`, {
				method: 'PATCH',
				body: JSON.stringify({
					area: farmData.area,
					numberOfTunnels: farmData.numberOfTunnels,
				}),
			})
			if (response.ok) {
				toast.success('Pomyślnie zaktualizowano dane użytkownika!', {
					position: toast.POSITION.TOP_CENTER,
				})
				handleHideForm()
			}
		} catch (error) {
			console.log(error)
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
			const response = await fetch(`/api/user/${userId}`)
			const data = await response.json()

			setFarmData({
				...farmData,
				area: data.area,
				numberOfTunnels: data.numberOfTunnels,
			})
		}

		if (userId) getUserDetails()
	}, [userId])

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
					<div className='data flex flex-row justify-around items-center mt-5'>
						<div className='flex flex-col justify-center items-center w-1/2 text-center'>
							<p className='leading-4 mb-1'>
								Powierzchnia
								<br />
								gospodatstwa:
							</p>
							<p className='text-lg font-semibold'>{farmData.area} ha</p>
						</div>
						<div className='flex flex-col justify-center items-center w-1/2'>
							<p className='leading-4 mb-1'>
								Liczba
								<br />
								tuneli:
							</p>
							<p className='text-lg font-semibold'>{farmData.numberOfTunnels}</p>
						</div>
					</div>
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
