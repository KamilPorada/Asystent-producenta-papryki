import Employee from '@models/employee'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic'

export const GET = async (request, { params }) => {
	try {
		await connectToDB()

		const employee = await Employee.findById(params.id).populate('creator')
		if (!employee) return new Response('Nie znaleziono pracownika!', { status: 404 })

		return new Response(JSON.stringify(employee), { status: 200 })
	} catch (error) {
		return new Response('Wewnętrzny błąd serwera', { status: 500 })
	}
}

export const PATCH = async (request, { params }) => {
	const { name, surname, gender, age, nationality } = await request.json()

	try {
		await connectToDB()

		const existingEmployee = await Employee.findById(params.id)

		if (!existingEmployee) {
			return new Response('Nie znaleziono pracownika!', { status: 404 })
		}

		existingEmployee.name = name
		existingEmployee.surname = surname
		existingEmployee.gender = gender
		existingEmployee.age = age
		existingEmployee.nationality = nationality

		await existingEmployee.save()

		return new Response('Pomyślnie edytowano dane pracownika notatki', { status: 200 })
	} catch (error) {
		return new Response('Błąd podczas edycji danych pracownika', { status: 500 })
	}
}

export const DELETE = async (request, { params }) => {
	try {
		await connectToDB()

		await Employee.findByIdAndRemove(params.id)

		return new Response('Pomyślnie usunięto pracownika', { status: 200 })
	} catch (error) {
		return new Response('Wystąpił błąd podczas usuwania pracownika!', { status: 500 })
	}
}
