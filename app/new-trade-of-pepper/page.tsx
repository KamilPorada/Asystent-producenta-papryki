'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import NewTradeOfPepperForm from '@components/Forms/TradeOfPepperForm'

interface PointOfSale {
	_id: string
	address: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	latitude: string
	longitude: string
	name: string
	type: string
}

function NewTradeOfPepper() {
	const [tradeOfPepper, setTradeOfPepper] = useState({
		date: '',
		clas: 0,
		color: 0,
		price: 0,
		weight: 0,
		vatRate: 0,
		pointOfSale: 0,
	})
	const [pointOfSales, setPointOfSales] = useState<PointOfSale[]>([])
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const addTradeOfPepper = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (
			tradeOfPepper.date === '' ||
			!tradeOfPepper.clas ||
			!tradeOfPepper.color ||
			!tradeOfPepper.price ||
			!tradeOfPepper.weight ||
			!tradeOfPepper.vatRate ||
			!tradeOfPepper.pointOfSale
		) {
			setError('Wypełnij wszystkie pola formularza!')
			setIsSubmitting(false)
			return
		}

		try {
			const totalSum = calculateTotalSum(tradeOfPepper.price, tradeOfPepper.vatRate, tradeOfPepper.weight)
			const response = await fetch('/api/trade-of-pepper/new', {
				method: 'POST',
				body: JSON.stringify({
					userId: userId,
					pointOfSaleId: tradeOfPepper.pointOfSale,
					date: tradeOfPepper.date,
					clas: tradeOfPepper.clas,
					color: tradeOfPepper.color,
					price: tradeOfPepper.price,
					weight: tradeOfPepper.weight,
					vatRate: tradeOfPepper.vatRate,
					totalSum: totalSum,
				}),
			})
			setError('')
			if (response.ok) {
				router.push('/trades-of-pepper')
			} else {
				throw new Error('Błąd podczas dodawania nowej transakcji sprzedaży')
			}
			console.log(tradeOfPepper.pointOfSale)
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	function calculateTotalSum(price: number, vatRate: number, weight: number): number {
		const vatAmount = (price * weight * vatRate) / 100
		const totalSum = price * weight + vatAmount

		return Number(totalSum.toFixed(2))
	}

	const fetchPointOfSales = async () => {
		try {
			const response = await fetch('/api/point-of-sale')
			const data = await response.json()

			const filteredPoints = data.filter((point: PointOfSale) => point.creator._id.toString() === userId.toString())

			setPointOfSales(filteredPoints)
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchPointOfSales()
	}, [loading])

	return (
		<section className='container py-20'>
			<NewTradeOfPepperForm
				type='ADD'
				tradeOfPepper={tradeOfPepper}
				setTradeOfPepper={setTradeOfPepper}
				submitting={submitting}
				handleSubmit={addTradeOfPepper}
				error={error}
				pointOfSales={pointOfSales}
			/>
		</section>
	)
}

export default NewTradeOfPepper
