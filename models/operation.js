import { Schema, model, models } from 'mongoose'

const OperationSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Użytkownik jest wymagany!'],
	},
	date: {
		type: Date,
		required: [true, 'Podanie daty jest wymagane!'],
	},
	time: {
		type: String,
		required: [true, 'Podanie czasu rozpoczącia zabiegu jest wymagane!'],
	},
	pesticideType: {
		type: Number,
		required: [true, 'Podanie rodzaju pestycydu jest wymagane!'],
	},
	pesticideName: {
		type: String,
		required: [true, 'Podanie nazwy pestycydu jest wymagane!'],
	},
	pesticideDose: {
		type: Number,
		required: [true, 'Podanie dawki pestycydu jest wymagane!'],
	},
	liquidAmount: {
		type: Number,
		required: [true, 'Podanie ilości cieczy roboczej jest wymagane!'],
	},
	waitingTime: {
		type: Number,
		required: [true, 'Podanie czasu karencji jest wymagane!'],
	},
	waitingTimeDate: {
		type: Date,
		required: [true, 'Podanie daty zakończenia karencji jest wymagane!'],
	},
	status: {
		type: Boolean,
		required: [true, 'Podanie statusu zabiegu cheminizacyjnego jest wymagane!'],
	},
})

const Operation = models.Operation || model('Operation', OperationSchema)

export default Operation
