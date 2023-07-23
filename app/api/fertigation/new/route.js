import Fertigation from '@models/fertigation'
import { connectToDB } from '@utils/database'

export const POST = async request => {
	const { userId, date, fertilizerName, numberOfTunnels, fertilizerDosePerTunnel, waterAmountPerTunnel } =
		await request.json()

	try {
		await connectToDB()
		const newFertigation = new Fertigation({
			creator: userId,
			date,
			fertilizerName,
			numberOfTunnels,
			fertilizerDosePerTunnel,
			waterAmountPerTunnel,
		})

		await newFertigation.save()
		return new Response(JSON.stringify(newFertigation), { status: 201 })
	} catch (error) {
		return new Response('Nie udało się utworzyć nowego zabiegu fertygacji!', { status: 500 })
	}
}
