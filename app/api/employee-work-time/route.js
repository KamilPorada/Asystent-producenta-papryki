import EmployeeWorkTime from "@models/employee-work-time";
import { connectToDB } from "@utils/database";


export const dynamic = 'force-dynamic';

export const GET = async (request) => {
    try {
        await connectToDB()

        const newEmployeeWorkTime = await EmployeeWorkTime.find({}).populate('creator')

        return new Response(JSON.stringify(newEmployeeWorkTime), { status: 200 })
    } catch (error) {
        return new Response("Nie udało się wczytać danych pracy pracownika!", { status: 500 })
    }
}