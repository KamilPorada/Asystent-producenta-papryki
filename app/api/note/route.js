import NewNote from "@models/note";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const newNote = await NewNote.find({}).populate('creator')

        return new Response(JSON.stringify(newNote), { status: 200 })
    } catch (error) {
        return new Response("Nie udało się wczytać wszystkich notatek", { status: 500 })
    }
}