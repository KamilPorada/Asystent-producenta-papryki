import NewPointOfSale from "@models/point-of-sale";
import { connectToDB } from "@utils/database";

export const dynamic = 'force-dynamic';

export const GET = async (request) => {
    try {
        await connectToDB()

        const newPointsOfSales = await NewPointOfSale.find({}).populate('creator')

        return new Response(JSON.stringify(newPointsOfSales), { status: 200 })
    } catch (error) {
        return new Response("Nie udało się wczytać wszystkich punktów sprzedaży", { status: 500 })
    }
}