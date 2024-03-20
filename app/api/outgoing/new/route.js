import Outgoing from '@models/outgoing'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic';

export const POST = async request => {
	const { userId, name, category, date, price, amount, totalSum, describe } = await request.json()

	try {
		await connectToDB()
		const newOutgoing = new Outgoing({ creator: userId, name, category, date, price, amount, totalSum, describe })

		await newOutgoing.save()
		return new Response(JSON.stringify(newOutgoing), { status: 201 })
	} catch (error) {
		return new Response('Nie udało się utworzyć nowego wydatku', { status: 500 })
	}
}
