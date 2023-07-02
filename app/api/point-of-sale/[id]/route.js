import PointOfSale from '@models/point-of-sale'
import { connectToDB } from '@utils/database'

export const GET = async (request, { params }) => {
	try {
		await connectToDB()

		const pointOfSale = await PointOfSale.findById(params.id).populate('creator')
		if (!pointOfSale) return new Response('Nie znaleziono punktu sprzedaży!', { status: 404 })

		return new Response(JSON.stringify(pointOfSale), { status: 200 })
	} catch (error) {
		return new Response('Wewnętrzny błąd serwera', { status: 500 })
	}
}

export const PATCH = async (request, { params }) => {
	const { name, address, type, latitude, longitude } = await request.json()

	try {
		await connectToDB()

		const existingPointOfSale = await PointOfSale.findById(params.id)

		if (!existingPointOfSale) {
			return new Response('Nie znaleziono punktu sprzedaży!', { status: 404 })
		}

		existingPointOfSale.name = name
		existingPointOfSale.address = address
		existingPointOfSale.type = type
		existingPointOfSale.latitude = latitude
		existingPointOfSale.longitude = longitude

		await existingPointOfSale.save()

		return new Response('Pomyślnie edytowano dane punktu sprzedaży', { status: 200 })
	} catch (error) {
		return new Response('Błąd podczas edycji danych punktu sprzedaży', { status: 500 })
	}
}

export const DELETE = async (request, { params }) => {
	try {
		await connectToDB()

		await PointOfSale.findByIdAndRemove(params.id)

		return new Response('Pomyślnie usunięto punkt sprzedaży', { status: 200 })
	} catch (error) {
		return new Response('Wystąpił błąd podczas usuwania punktu sprzedaży!', { status: 500 })
	}
}
