'use client'
import { FormEvent } from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AddInvoiceForm from '@components/Forms/InvoiceForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

function NewInvoice() {
	const [invoice, setInvoice] = useState({
		date: new Date().toISOString().slice(0, 10),
		invoiceNumber: '',
		totalSum: 0,
		pointOfSale: '',
	})
	const [pointOfSales, setPointOfSales] = useState<PointOfSale[]>([])
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const addInvoice = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!invoice.date || !invoice.invoiceNumber || !invoice.totalSum || !invoice.pointOfSale) {
			setError('Wypełnij wszystkie pola formularza!')
			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch('/api/invoice/new', {
				method: 'POST',
				body: JSON.stringify({
					userId: userId,
					pointOfSale: invoice.pointOfSale,
					date: invoice.date,
					invoiceNumber: invoice.invoiceNumber,
					totalSum: invoice.totalSum,
					status: false,
				}),
			})
			setError('')
			if (response.ok) {
				toast.success('Pomyślnie dodano nową fakturę!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/invoices')
			} else {
				throw new Error('Błąd podczas dodawania nowej faktury')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	const fetchPointOfSales = async () => {
		try {
			const response = await fetch('/api/point-of-sale')
			const data = await response.json()

			const filteredPoints = data.filter((point: PointOfSale) => {
				return point.creator && point.creator._id && point.creator._id.toString() === userId.toString()
			})

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
			<AddInvoiceForm
				type='ADD'
				invoice={invoice}
				setInvoice={setInvoice}
				submitting={submitting}
				handleSubmit={addInvoice}
				error={error}
				pointOfSales={pointOfSales}
			/>
		</section>
	)
}

export default NewInvoice
