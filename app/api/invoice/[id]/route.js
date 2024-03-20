import Invoice from '@models/invoice'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic';

export const GET = async (request, { params }) => {
	try {
		await connectToDB()

		const invoice = await Invoice.findById(params.id).populate('creator')
		if (!invoice) return new Response('Nie znaleziono faktury!', { status: 404 })

		return new Response(JSON.stringify(invoice), { status: 200 })
	} catch (error) {
		return new Response('Wewnętrzny błąd serwera', { status: 500 })
	}
}

export const PATCH = async (request, { params }) => {
	const { date, invoiceNumber, totalSum, pointOfSale, status } = await request.json()

	try {
		await connectToDB()

		const existingInvoice = await Invoice.findById(params.id)

		if (!existingInvoice) {
			return new Response('Nie znaleziono faktury!', { status: 404 })
		}

		existingInvoice.date = date
		existingInvoice.invoiceNumber = invoiceNumber
		existingInvoice.totalSum = totalSum
		existingInvoice.pointOfSale = pointOfSale
		existingInvoice.status = status

		await existingInvoice.save()

		return new Response('Pomyślnie edytowano dane faktury', { status: 200 })
	} catch (error) {
		return new Response('Błąd podczas edycji danych faktury', { status: 500 })
	}
}

export const DELETE = async (request, { params }) => {
	try {
		await connectToDB()

		await Invoice.findByIdAndRemove(params.id)

		return new Response('Pomyślnie usunięto fakture', { status: 200 })
	} catch (error) {
		return new Response('Wystąpił błąd podczas usuwania faktury!', { status: 500 })
	}
}
