'use client'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { parseISO, format } from 'date-fns'
import EditNoteForm from '@components/Forms/NoteForm'

function EditNote() {
	const [note, setNote] = useState({
		date: '',
		title: '',
		content: '',
	})
	const [submitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const searchParams = useSearchParams()
	const noteId = searchParams.get('id')

	const editNote = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		if (!note.title || !note.content) {
			setError('Wypełnij wszystkie pola formularza!')
			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch(`/api/note/${noteId}`, {
				method: 'PATCH',
				body: JSON.stringify({
					date: note.date,
					title: note.title,
					content: note.content,
				}),
			})

			if (response.ok) {
				router.push('/notes')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	useEffect(() => {
		const getNoteDetails = async () => {
			const response = await fetch(`/api/note/${noteId}`)
			const data = await response.json()

			setNote({
				...note,
				date: data.date,
				title: data.title,
				content: data.content,
			})
		}

		if (noteId) getNoteDetails()
	}, [noteId])

	return (
		<section className='container py-20'>
			<EditNoteForm note={note} setNote={setNote} submitting={submitting} handleSubmit={editNote} error={error} />
		</section>
	)
}

export default EditNote
