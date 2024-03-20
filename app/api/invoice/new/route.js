import Invoice from '@models/invoice'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic';

export const POST = async request => {
	const { userId, date, invoiceNumber, totalSum, pointOfSale, status } = await request.json()

	try {
		await connectToDB()
		const newInvoice = new Invoice({
			creator: userId,
			date,
			invoiceNumber,
			totalSum,
			pointOfSale,
			status,
		})

		await newInvoice.save()
		return new Response(JSON.stringify(newInvoice), { status: 201 })
	} catch (error) {
		return new Response('Nie udało się utworzyć nowej faktury', { status: 500 })
	}
}
