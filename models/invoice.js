import { Schema, model, models } from 'mongoose'

const InvoiceSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Użytkownik jest wymagany!'],
	},
	date: {
		type: Date,
		required: [true, 'Podanie daty jest wymagane!'],
	},
	invoiceNumber: {
		type: String,
		required: [true, 'Podanie numeru faktury jest wymagane!'],
	},
	totalSum: {
		type: Number,
		required: [true, 'Podanie kwoty faktury jest wymagane!'],
	},
	pointOfSale: {
		type: String,
		required: [true, 'Podanie punktu sprzedaży jest wymagane!'],
	},
	status: {
		type: Boolean,
		required: [true, 'Podanie statusu jest wymagane!'],
	},
})

const Invoice = models.Invoice || model('Invoice', InvoiceSchema)

export default Invoice
