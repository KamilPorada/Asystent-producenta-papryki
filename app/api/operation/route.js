import NewOperation from "@models/operationn";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const newOperation = await NewOperation.find({}).populate('creator')

        return new Response(JSON.stringify(newOperation), { status: 200 })
    } catch (error) {
        return new Response("Nie udało się wczytać wszystkich zabiegów cheminizacyjnych", { status: 500 })
    }
}