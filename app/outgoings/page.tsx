'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import SectionTitle from '@components/UI/SectionTitle'
import SearchInput from '@components/UI/SearchInput'
import OutgoingItem from '@components/Items/OutgoingItem'
import Button from '@components/UI/Button'
import ExcelJS from 'exceljs'

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

	const exportToXLS = () => {
		const workbook = new ExcelJS.Workbook()
		const worksheet = workbook.addWorksheet('Wydatki')

		// Ustawianie niestandardowych formatów dla nagłówków kolumn
		const headerCellStyle = {
			font: { bold: true, color: { argb: 'FFFFFF' } },
			fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '009000' } as ExcelJS.Color },
			alignment: { horizontal: 'center' as ExcelJS.Alignment['horizontal'] },
		}

		// Dodawanie nagłówków kolumn
		worksheet.addRow(['Nazwa', 'Kategoria', 'Data', 'Cena', 'Ilość', 'Suma', 'Opis'])
		const headerRow = worksheet.getRow(1)
		headerRow.eachCell(cell => {
			cell.fill = headerCellStyle.fill as ExcelJS.FillPattern
			cell.font = headerCellStyle.font
			cell.alignment = headerCellStyle.alignment
		})

		// Dodawanie danych
		filteredOutgoings.forEach(outgoing => {
			const rowData = [
				outgoing.name,
				outgoing.category.toString(),
				outgoing.date,
				outgoing.price.toString(),
				outgoing.amount.toString(),
				outgoing.totalSum.toString(),
				outgoing.describe,
			]
			worksheet.addRow(rowData)
		})

		// Auto dopasowanie szerokości kolumn
		worksheet.columns.forEach(column => {
			column.width = 15
		})

		// Generowanie pliku XLSX
		workbook.xlsx.writeBuffer().then(buffer => {
			const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
			const url = URL.createObjectURL(blob)
			const link = document.createElement('a')
			link.href = url
			link.download = 'wydatki.xlsx'
			link.click()
		})
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
			<div>
				<Button onClick={exportToXLS} className='ml-0 mt-4'>Eksport do XLS</Button>
			</div>
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
