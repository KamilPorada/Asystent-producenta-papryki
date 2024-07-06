import NewEmployee from "@models/employee";
import { connectToDB } from "@utils/database";


export const dynamic = 'force-dynamic';

export const GET = async (request) => {
    try {
        await connectToDB()

        const newEmployee = await NewEmployee.find({}).populate('creator')

        return new Response(JSON.stringify(newEmployee), { status: 200 })
    } catch (error) {
        return new Response("Nie udało się wczytać wszystkich pracowników", { status: 500 })
    }
}