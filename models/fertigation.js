import { Schema, model, models } from 'mongoose'

const FertigationSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Użytkownik jest wymagany!'],
	},
	date: {
		type: Date,
		required: [true, 'Podanie daty jest wymagane!'],
	},
	fertilizerName: {
		type: String,
		required: [true, 'Podanie nazwy nawozu jest wymagane'],
	},
	numberOfTunnels: {
		type: Number,
		required: [true, 'Podanie liczby tuneli jest wymagane!'],
	},
	fertilizerDosePerTunnel: {
		type: Number,
		required: [true, 'Podanie dawki nawozu jest wymagane!'],
	},
	waterAmountPerTunnel: {
		type: Number,
		required: [true, 'Podanie dawki wody jest wymagane!'],
	},
})

const Fertigation = models.Fertigation || model('Fertigation', FertigationSchema)

export default Fertigation
