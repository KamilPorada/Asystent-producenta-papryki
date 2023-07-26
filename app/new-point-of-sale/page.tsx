'use client'
import { useState, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import NewPointOfSaleForm from '@components/Forms/PointOfSaleForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function NewPointOfSale() {
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
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const addPointOfSale = async (e: FormEvent<HTMLFormElement>) => {
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
			const response = await fetch('/api/point-of-sale/new', {
				method: 'POST',
				body: JSON.stringify({
					userId: userId,
					name: pointOfSale.name,
					address: pointOfSale.address,
					type: pointOfSale.type,
					latitude: pointOfSale.latitude,
					longitude: pointOfSale.longitude,
				}),
			})
			setError('')
			if (response.ok) {
				toast.success('Pomyślnie dodano nowy punkt sprzedaży!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/points-of-sale')
			} else {
				throw new Error('Błąd podczas dodawania punktu sprzedaży')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className='container py-20'>
			<NewPointOfSaleForm
				type='ADD'
				pointOfSale={pointOfSale}
				setPointOfSale={setPointOfSale}
				submitting={submitting}
				handleSubmit={addPointOfSale}
				error={error}
			/>
		</section>
	)
}

export default NewPointOfSale
