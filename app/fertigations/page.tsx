'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useTopBar } from '../../components/contexts/TopBarContext';
import SectionTitle from '@components/UI/SectionTitle'
import SearchInput from '@components/UI/SearchInput'
import FertigationItem from '@components/Items/FertigationItem'
import Button from '@components/UI/Button'
import ExcelJS from 'exceljs'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Fertigation {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	date: string
	fertilizerName: string
	numberOfTunnels: number
	fertilizerDosePerTunnel: number
	waterAmountPerTunnel: number
}

const Fertigations = () => {
	const [allFertigations, setAllFertigations] = useState<Fertigation[]>([])
	const [filteredFertigations, setFilteredFertigations] = useState<Fertigation[]>([])
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''
	const { selectedYear } = useTopBar();

	const fetchFertigations = async () => {
		try {
			const response = await fetch('/api/fertigation')
			const data = await response.json()

			const filteredFertigations = data.filter((fertigation: Fertigation) => {
				return fertigation.creator && fertigation.creator._id && fertigation.creator._id.toString() === userId.toString();
			});
			

			const filteredFerigationsCurrentYear = filteredFertigations.filter((fertigation: Fertigation) => {
				const fertigationYear = new Date(fertigation.date).getFullYear()
				return fertigationYear === selectedYear
			})
			const sortedFertigations = sortFertigationsByDate(filteredFerigationsCurrentYear)
			setAllFertigations(sortedFertigations)
			setFilteredFertigations(sortedFertigations)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const handleDelete = async (fertigation: Fertigation) => {
		try {
			await fetch(`/api/fertigation/${fertigation._id.toString()}`, {
				method: 'DELETE',
			})

			const filteredFertigations = allFertigations.filter(item => item._id !== fertigation._id)

			toast.success('Pomyślnie usunięto zabieg fertygacji!', {
				position: toast.POSITION.TOP_CENTER,
			})

			setAllFertigations(filteredFertigations)
			setLoading(true)
		} catch (error) {
			console.log(error)
		}
	}

	const handleEdit = async (fertigation: Fertigation) => {
		router.push(`/edit-fertigation?id=${fertigation._id}`)
	}

	const handleSearch = (searchTerm: string) => {
		const filteredFertigation = allFertigations.filter(fertigation =>
			fertigation.fertilizerName.toLowerCase().includes(searchTerm.toLowerCase())
		)

		setFilteredFertigations(filteredFertigation)
	}

	const sortFertigationsByDate = (fertigations: Fertigation[]) => {
		fertigations.sort((a, b) => {
			const dateA = new Date(a.date)
			const dateB = new Date(b.date)
			return dateA.getTime() - dateB.getTime()
		})
		return fertigations
	}

	const exportToXLS = () => {
		const workbook = new ExcelJS.Workbook()
		const worksheet = workbook.addWorksheet('Zabiegi fertygacji')

		const headerCellStyle = {
			font: { bold: true, color: { argb: 'FFFFFF' } },
			fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '009000' } as ExcelJS.Color },
			alignment: { horizontal: 'center' as ExcelJS.Alignment['horizontal'] },
		}

		worksheet.addRow(['Data', 'Nazwa nawozu', 'Liczba tuneli', 'Dawka nawozu na 1 tunel', 'Ilość wody na 1 tunel'])
		const headerRow = worksheet.getRow(1)
		headerRow.eachCell(cell => {
			cell.fill = headerCellStyle.fill as ExcelJS.FillPattern
			cell.font = headerCellStyle.font
			cell.alignment = headerCellStyle.alignment
		})

		filteredFertigations.forEach(fertigation => {
			const rowData = [
				getFormattedDate(fertigation.date),
				fertigation.fertilizerName,
				fertigation.numberOfTunnels.toString(),
				fertigation.fertilizerDosePerTunnel.toString(),
				fertigation.waterAmountPerTunnel.toString(),
			]
			worksheet.addRow(rowData)
		})

		worksheet.columns.forEach(column => {
			column.width = 20
		})

		workbook.xlsx.writeBuffer().then(buffer => {
			const blob = new Blob([buffer], {
				type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			})
			const url = URL.createObjectURL(blob)
			const link = document.createElement('a')
			link.href = url
			link.download = 'zabiegi_fertygacji.xlsx'
			link.click()
		})
	}

	const getFormattedDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}

	useEffect(() => {
		fetchFertigations()
	}, [loading, selectedYear])

	if (loading) {
		return (
			<section className='container py-20'>
				<p className='mt-10 text-black text-center'>Wczytywanie danych...</p>
			</section>
		)
	}

	return (
		<section className='container py-20'>
			<SectionTitle title='Moje zabiegi fertygacji' />
			<SearchInput onSearch={handleSearch} />
			<div>
				<Button onClick={exportToXLS} className='ml-0 mt-4'>
					Eksport do XLS
				</Button>
			</div>
			<div className='flex flex-row justify-center items-center flex-wrap gap-x-12 gap-y-2 mt-5'>
				{filteredFertigations.length > 0 ? (
					filteredFertigations.map(fertigation => (
						<FertigationItem
							key={fertigation._id}
							date={fertigation.date}
							fertilizerName={fertigation.fertilizerName}
							numberOfTunnels={fertigation.numberOfTunnels}
							fertilizerDosePerTunnel={fertigation.fertilizerDosePerTunnel}
							waterAmountPerTunnel={fertigation.waterAmountPerTunnel}
							handleDelete={() => handleDelete(fertigation)}
							handleEdit={() => handleEdit(fertigation)}
						/>
					))
				) : (
					<p className='mt-10 text-black text-center'>Brak zabiegów fertygacji!</p>
				)}
			</div>
		</section>
	)
}

export default Fertigations
