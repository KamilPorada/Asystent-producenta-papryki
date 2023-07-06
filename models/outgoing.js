import { Schema, model, models } from 'mongoose'

const OutgoingSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Użytkownik jest wymagany!'],
	},
	name: {
		type: String,
		required: [true, 'Podanie nazwy wydatku jest wymagane!'],
	},
	category: {
		type: String,
		required: [true, 'Podanie kategorii jest wymagane!'],
	},
	date: {
		type: Date,
		required: [true, 'Podanie daty jest wymagane!'],
	},
	price: {
		type: Number,
		required: [true, 'Podanie ceny wydaktku jest wymagane!'],
	},
	amount: {
		type: Number,
		required: [true, 'Podanie liczby sztuk wydatku jest wymagane'],
	},
	totalSum: {
		type: Number,
		required: [true, 'Podanie sumy jest wymagane'],
	},
	describe: {
		type: String,
		required: [true, 'Podanie opisu wydatku jest wymagane'],
	},
})

const Outgoing = models.Outgoing || model('Outgoing', OutgoingSchema)

export default Outgoing
