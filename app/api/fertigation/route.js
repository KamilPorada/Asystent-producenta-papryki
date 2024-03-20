import NewFertigation from '@models/fertigation'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic';

export const GET = async request => {
	try {
		await connectToDB()

		const newFertigation = await NewFertigation.find({}).populate('creator')

		return new Response(JSON.stringify(newFertigation), { status: 200 })
	} catch (error) {
		return new Response('Nie udało się wczytać wszystkich zabiegów fertygacji', { status: 500 })
	}
}
