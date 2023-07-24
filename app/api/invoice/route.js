import NewInvoice from '@models/invoice'
import { connectToDB } from '@utils/database'

export const GET = async request => {
	try {
		await connectToDB()

		const newInvoice = await NewInvoice.find({}).populate('creator')

		return new Response(JSON.stringify(newInvoice), { status: 200 })
	} catch (error) {
		return new Response('Nie udało się wczytać wszystkich faktur', { status: 500 })
	}
}
