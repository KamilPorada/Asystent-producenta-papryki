import NewOutgoing from "@models/outgoing";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const newOutgoing = await NewOutgoing.find({}).populate('creator')

        return new Response(JSON.stringify(newOutgoing), { status: 200 })
    } catch (error) {
        return new Response("Nie udało się wczytać wszystkich wydatków", { status: 500 })
    }
}