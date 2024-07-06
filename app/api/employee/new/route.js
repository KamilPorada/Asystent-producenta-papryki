import Employee from '@models/employee'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic';

export const POST = async request => {
	const { userId, name, surname, gender, age, nationality} = await request.json()

	try {
		await connectToDB()
		const newEmployee = new Employee({ creator: userId, name, surname, gender, age, nationality })

		await newEmployee.save()
		return new Response(JSON.stringify(newEmployee), { status: 201 })
	} catch (error) {
		return new Response('Nie udało się dodać nowego pracownika!', { status: 500 })
	}
}
