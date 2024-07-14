import EmployeeWorkTime from '@models/employee-work-time'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic'

export const GET = async (request, { params }) => {
	try {
		await connectToDB()

		const employeeWorkTime = await EmployeeWorkTime.findById(params.id).populate('creator')
		if (!employeeWorkTime) return new Response('Nie znaleziono danych godzin pracy pracownika!', { status: 404 })

		return new Response(JSON.stringify(employeeWorkTime), { status: 200 })
	} catch (error) {
		return new Response('Wewnętrzny błąd serwera', { status: 500 })
	}
}


export const DELETE = async (request, { params }) => {
	try {
		await connectToDB()

		await EmployeeWorkTime.findByIdAndRemove(params.id)

		return new Response('Pomyślnie usunięto dane pracy pracownika', { status: 200 })
	} catch (error) {
		return new Response('Wystąpił błąd podczas usuwania danych pracy !', { status: 500 })
	}
}
