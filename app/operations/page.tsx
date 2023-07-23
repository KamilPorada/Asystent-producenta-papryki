'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import SectionTitle from '@components/UI/SectionTitle'
import OperationItem from '@components/Items/OperationItem'
import OperationFilterItem from '@components/Items/OperationFilterItem'
import ExcelJS from 'exceljs'
import { isPast } from 'date-fns'

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

interface OperationFilters {
	date: string
	time: string
	pesticideType: number
	status: number
}

const Operations = () => {
	const [allOperations, setAllOperations] = useState<Operation[]>([])
	const [filteredOperations, setFilteredOperations] = useState<Operation[]>([])
	const [loading, setLoading] = useState(true)
	const [statusUpdated, setStatusUpdated] = useState(false)
	const [showFilters, setShowFilters] = useState(false)
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

			const currentYear = new Date().getFullYear()
			const filteredOperationsCurrentYear = filteredOperations.filter((operation: Operation) => {
				const operationYear = new Date(operation.date).getFullYear()
				return operationYear === currentYear
			})

			const filteredOperationsNotExpired = filteredOperationsCurrentYear.filter((operation: Operation) => {
				if (operation.status === true) {
					return true
				} else {
					const operationDate = new Date(operation.date)
					return !isPast(operationDate)
				}
			})

			setAllOperations(filteredOperationsNotExpired)
			setFilteredOperations(filteredOperationsNotExpired)
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
	const handleUpdateStatus = async (operation: Operation) => {
		try {
			const response = await fetch(`/api/operation/${operation._id.toString()}`, {
				method: 'PATCH',
				body: JSON.stringify({
					date: operation.date,
					time: operation.time,
					pesticideType: operation.pesticideType,
					pesticideName: operation.pesticideName,
					pesticideDose: operation.pesticideDose,
					liquidAmount: operation.liquidAmount,
					waitingTime: operation.waitingTime,
					waitingTimeDate: operation.waitingTimeDate,
					status: true,
				}),
			})
			if (response.ok) {
				router.push('/operations')
				setStatusUpdated(true)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleEdit = async (operation: Operation) => {
		router.push(`/edit-operation?id=${operation._id}`)
	}

	const handleShowFilters = () => {
		setShowFilters(true)
	}

	const handleHideFilters = () => {
		setShowFilters(false)
	}

	const handleFilter = (filters: OperationFilters) => {
		const { date, time, pesticideType, status } = filters

		const filteredItems = allOperations.filter(operation => {
			let matchesFilter = true

			if (date && formatDate(operation.date) !== formatDate(date)) {
				matchesFilter = false
			}
			if (time && operation.time !== time) {
				matchesFilter = false
			}
			if (pesticideType && operation.pesticideType !== pesticideType) {
				matchesFilter = false
			}
			if (status === 1 && !operation.status) {
				matchesFilter = false
			}
			if (status === 2 && operation.status) {
				matchesFilter = false
			}

			return matchesFilter
		})

		setFilteredOperations(filteredItems)
	}

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`
	}

	const exportToXLS = () => {
		const workbook = new ExcelJS.Workbook()
		const worksheet = workbook.addWorksheet('Zabiegi cheminizacyjne')

		const headerCellStyle = {
			font: { bold: true, color: { argb: 'FFFFFF' } },
			fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '009000' } as ExcelJS.Color },
			alignment: { horizontal: 'center' as ExcelJS.Alignment['horizontal'] },
		}

		worksheet.addRow([
			'L.P.',
			'Data',
			'Czas',
			'Rodzaj pestycydu',
			'Nazwa pestycydu',
			'Dawka pestycydu',
			'Ilość cieczy roboczej',
			'Karencja',
			'Data zakończenia karencji',
			'Status zabiegu',
		])
		const headerRow = worksheet.getRow(1)
		headerRow.eachCell(cell => {
			cell.fill = headerCellStyle.fill as ExcelJS.FillPattern
			cell.font = headerCellStyle.font
			cell.alignment = headerCellStyle.alignment
		})

		filteredOperations.forEach((operation, index) => {
			const rowData = [
				(index + 1).toString(),
				formatDate(operation.date),
				operation.time,
				operation.pesticideType.toString(),
				operation.pesticideName,
				operation.pesticideDose.toString(),
				operation.liquidAmount.toString(),
				operation.waitingTime.toString(),
				formatDate(operation.waitingTimeDate),
				operation.status ? 'Wykonane' : 'Zaplanowane',
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
			link.download = 'zabiegi_cheminizacyjne.xlsx'
			link.click()
		})
	}

	useEffect(() => {
		fetchOperations()
	}, [loading])
	useEffect(() => {
		setStatusUpdated(false)
	}, [])

	useEffect(() => {
		setStatusUpdated(false)
	}, [filteredOperations])

	useEffect(() => {
		if (statusUpdated) {
			fetchOperations()
		}
	}, [statusUpdated])

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
			{showFilters ? (
				<OperationFilterItem handleFilter={handleFilter} handleCancel={handleHideFilters} />
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
							updatedStatus={statusUpdated}
							handleDelete={() => handleDelete(operation)}
							handleEdit={() => handleEdit(operation)}
							handleUpdateStatus={() => handleUpdateStatus(operation)}
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
