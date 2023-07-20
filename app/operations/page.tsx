'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import SectionTitle from '@components/UI/SectionTitle'
import OperationItem from '@components/Items/OperationItem'

interface Operation {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	date: string
	time: string
	pesticideType: number
	pesticideName: string
	pesticideDose: number
	liquidAmount: number
	waitingTime: number
	waitingTimeDate: string
	status: boolean
}

const Operations = () => {
	const [allOperations, setAllOperations] = useState<Operation[]>([])
	const [filteredOperations, setFilteredOperations] = useState<Operation[]>([])
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const fetchOperations = async () => {
		try {
			const response = await fetch('/api/operation')
			const data = await response.json()

			const filteredOperations = data.filter(
				(operation: Operation) => operation.creator._id.toString() === userId.toString()
			)

			setAllOperations(filteredOperations)
			setFilteredOperations(filteredOperations)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const handleDelete = async (operation: Operation) => {
		try {
			await fetch(`/api/operation/${operation._id.toString()}`, {
				method: 'DELETE',
			})

			const filteredOperations = allOperations.filter(item => item._id !== operation._id)

			setAllOperations(filteredOperations)
			setLoading(true)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchOperations()
		console.log(filteredOperations)
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
			<SectionTitle title='Moje zabiegi cheminizacyjne' />
			<div className='flex flex-row justify-center items-center flex-wrap gap-x-12 gap-y-2 mt-5'>
				{filteredOperations.length > 0 ? (
					filteredOperations.map(operation => (
						<OperationItem
							key={operation._id}
							date={operation.date}
							time={operation.time}
							pesticideType={operation.pesticideType}
							pesticideName={operation.pesticideName}
							pesticideDose={operation.pesticideDose}
							liquidAmount={operation.liquidAmount}
							waitingTime={operation.waitingTime}
							waitingTimeDate={operation.waitingTimeDate}
							status={operation.status}
							handleDelete={() => handleDelete(operation)}
						/>
					))
				) : (
					<p className='mt-10 text-black text-center'>Brak zabiegów cheminizacyjnych</p>
				)}
			</div>
		</section>
	)
}

export default Operations
