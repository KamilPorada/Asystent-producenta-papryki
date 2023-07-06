'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import SectionTitle from '@components/UI/SectionTitle'
import SearchInput from '@components/UI/SearchInput'
import OutgoingItem from '@components/Items/OutgoingItem'

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

function page() {
	const [allOutgoings, setAllOutgoings] = useState<Outgoing[]>([])
	const [filteredOutgoings, setFilteredOutgoings] = useState<Outgoing[]>([])
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const fetchOutgoinhs = async () => {
		try {
			const response = await fetch('/api/outgoing')
			const data = await response.json()

			const filteredOutgoings = data.filter(
				(outgoing: Outgoing) => outgoing.creator._id.toString() === userId.toString()
			)

			setAllOutgoings(filteredOutgoings)
			setFilteredOutgoings(filteredOutgoings)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}
	const handleDelete = async (outgoing: Outgoing) => {
		try {
			await fetch(`/api/outgoing/${outgoing._id.toString()}`, {
				method: 'DELETE',
			})

			const filteredOutgoings = allOutgoings.filter(item => item._id !== outgoing._id)

			setAllOutgoings(filteredOutgoings)
			setLoading(true)
		} catch (error) {
			console.log(error)
		}
	}

	const handleEdit = async (outgoing: Outgoing) => {
		router.push(`/edit-outgoing?id=${outgoing._id}`)
	}

	const handleSearch = (searchTerm: string) => {
		const filteredOutgoings = allOutgoings.filter(
			outgoing =>
				outgoing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				outgoing.describe.toLowerCase().includes(searchTerm.toLowerCase())
		)

		setFilteredOutgoings(filteredOutgoings)
	}

	useEffect(() => {
		fetchOutgoinhs()
	}, [loading])

	if (loading) {
		return (
			<section className='container py-20'>
				<p className='mt-10 text-black text-center'>Wczytywanie danych...</p>
			</section>
		)
	}

	return (
		<section className='container py-20'>
			<SectionTitle title='Moje wydatki' />
			<SearchInput onSearch={handleSearch} />
			<div className='flex flex-row justify-between flex-wrap'>
				{filteredOutgoings.length > 0 ? (
					filteredOutgoings.map(outgoing => (
						<OutgoingItem
							key={outgoing._id}
							name={outgoing.name}
							category={outgoing.category}
							date={outgoing.date}
							price={outgoing.price}
							amount={outgoing.amount}
							totalSum={outgoing.totalSum}
							describe={outgoing.describe}
							handleDelete={() => handleDelete(outgoing)}
							handleEdit={() => handleEdit(outgoing)}
						/>
					))
				) : (
					<p className='w-full mt-10 text-black text-center'>Brak wydatków</p>
				)}
			</div>
		</section>
	)
}

export default page
