'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useTopBar } from '../../components/contexts/TopBarContext'
import SectionTitle from '@components/UI/SectionTitle'
import SearchInput from '@components/UI/SearchInput'
import EmployeeItem from '@components/Items/EmployeeItem'
import Button from '@components/UI/Button'
import ExcelJS from 'exceljs'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Employee {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	name: string
	surname: string
	gender: string
	age: number
	nationality: string
}

interface WorkTime {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	employee: string
	date: string
	startTime: string
	endTime: string
}

function Employees() {
	const [allEmployees, setAllEmployees] = useState<Employee[]>([])
	const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])
	const [employeeWorkTimes, setEmployeeWorkTimes] = useState<{ [key: string]: number }>({})
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''
	const { selectedYear } = useTopBar()

	function calculateWorkDuration(startTime: string, endTime: string) {
		const [startHour, startMinute] = startTime.split(':').map(Number)
		const [endHour, endMinute] = endTime.split(':').map(Number)

		const startTotalMinutes = startHour * 60 + startMinute
		const endTotalMinutes = endHour * 60 + endMinute

		const durationMinutes = endTotalMinutes - startTotalMinutes

		return durationMinutes
	}

	const fetchEmployees = async () => {
		try {
			const response = await fetch('/api/employee')
			const data = await response.json()

			const filteredEmployees = data.filter((employee: Employee) => {
				return employee.creator && employee.creator._id && employee.creator._id.toString() === userId.toString()
			})

			setAllEmployees(filteredEmployees)
			setFilteredEmployees(filteredEmployees)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const fetchWorkTimes = async () => {
		try {
			const response = await fetch('/api/employee-work-time')
			const data: WorkTime[] = await response.json()
			const workTimesByEmployee: { [key: string]: number } = {}

			data.forEach(workTime => {
				if (new Date(workTime.date).getFullYear() === selectedYear) {
					const duration = calculateWorkDuration(workTime.startTime, workTime.endTime)
					if (!workTimesByEmployee[workTime.employee]) {
						workTimesByEmployee[workTime.employee] = 0
					}
					workTimesByEmployee[workTime.employee] += duration
				}
			})

			setEmployeeWorkTimes(workTimesByEmployee)
		} catch (error) {
			console.log(error)
		}
	}

	const handleDelete = async (employee: Employee) => {
		try {
			const response = await fetch('/api/employee-work-time')
			const workTimes: WorkTime[] = await response.json()
			const employeeWorkTimes = workTimes.filter(workTime => workTime.employee === employee._id)

			await Promise.all(employeeWorkTimes.map(async (workTime) => {
				await fetch(`/api/employee-work-time/${workTime._id}`, {
					method: 'DELETE',
				})
			}))

			await fetch(`/api/employee/${employee._id.toString()}`, {
				method: 'DELETE',
			})

			const updatedEmployees = allEmployees.filter(item => item._id !== employee._id)

			toast.success('Pomyślnie usunięto pracownika!', {
				position: toast.POSITION.TOP_CENTER,
			})

			setAllEmployees(updatedEmployees)
			setFilteredEmployees(updatedEmployees)
		} catch (error) {
			console.log(error)
		}
	}


	const handleEdit = async (employee: Employee) => {
		router.push(`/edit-employee?id=${employee._id}`)
	}

	const handleSearch = (searchTerm: string) => {
		const filteredEmployees = allEmployees.filter(
			employee =>
				employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				employee.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
				employee.nationality.toLowerCase().includes(searchTerm.toLowerCase())
		)

		setFilteredEmployees(filteredEmployees)
	}

	const handleOpenCalendar = (employee: Employee) => {
		router.push(`/employee-calendar?id=${employee._id}`)
	}

	const exportToXLS = () => {
		const workbook = new ExcelJS.Workbook()
		const worksheet = workbook.addWorksheet('Pracownicy')

		const headerCellStyle = {
			font: { bold: true, color: { argb: 'FFFFFF' } },
			fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '009000' } as ExcelJS.Color },
			alignment: { horizontal: 'center' as ExcelJS.Alignment['horizontal'] },
		}

		worksheet.addRow(['Imię', 'Nazwisko', 'Płeć', 'Wiek', 'Narodowość'])
		const headerRow = worksheet.getRow(1)
		headerRow.eachCell(cell => {
			cell.fill = headerCellStyle.fill as ExcelJS.FillPattern
			cell.font = headerCellStyle.font
			cell.alignment = headerCellStyle.alignment
		})

		filteredEmployees.forEach(employee => {
			const rowData = [employee.name, employee.surname, employee.gender, employee.age, employee.nationality]
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
			link.download = 'pracownicy.xlsx'
			link.click()
		})
	}

	useEffect(() => {
		fetchEmployees()
	}, [loading, selectedYear])

	useEffect(() => {
		fetchWorkTimes()
	}, [selectedYear])

	if (loading) {
		return (
			<section className='container py-20'>
				<p className='mt-10 text-black text-center'>Wczytywanie danych...</p>
			</section>
		)
	}

	return (
		<section className='container py-20'>
			<SectionTitle title='Moje pracownicy' />
			<SearchInput onSearch={handleSearch} />
			<div>
				<Button onClick={exportToXLS} className='ml-0 mt-4'>
					Eksport do XLS
				</Button>
			</div>
			<div className='flex flex-row justify-around flex-wrap gap-y-5 gap-x-2 mt-4'>
				{filteredEmployees.length > 0 ? (
					filteredEmployees.map(employee => (
						<EmployeeItem
							key={employee._id}
							name={employee.name}
							surname={employee.surname}
							gender={employee.gender}
							age={employee.age}
							nationality={employee.nationality}
							hoursWorked={employeeWorkTimes[employee._id] || 0}
							handleDelete={() => handleDelete(employee)}
							handleEdit={() => handleEdit(employee)}
							handleOpenCalendar={() => handleOpenCalendar(employee)}
						/>
					))
				) : (
					<p className='w-full mt-10 text-black text-center'>Brak pracowników!</p>
				)}
			</div>
		</section>
	)
}

export default Employees
