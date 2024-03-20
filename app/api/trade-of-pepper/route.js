import NewTradeOfPepper from "@models/trade-of-pepper";
import { connectToDB } from "@utils/database";

export const dynamic = 'force-dynamic';

export const GET = async (request) => {
    try {
        await connectToDB()

        const newTradeOfPepper = await NewTradeOfPepper.find({}).populate('creator')

        return new Response(JSON.stringify(newTradeOfPepper), { status: 200 })
    } catch (error) {
        return new Response("Nie udało się wczytać wszystkich transakcji sprzedaży papryki", { status: 500 })
    }
}