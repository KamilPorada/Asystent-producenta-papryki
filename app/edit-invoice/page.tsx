'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { parseISO, format } from 'date-fns'
import EditInvoiceForm from '@components/Forms/InvoiceForm'

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

function EditInvoice() {
	const [invoice, setInvoice] = useState({
		date: '',
		pointOfSale: '',
		invoiceNumber: '',
		totalSum: 0,
		status: false,
	})
	const [pointOfSales, setPointOfSales] = useState<PointOfSale[]>([])
	const [submitting, setIsSubmitting] = useState(false)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''
	const searchParams = useSearchParams()
	const invoiceId = searchParams.get('id')

	const editInvoice = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!invoice.date || !invoice.invoiceNumber || !invoice.totalSum || !invoice.pointOfSale) {
			setError('Wypełnij wszystkie pola formularza!')
			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch(`/api/invoice/${invoiceId}`, {
				method: 'PATCH',
				body: JSON.stringify({
					userId: userId,
					pointOfSale: invoice.pointOfSale,
					date: invoice.date,
					invoiceNumber: invoice.invoiceNumber,
					totalSum: invoice.totalSum,
					status: invoice.status,
				}),
			})

			if (response.ok) {
				router.push('/invoices')
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
		const getInvoices = async () => {
			const response = await fetch(`/api/invoice/${invoiceId}`)
			const data = await response.json()
			const formattedDate = format(parseISO(data.date), 'yyyy-MM-dd')

			setInvoice({
				...invoice,
				date: formattedDate,
				pointOfSale: data.pointOfSale,
				invoiceNumber: data.invoiceNumber,
				totalSum: data.totalSum,
				status: data.status,
			})
		}

		if (invoiceId) getInvoices()
	}, [invoiceId])

	return (
		<section className='container py-20'>
			<EditInvoiceForm
				type='EDIT'
				invoice={invoice}
				setInvoice={setInvoice}
				submitting={submitting}
				handleSubmit={editInvoice}
				error={error}
				pointOfSales={pointOfSales}
			/>
		</section>
	)
}

export default EditInvoice
