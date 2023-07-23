'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import SectionTitle from '@components/UI/SectionTitle'
import SearchInput from '@components/UI/SearchInput'
import NoteItem from '@components/Items/NoteItem'
import Button from '@components/UI/Button'
import ExcelJS from 'exceljs'

interface Note {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	date: string
	title: string
	content: string
}

function Notes() {
	const [allNotes, setAllNotes] = useState<Note[]>([])
	const [filteredNotes, setFilteredNotes] = useState<Note[]>([])
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const fetchNotes = async () => {
		try {
			const response = await fetch('/api/note')
			const data = await response.json()

			const filteredNotes = data.filter((note: Note) => note.creator._id.toString() === userId.toString())

			const currentYear = new Date().getFullYear()
			const filteredNotesCurrentYear = filteredNotes.filter((note: Note) => {
				const noteYear = new Date(note.date).getFullYear()
				return noteYear === currentYear
			})

			const sortedNotes = sortNotesByDate(filteredNotesCurrentYear)

			setAllNotes(sortedNotes)
			setFilteredNotes(sortedNotes)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const handleDelete = async (note: Note) => {
		try {
			await fetch(`/api/note/${note._id.toString()}`, {
				method: 'DELETE',
			})

			const filteredNotes = allNotes.filter(item => item._id !== note._id)

			setAllNotes(filteredNotes)
			setLoading(true)
		} catch (error) {
			console.log(error)
		}
	}

	const handleEdit = async (note: Note) => {
		router.push(`/edit-note?id=${note._id}`)
	}

	const handleSearch = (searchTerm: string) => {
		const filteredNotes = allNotes.filter(
			note =>
				note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				note.content.toLowerCase().includes(searchTerm.toLowerCase())
		)

		setFilteredNotes(filteredNotes)
	}

	const exportToXLS = () => {
		const workbook = new ExcelJS.Workbook()
		const worksheet = workbook.addWorksheet('Notatki')

		const headerCellStyle = {
			font: { bold: true, color: { argb: 'FFFFFF' } },
			fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '009000' } as ExcelJS.Color },
			alignment: { horizontal: 'center' as ExcelJS.Alignment['horizontal'] },
		}

		worksheet.addRow(['Data', 'Tytuł', 'Treść'])
		const headerRow = worksheet.getRow(1)
		headerRow.eachCell(cell => {
			cell.fill = headerCellStyle.fill as ExcelJS.FillPattern
			cell.font = headerCellStyle.font
			cell.alignment = headerCellStyle.alignment
		})

		filteredNotes.forEach(note => {
			const rowData = [getFormattedDate(note.date), note.title, note.content]
			worksheet.addRow(rowData)
		})

		worksheet.columns.forEach(column => {
			column.width = 15
		})

		workbook.xlsx.writeBuffer().then(buffer => {
			const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
			const url = URL.createObjectURL(blob)
			const link = document.createElement('a')
			link.href = url
			link.download = 'notatki.xlsx'
			link.click()
		})
	}

	const sortNotesByDate = (notes: Note[]) => {
		notes.sort((a, b) => {
			const dateA = new Date(a.date)
			const dateB = new Date(b.date)
			return dateA.getTime() - dateB.getTime()
		})
		return notes
	}

	const getFormattedDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`
	}

	useEffect(() => {
		fetchNotes()
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
			<SectionTitle title='Moje notatki' />
			<SearchInput onSearch={handleSearch} />
			<div>
				<Button onClick={exportToXLS} className='ml-0 mt-4'>
					Eksport do XLS
				</Button>
			</div>
			<div className='flex flex-row justify-around flex-wrap gap-y-5 gap-x-2 mt-4'>
				{filteredNotes.length > 0 ? (
					filteredNotes.map(note => (
						<NoteItem
							key={note._id}
							date={note.date}
							title={note.title}
							content={note.content}
							handleDelete={() => handleDelete(note)}
							handleEdit={() => handleEdit(note)}
						/>
					))
				) : (
					<p className='w-full mt-10 text-black text-center'>Brak notatek</p>
				)}
			</div>
		</section>
	)
}

export default Notes
