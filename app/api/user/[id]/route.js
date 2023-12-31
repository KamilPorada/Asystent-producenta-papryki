import User from '@models/user'
import { connectToDB } from '@utils/database'

export const GET = async (request, { params }) => {
	try {
		await connectToDB()

		const user = await User.findById(params.id)
		if (!user) return new Response('Nie znaleziono użytkownika!', { status: 404 })

		return new Response(JSON.stringify(user), { status: 200 })
	} catch (error) {
		return new Response('Wewnętrzny błąd serwera', { status: 500 })
	}
}

export const PATCH = async (request, { params }) => {
	const { area, numberOfTunnels } = await request.json()

	try {
		await connectToDB()

		const existingFarmData = await User.findById(params.id)

		if (!existingFarmData) {
			return new Response('Nie znaleziono użytkownika', { status: 404 })
		}

		existingFarmData.area = area
		existingFarmData.numberOfTunnels = numberOfTunnels

		await existingFarmData.save()

		return new Response('Pomyślnie edytowano dane użytkownika', { status: 200 })
	} catch (error) {
		return new Response('Błąd podczas edycji danych użytkownika', { status: 500 })
	}
}
