import Note from '@models/note'
import { connectToDB } from '@utils/database'

export const GET = async (request, { params }) => {
	try {
		await connectToDB()

		const note = await Note.findById(params.id).populate('creator')
		if (!note) return new Response('Nie znaleziono notatki!', { status: 404 })

		return new Response(JSON.stringify(note), { status: 200 })
	} catch (error) {
		return new Response('Wewnętrzny błąd serwera', { status: 500 })
	}
}

export const PATCH = async (request, { params }) => {
	const { date, title, content } = await request.json()

	try {
		await connectToDB()

		const existingNote = await Note.findById(params.id)

		if (!existingNote) {
			return new Response('Nie znaleziono notatki!', { status: 404 })
		}

		existingNote.date = date
		existingNote.title = title
		existingNote.content = content

		await existingNote.save()

		return new Response('Pomyślnie edytowano dane notatki', { status: 200 })
	} catch (error) {
		return new Response('Błąd podczas edycji danych notatki', { status: 500 })
	}
}

export const DELETE = async (request, { params }) => {
	try {
		await connectToDB()

		await Note.findByIdAndRemove(params.id)

		return new Response('Pomyślnie usunięto notatkę', { status: 200 })
	} catch (error) {
		return new Response('Wystąpił błąd podczas usuwania notatki!', { status: 500 })
	}
}
