'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import SectionTitle from '@components/UI/SectionTitle'
import SearchInput from '@components/UI/SearchInput'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PointOfSaleItem from '@components/Items/PointOfSaleItem'

interface PointOfSale {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	name: string
	address: string
	type: number
	latitude: number
	longitude: number
}

function PointsOfSale() {
	const [allPoints, setAllPoints] = useState<PointOfSale[]>([])
	const [filteredPoints, setFilteredPoints] = useState<PointOfSale[]>([])
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const fetchPointsOfSale = async () => {
		try {
			const response = await fetch('/api/point-of-sale')
			const data = await response.json()

			const filteredPoints = data.filter((point: PointOfSale) => point.creator._id.toString() === userId.toString())

			setAllPoints(filteredPoints)
			setFilteredPoints(filteredPoints)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const handleDelete = async (point: PointOfSale) => {
		try {
			await fetch(`/api/point-of-sale/${point._id.toString()}`, {
				method: 'DELETE',
			})

			const filteredPoints = allPoints.filter(item => item._id !== point._id)

			toast.success('Pomyślnie usunięto punkt sprzedaży!', {
				position: toast.POSITION.TOP_CENTER,
			})

			setAllPoints(filteredPoints)
			setLoading(true)
		} catch (error) {
			console.log(error)
		}
	}

	const handleEdit = async (point: PointOfSale) => {
		router.push(`/edit-point-of-sale?id=${point._id}`)
	}

	const handleSearch = (searchTerm: string) => {
		const filteredPoints = allPoints.filter(point => point.name.toLowerCase().includes(searchTerm.toLowerCase()))

		setFilteredPoints(filteredPoints)
	}

	useEffect(() => {
		fetchPointsOfSale()
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
			<SectionTitle title='Moje punkty sprzedaży' />
			<SearchInput onSearch={handleSearch} />
			{filteredPoints.length > 0 ? (
				filteredPoints.map(point => (
					<PointOfSaleItem
						key={point._id}
						name={point.name}
						address={point.address}
						type={point.type}
						latitude={point.latitude}
						longitude={point.longitude}
						handleDelete={() => handleDelete(point)}
						handleEdit={() => handleEdit(point)}
					/>
				))
			) : (
				<p className='mt-10 text-black text-center'>Brak punktów sprzedaży</p>
			)}
		</section>
	)
}

export default PointsOfSale
