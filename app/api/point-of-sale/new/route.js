import PointOfSale from '@models/point-of-sale'
import { connectToDB } from '@utils/database'

export const POST = async request => {
	const { userId, name, address, type, latitude, longitude } = await request.json()

	try {
		await connectToDB()
		const newPointOfSale = new PointOfSale({ creator: userId, name, address, type, latitude, longitude })

		await newPointOfSale.save()
		return new Response(JSON.stringify(newPointOfSale), { status: 201 })
	} catch (error) {
		return new Response('Nie udało się utworzyć nowego punktu sprzedaży', { status: 500 })
	}
}
