'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import EditEmployeeForm from '@components/Forms/EmployeeForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function EditEmployee() {
	const [employee, setEmployee] = useState({
		name: '',
		surname: '',
		age: 0,
		gender: '',
		nationality: '',
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const searchParams = useSearchParams()
	const employeeId = searchParams.get('id')

	const editEmployee = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!employee.name || !employee.surname || !employee.age || !employee.gender || !employee.nationality) {
			setError('Wypełnij wszystkie pola formularza!')
			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch(`/api/employee/${employeeId}`, {
				method: 'PATCH',
				body: JSON.stringify({
					name: employee.name,
					surname: employee.surname,
					age: employee.age,
					gender: employee.gender,
					nationality: employee.nationality,
				}),
			})

			if (response.ok) {
				toast.success('Pomyślnie zaktualizowano dane pracownika!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/employees')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	useEffect(() => {
		const getEmployeeDetails = async () => {
			const response = await fetch(`/api/employee/${employeeId}`)
			const data = await response.json()

			setEmployee({
				...employee,
				name: data.name,
				surname: data.surname,
				age: data.age,
				gender: data.gender,
				nationality: data.nationality,
			})
		}

		if (employeeId) getEmployeeDetails()
	}, [employeeId])

	return (
		<section className='container py-20'>
			<EditEmployeeForm type={'EDIT'} employee={employee} setEmployee={setEmployee} submitting={submitting} handleSubmit={editEmployee} error={error} />
		</section>
	)
}

export default EditEmployee
