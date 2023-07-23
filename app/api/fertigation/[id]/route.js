import Fertigation from '@models/fertigation'
import { connectToDB } from '@utils/database'

export const GET = async (request, { params }) => {
	try {
		await connectToDB()

		const fertigation = await Fertigation.findById(params.id).populate('creator')
		if (!fertigation) return new Response('Nie znaleziono zabiegu fertygacji!', { status: 404 })

		return new Response(JSON.stringify(fertigation), { status: 200 })
	} catch (error) {
		return new Response('Wewnętrzny błąd serwera', { status: 500 })
	}
}

export const PATCH = async (request, { params }) => {
	const { date, fertilizerName, numberOfTunnels, fertilizerDosePerTunnel, waterAmountPerTunnel } = await request.json()

	try {
		await connectToDB()

		const existingFertigation = await Fertigation.findById(params.id)

		if (!existingFertigation) {
			return new Response('Nie znaleziono zabiegu fertygacji!', { status: 404 })
		}

		existingFertigation.date = date
		existingFertigation.fertilizerName = fertilizerName
		existingFertigation.numberOfTunnels = numberOfTunnels
		existingFertigation.fertilizerDosePerTunnel = fertilizerDosePerTunnel
		existingFertigation.waterAmountPerTunnel = waterAmountPerTunnel


		await existingFertigation.save()

		return new Response('Pomyślnie edytowano dane zabiegu fertygacji', { status: 200 })
	} catch (error) {
		return new Response('Błąd podczas edycji danych zabiegu fertygacji', { status: 500 })
	}
}

export const DELETE = async (request, { params }) => {
	try {
		await connectToDB()

		await Fertigation.findByIdAndRemove(params.id)

		return new Response('Pomyślnie usunięto zabieg fertygacji', { status: 200 })
	} catch (error) {
		return new Response('Wystąpił błąd podczas usuwania zabiegu fertygacji!', { status: 500 })
	}
}
