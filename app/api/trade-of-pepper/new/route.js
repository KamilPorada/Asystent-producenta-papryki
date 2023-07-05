import TradeOfPepper from '@models/trade-of-pepper'
import { connectToDB } from '@utils/database'

export const POST = async request => {
	const { pointOfSaleId, userId, date, clas, color, price, weight, vatRate, totalSum } = await request.json()

	try {
		await connectToDB()
		const newTradeOfPepper = new TradeOfPepper({
			creator: userId,
			pointOfSaleId: pointOfSaleId,
			date,
			clas,
			color,
			price,
			weight,
			vatRate,
			totalSum,
		})

		await newTradeOfPepper.save()
		return new Response(JSON.stringify(newTradeOfPepper), { status: 201 })
	} catch (error) {
		return new Response('Nie udało się utworzyć nowej transakcji sprzedaży', { status: 500 })
	}
}
