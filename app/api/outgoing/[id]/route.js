import Outgoing from '@models/outgoing'
import { connectToDB } from '@utils/database'

export const GET = async (request, { params }) => {
	try {
		await connectToDB()

		const outgoing = await Outgoing.findById(params.id).populate('creator')
		if (!outgoing) return new Response('Nie znaleziono wydatku!', { status: 404 })

		return new Response(JSON.stringify(outgoing), { status: 200 })
	} catch (error) {
		return new Response('Wewnętrzny błąd serwera', { status: 500 })
	}
}

export const PATCH = async (request, { params }) => {
	const { name, category, price, amount, totalSum, describe } = await request.json()

	try {
		await connectToDB()

		const existingOutgoing = await Outgoing.findById(params.id)

		if (!existingOutgoing) {
			return new Response('Nie znaleziono wydatku!', { status: 404 })
		}

		existingOutgoing.name = name
		existingOutgoing.category = category
		existingOutgoing.price = price
		existingOutgoing.amount = amount
		existingOutgoing.totalSum = totalSum
		existingOutgoing.describe = describe

		await existingOutgoing.save()

		return new Response('Pomyślnie edytowano dane wydatku', { status: 200 })
	} catch (error) {
		return new Response('Błąd podczas edycji danych wydatku', { status: 500 })
	}
}

export const DELETE = async (request, { params }) => {
	try {
		await connectToDB()

		await Outgoing.findByIdAndRemove(params.id)

		return new Response('Pomyślnie usunięto wydatek', { status: 200 })
	} catch (error) {
		return new Response('Wystąpił błąd podczas usuwania wydatku!', { status: 500 })
	}
}
