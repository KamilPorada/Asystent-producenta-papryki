import Note from '@models/note'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic';

export const POST = async request => {
	const { userId, date, title, content} = await request.json()

	try {
		await connectToDB()
		const newNote = new Note({ creator: userId, date, title, content })

		await newNote.save()
		return new Response(JSON.stringify(newNote), { status: 201 })
	} catch (error) {
		return new Response('Nie udało się utworzyć nowej notatki', { status: 500 })
	}
}
