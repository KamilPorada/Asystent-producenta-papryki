'use client'
import { useState, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AddEmployeeForm from '@components/Forms/EmployeeForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function NewEmployeePage() {
	const [employee, setEmployee] = useState({
		name: '',
		surname: '',
		gender: '',
		age: 0,
		nationality: '',
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const addEmployee = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!employee.name || !employee.surname || !employee.gender || !employee.age || !employee.nationality) {
			setError('Wypełnij wszystkie pola formularza!')
			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch('/api/employee/new', {
				method: 'POST',
				body: JSON.stringify({
					userId: userId,
					name: employee.name,
					surname: employee.surname,
					gender: employee.gender,
					age: employee.age,
					nationality: employee.nationality,
				}),
			})
			setError('')
			if (response.ok) {
				toast.success('Pomyślnie utworzono nowego pracownika!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/employees')
			} else {
				throw new Error('Błąd podczas dodawania pracownika')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className='container py-20'>
			<AddEmployeeForm type={'ADD'} employee={employee} setEmployee={setEmployee} submitting={submitting} handleSubmit={addEmployee} error={error} />
		</section>
	)
}

export default NewEmployeePage
