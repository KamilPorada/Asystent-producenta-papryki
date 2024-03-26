'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import SectionTitle from '@components/UI/SectionTitle'
import OutgoingsByMonth from '@components/Charts/Outgoings/OutgoingsByMonth'
import OutgoingsByCategory from '@components/Charts/Outgoings/OutgoingsByCategory'
import { useTopBar } from '../../components/contexts/TopBarContext';


interface Outgoing {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	name: string
	category: number
	date: string
	price: number
	amount: number
	totalSum: number
	describe: string
}

function BalanceOfOutgoings() {
	const [allOutgoings, setAllOutgoings] = useState<Outgoing[]>([])
	const [loading, setLoading] = useState(true)
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''
	const { selectedYear } = useTopBar();

	const fetchOutgoings = async () => {
		try {
			const response = await fetch('/api/outgoing')
			const data = await response.json()

			const filteredOutgoings = data.filter((outgoing: Outgoing) => {
				return outgoing.creator && outgoing.creator._id && outgoing.creator._id.toString() === userId.toString();
			});
			

			const filteredOutgoingsCurrentYear = filteredOutgoings.filter((outgoing: Outgoing) => {
				const outgoingYear = new Date(outgoing.date).getFullYear()
				return outgoingYear === selectedYear
			})

			setAllOutgoings(filteredOutgoingsCurrentYear)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchOutgoings()
	}, [loading, selectedYear])

	if (loading) {
		return (
			<section className='container py-20'>
				<p className='mt-10 text-black text-center'>Wczytywanie danych...</p>
			</section>
		)
	}

	return (
		<section className='container py-20 text-black'>
			<SectionTitle title='Bilans wydatków' />
			{allOutgoings.length > 0 ? (
				<div className='flex flex-row justify-center flex-wrap gap-6 py-6'>
                    <OutgoingsByMonth allOutgoings={allOutgoings}/>
					<OutgoingsByCategory allOutgoings={allOutgoings}/>
                </div>
			) : (
				<p className='mt-10 text-black text-center'>Brak danych z tego roku!</p>
			)}
		</section>
	)
}

export default BalanceOfOutgoings
