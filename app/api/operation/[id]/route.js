import Operation from '@models/operationn'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic'

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
	const {
		date,
		time,
		pesticideType,
		pestName,
		pesticideName,
		isLiquid,
		pesticideDose,
		liquidAmount,
		waitingTime,
		waitingTimeDate,
		status,
		note,
	} = await request.json()

	try {
		await connectToDB()

		const existingOperation = await Operation.findById(params.id)

		if (!existingOperation) {
			return new Response('Nie znaleziono zabiegu cheminizacyjnego!', { status: 404 })
		}

		existingOperation.date = date
		existingOperation.time = time
		existingOperation.pesticideType = pesticideType
		existingOperation.pestName = pestName
		existingOperation.pesticideName = pesticideName
		existingOperation.isLiquid = isLiquid
		existingOperation.pesticideDose = pesticideDose
		existingOperation.liquidAmount = liquidAmount
		existingOperation.waitingTime = waitingTime
		existingOperation.waitingTimeDate = waitingTimeDate
		existingOperation.status = status
		existingOperation.note = note

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
