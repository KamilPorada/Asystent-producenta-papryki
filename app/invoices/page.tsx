'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import SectionTitle from '@components/UI/SectionTitle'
import InvoiceTableHeader from '@components/Items/InvoiceTableHeader'
import InvoiceItem from '@components/Items/InvoiceItem'
import InvoiceFilterItem from '@components/Items/InvoiceFilterItem'
import ExcelJS from 'exceljs'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Invoice {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	pointOfSale: string
	date: string
	invoiceNumber: string
	totalSum: number
	status: boolean
}

interface InvoiceFilters {
	date: string
	pointOfSale: string
	status: number
}

function Invoices() {
	const [allInvoices, setAllInvoices] = useState<Invoice[]>([])
	const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([])
	const [showFilters, setShowFilters] = useState(false)
	const [statusUpdated, setStatusUpdated] = useState(false)
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const handleShowFilters = () => {
		setShowFilters(true)
	}

	const handleHideFilters = () => {
		setShowFilters(false)
	}

	const handleFilter = (filters: InvoiceFilters) => {
		const { date, pointOfSale, status } = filters

		const filteredItems = allInvoices.filter(invoice => {
			let matchesFilter = true

			if (date && getFormattedDate(invoice.date) !== getFormattedDate(date)) {
				matchesFilter = false
			}
			if (pointOfSale && invoice.pointOfSale !== pointOfSale) {
				matchesFilter = false
			}
			if (status === 1 && invoice.status) {
				matchesFilter = false
			}
			if (status === 2 && !invoice.status) {
				matchesFilter = false
			}

			return matchesFilter
		})

		setFilteredInvoices(filteredItems)
	}

	const handleUpdateStatus = async (invoice: Invoice) => {
		try {
			const response = await fetch(`/api/invoice/${invoice._id.toString()}`, {
				method: 'PATCH',
				body: JSON.stringify({
					userId: userId,
					pointOfSale: invoice.pointOfSale,
					date: invoice.date,
					invoiceNumber: invoice.invoiceNumber,
					totalSum: invoice.totalSum,
					status: true,
				}),
			})
			if (response.ok) {
				toast.success('Pomyślnie zaktualizowano status faktury!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/invoices')
				setStatusUpdated(true)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleEdit = async (invoice: Invoice) => {
		router.push(`/edit-invoice?id=${invoice._id}`)
	}

	const handleDelete = async (invoice: Invoice) => {
		try {
			await fetch(`/api/invoice/${invoice._id.toString()}`, {
				method: 'DELETE',
			})

			const filteredInvoices = allInvoices.filter(item => item._id !== invoice._id)

			toast.success('Pomyślnie usunięto fakturę!', {
				position: toast.POSITION.TOP_CENTER,
			})

			setAllInvoices(filteredInvoices)
			setLoading(true)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchInvoices = async () => {
		try {
			const response = await fetch('/api/invoice')
			const data = await response.json()

			const filteredInvoices = data.filter((invoice: Invoice) => invoice.creator._id.toString() === userId.toString())

			const currentYear = new Date().getFullYear()
			const filteredInvoicesCurrentYear = filteredInvoices.filter((invoice: Invoice) => {
				const invoiceYear = new Date(invoice.date).getFullYear()
				return invoiceYear === currentYear
			})

			const invoicesWithStatusFalse = filteredInvoicesCurrentYear.filter((invoice: Invoice) => !invoice.status)
			const invoicesWithStatusTrue = filteredInvoicesCurrentYear.filter((invoice: Invoice) => invoice.status)

			const sortedInvoicesWithStatusFalse = sortInvoicesByDate(invoicesWithStatusFalse)

			const sortedInvoicesWithStatusTrue = sortInvoicesByDate(invoicesWithStatusTrue)

			const sortedInvoices = [...sortedInvoicesWithStatusFalse, ...sortedInvoicesWithStatusTrue]

			setAllInvoices(sortedInvoices)
			setFilteredInvoices(sortedInvoices)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchInvoices()
	}, [loading])

	useEffect(() => {
		setStatusUpdated(false)
	}, [])

	useEffect(() => {
		setStatusUpdated(false)
	}, [filteredInvoices])

	useEffect(() => {
		if (statusUpdated) {
			fetchInvoices()
		}
	}, [statusUpdated])

	const sortInvoicesByDate = (invoices: Invoice[]) => {
		invoices.sort((a, b) => {
			const dateA = new Date(a.date)
			const dateB = new Date(b.date)
			return dateA.getTime() - dateB.getTime()
		})
		return invoices
	}

	const getFormattedDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}

	const exportToXLS = () => {
		const workbook = new ExcelJS.Workbook()
		const worksheet = workbook.addWorksheet('Moje faktury')

		const headerCellStyle = {
			font: { bold: true, color: { argb: 'FFFFFF' } },
			fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '009000' } as ExcelJS.Color },
			alignment: { horizontal: 'center' as ExcelJS.Alignment['horizontal'] },
		}

		worksheet.addRow(['L.P.', 'Data', 'Numer faktury', 'Suma', 'Punkt sprzedaży', 'Status'])
		const headerRow = worksheet.getRow(1)
		headerRow.eachCell(cell => {
			cell.fill = headerCellStyle.fill as ExcelJS.FillPattern
			cell.font = headerCellStyle.font
			cell.alignment = headerCellStyle.alignment
		})

		filteredInvoices.forEach((invoice, index) => {
			const rowData = [
				(index + 1).toString(),
				getFormattedDate(invoice.date),
				invoice.invoiceNumber,
				invoice.totalSum.toString(),
				invoice.pointOfSale,
				invoice.status ? 'Zrealizowana' : 'Niezrealizowana',
			]
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
			link.download = 'moje_faktury.xlsx'
			link.click()
		})
	}

	if (loading) {
		return (
			<section className='container py-20'>
				<p className='mt-10 text-black text-center'>Wczytywanie danych...</p>
			</section>
		)
	}

	return (
		<section className='container py-20'>
			<SectionTitle title='Moje faktury' />
			{showFilters ? (
				<InvoiceFilterItem handleFilter={handleFilter} handleCancel={handleHideFilters} />
			) : (
				<div className='flex flex-row justify-evenly sm:justify-end mt-2'>
					<button
						className='px-2 py-1 mr-3 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors'
						onClick={exportToXLS}>
						Eksport do XLS
					</button>
					<button
						className='px-2 py-1 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors'
						onClick={handleShowFilters}>
						Zastosuj filtry
					</button>
				</div>
			)}
			{filteredInvoices.length > 0 ? (
				<div className='overflow-x-auto ring-1 ring-black mt-5'>
					<InvoiceTableHeader />
					{filteredInvoices.map((invoice, index) => (
						<InvoiceItem
							key={invoice._id}
							index={index + 1}
							date={getFormattedDate(invoice.date)}
							invoiceNumber={invoice.invoiceNumber}
							totalSum={invoice.totalSum}
							pointOfSale={invoice.pointOfSale}
							status={invoice.status}
							updatedStatus={statusUpdated}
							handleUpdateStatus={() => handleUpdateStatus(invoice)}
							handleEdit={() => handleEdit(invoice)}
							handleDelete={() => handleDelete(invoice)}
						/>
					))}
				</div>
			) : (
				<p className='mt-10 text-black text-center'>Brak faktur</p>
			)}
		</section>
	)
}

export default Invoices
