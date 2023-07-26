'use client'
import { useState, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import NewNoteForm from '@components/Forms/NoteForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function NewNotePage() {
	const [note, setNote] = useState({
		date: new Date().toISOString().slice(0, 10),
		title: '',
		content: '',
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const addNote = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!note.title || !note.content) {
			setError('Wypełnij wszystkie pola formularza!')
			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch('/api/note/new', {
				method: 'POST',
				body: JSON.stringify({
					userId: userId,
					date: note.date,
					title: note.title,
					content: note.content,
				}),
			})
			setError('')
			if (response.ok) {
				toast.success('Pomyślnie utworzono nową notatkę!', {
					position: toast.POSITION.TOP_CENTER,
				})
				router.push('/notes')
			} else {
				throw new Error('Błąd podczas dodawania notatki')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className='container py-20'>
			<NewNoteForm note={note} setNote={setNote} submitting={submitting} handleSubmit={addNote} error={error} />
		</section>
	)
}

export default NewNotePage
