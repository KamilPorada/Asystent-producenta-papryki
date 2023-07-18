'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import SectionTitle from '@components/UI/SectionTitle'
import OutgoingsByMonth from '@components/Charts/Outgoings/OutgoingsByMonth'
import OutgoingsByCategory from '@components/Charts/Outgoings/OutgoingsByCategory'

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

	const fetchOutgoings = async () => {
		try {
			const response = await fetch('/api/outgoing')
			const data = await response.json()

			const currentYear = new Date().getFullYear()
			const filteredOutgoings = data.filter((outgoing: Outgoing) => {
				const outgoingYear = new Date(outgoing.date).getFullYear()
				return outgoing.creator._id.toString() === userId.toString() && outgoingYear === currentYear
			})

			setAllOutgoings(filteredOutgoings)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchOutgoings()
	}, [loading])

	return (
		<section className='container py-20 text-black'>
			<SectionTitle title='Bilans wydatków' />
			{allOutgoings.length > 0 ? (
				<div className='flex flex-row justify-center flex-wrap gap-6 py-6'>
                    <OutgoingsByMonth allOutgoings={allOutgoings}/>
					<OutgoingsByCategory allOutgoings={allOutgoings}/>
                </div>
			) : (
				<p className='mt-10 md:text-lg text-center'>Wczytywanie danych...</p>
			)}
		</section>
	)
}

export default BalanceOfOutgoings
