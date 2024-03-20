import Operation from '@models/operationn'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic';

export const POST = async request => {
	const { userId, date, time, pesticideType, pesticideName, pesticideDose, liquidAmount, waitingTime, waitingTimeDate, status  } = await request.json()

	try {
		await connectToDB()
		const newOperation = new Operation({ creator: userId, date, time, pesticideType, pesticideName, pesticideDose, liquidAmount, waitingTime, waitingTimeDate, status })

		await newOperation.save()
		return new Response(JSON.stringify(newOperation), { status: 201 })
	} catch (error) {
		return new Response('Nie udało się utworzyć nowego zabiegu cheminizacyjnego!', { status: 500 })
	}
}
