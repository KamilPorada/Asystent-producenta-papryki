import EmployeeWorkTime from '@models/employee-work-time'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic'

export const POST = async request => {
	const { userId, employeeId, date, startTime, endTime } = await request.json()

	try {
		await connectToDB()
		const newEmployeeWorkTime = new EmployeeWorkTime({ creator: userId, employee: employeeId, date, startTime, endTime })

		await newEmployeeWorkTime.save()
		return new Response(JSON.stringify(newEmployeeWorkTime), { status: 201 })
	} catch (error) {
		return new Response('Nie udało się dodać czasu pracy pracownika!', { status: 500 })
	}
}
