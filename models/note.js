import { Schema, model, models } from 'mongoose'

const NoteSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Użytkownik jest wymagany!'],
	},
	date: {
		type: String,
		required: [true, 'Podanie daty jest wymagane!'],
	},
	title: {
		type: String,
		required: [true, 'Podanie tytułu notatki jest wymagane!'],
	},
	content: {
		type: String,
		required: [true, 'Podanie treści notatki jest wymagane!'],
	},
})

const Note = models.Note || model('Note', NoteSchema)

export default Note
