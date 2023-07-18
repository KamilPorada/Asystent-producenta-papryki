'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import EditTradeOfPepper from '@components/Forms/TradeOfPepperForm'

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

function EditPointOfSale() {
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
    const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''
	const searchParams = useSearchParams()
	const tradeId = searchParams.get('id')

	const editTradeOfPepper = async (e: FormEvent<HTMLFormElement>) => {
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
			const response = await fetch(`/api/trade-of-pepper/${tradeId}`, {
				method: 'PATCH',
				body: JSON.stringify({
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

			if (response.ok) {
				router.push('/trades-of-pepper')
			}
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

	useEffect(() => {
		const getTradeDetails = async () => {
			const response = await fetch(`/api/trade-of-pepper/${tradeId}`)
			const data = await response.json()

			setTradeOfPepper({
				date:data.date,
				pointOfSale: data.pointOfSale,
				clas: data.clas,
				color: data.color,
				price: data.price,
				weight: data.weight,
				vatRate: data.vatRate,
			})
		}

		if (tradeId) getTradeDetails()
	}, [tradeId])

	return (
		<section className='container py-20'>
			<EditTradeOfPepper
				type='EDIT'
				tradeOfPepper={tradeOfPepper}
				setTradeOfPepper={setTradeOfPepper}
				submitting={submitting}
				handleSubmit={editTradeOfPepper}
				error={error}
                pointOfSales={pointOfSales}
			/>
		</section>
	)
}

export default EditPointOfSale
