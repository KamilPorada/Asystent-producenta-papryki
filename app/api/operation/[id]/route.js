import Operation from '@models/Operation'
import { connectToDB } from '@utils/database'

export const GET = async (request, { params }) => {
	try {
		await connectToDB()

		const operation = await Operation.findById(params.id).populate('creator')
		if (!operation) return new Response('Nie znaleziono zabiegu cheminizacyjnego!', { status: 404 })

		return new Response(JSON.stringify(operation), { status: 200 })
	} catch (error) {
		return new Response('Wewnętrzny błąd serwera', { status: 500 })
	}
}

export const PATCH = async (request, { params }) => {
	const { date, time, pesticideType, pesticideName, pesticideDose, liquidAmount, waitingTime, waitingTimeDate, status } = await request.json()

	try {
		await connectToDB()

		const existingOperation = await Operation.findById(params.id)

		if (!existingOperation) {
			return new Response('Nie znaleziono zabiegu cheminizacyjnego!', { status: 404 })
		}

		existingOperation.date = date
		existingOperation.time = time
		existingOperation.pesticideType = pesticideType
		existingOperation.pesticideName = pesticideName
		existingOperation.pesticideDose = pesticideDose
		existingOperation.liquidAmount = liquidAmount
		existingOperation.waitingTime = waitingTime
		existingOperation.waitingTimeDate = waitingTimeDate
		existingOperation.status = status


		await existingOperation.save()

		return new Response('Pomyślnie edytowano dane zabiegu cheminizacyjnego', { status: 200 })
	} catch (error) {
		return new Response('Błąd podczas edycji danych zabiegu cheminizacyjnego', { status: 500 })
	}
}
  

export const DELETE = async (request, { params }) => {
	try {
		await connectToDB()

		await Operation.findByIdAndRemove(params.id)

		return new Response('Pomyślnie usunięto zabieg cheminizacyjny', { status: 200 })
	} catch (error) {
		return new Response('Wystąpił błąd podczas usuwania zabiegu cheminizacyjnego!', { status: 500 })
	}
}
