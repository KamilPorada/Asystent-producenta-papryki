import TradeOfPepper from '@models/trade-of-pepper'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic';

export const GET = async (request, { params }) => {
	try {
		await connectToDB()

		const tradeOfPepper = await TradeOfPepper.findById(params.id).populate('creator')
		if (!tradeOfPepper) return new Response('Nie znaleziono transakcji sprzedaży papryki!', { status: 404 })

		return new Response(JSON.stringify(tradeOfPepper), { status: 200 })
	} catch (error) {
		return new Response('Wewnętrzny błąd serwera', { status: 500 })
	}
}

export const PATCH = async (request, { params }) => {
	const { pointOfSaleId, date, clas, color, price, weight, vatRate, totalSum } = await request.json()

	try {
		await connectToDB()

		const existingTradeOfPepper = await TradeOfPepper.findById(params.id)

		if (!existingTradeOfPepper) {
			return new Response('Nie znaleziono transakcji sprzedaży papryki!', { status: 404 })
		}

		existingTradeOfPepper.date = date
		existingTradeOfPepper.pointOfSaleId = pointOfSaleId
		existingTradeOfPepper.clas = clas
		existingTradeOfPepper.color = color
		existingTradeOfPepper.price = price
		existingTradeOfPepper.weight = weight
		existingTradeOfPepper.vatRate = vatRate
		existingTradeOfPepper.totalSum = totalSum

		await existingTradeOfPepper.save()

		return new Response('Pomyślnie edytowano dane transakcji sprzedaży papryki', { status: 200 })
	} catch (error) {
		return new Response('Błąd podczas edycji danych transakcji sprzedaży papryki', { status: 500 })
	}
}

export const DELETE = async (request, { params }) => {
	try {
		await connectToDB()

		await TradeOfPepper.findByIdAndRemove(params.id)

		return new Response('Pomyślnie usunięto transakcję sprzedaży papryki', { status: 200 })
	} catch (error) {
		return new Response('Wystąpił błąd podczas usuwania transakcji sprzedaży papryki!', { status: 500 })
	}
}
