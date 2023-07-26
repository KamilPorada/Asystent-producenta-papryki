'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import EditPointOfSaleForm from '@components/Forms/PointOfSaleForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function EditPointOfSale() {
	const [pointOfSale, setPointOfSale] = useState({
		name: '',
		address: '',
		type: 0,
		latitude: 0,
		longitude: 0,
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const searchParams = useSearchParams()
	const pointId = searchParams.get('id')

	const editPointOfSale = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (
			!pointOfSale.name ||
			!pointOfSale.address ||
			!pointOfSale.type ||
			!pointOfSale.latitude ||
			!pointOfSale.longitude
		) {
			setError('Wypełnij wszystkie pola formularza!')
			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch(`/api/point-of-sale/${pointId}`, {
				method: 'PATCH',
				body: JSON.stringify({
					name: pointOfSale.name,
					address: pointOfSale.address,
					type: pointOfSale.type,
					latitude: pointOfSale.latitude,
					longitude: pointOfSale.longitude,
				}),
			})

			if (response.ok) {
				toast.success('Pomyślnie edytowano dane punktu sprzedaży!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/points-of-sale')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	useEffect(() => {
		const getPointtDetails = async () => {
			const response = await fetch(`/api/point-of-sale/${pointId}`)
			const data = await response.json()

			setPointOfSale({
				name: data.name,
				address: data.address,
				type: data.type,
				latitude: data.latitude,
				longitude: data.longitude,
			})
		}

		if (pointId) getPointtDetails()
	}, [pointId])

	return (
		<section className='container py-20'>
			<EditPointOfSaleForm
				type='EDIT'
				pointOfSale={pointOfSale}
				setPointOfSale={setPointOfSale}
				submitting={submitting}
				handleSubmit={editPointOfSale}
				error={error}
			/>
		</section>
	)
}

export default EditPointOfSale
