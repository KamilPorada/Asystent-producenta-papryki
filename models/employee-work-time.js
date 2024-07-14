import { Timestamp } from 'mongodb'
import { Schema, model, models } from 'mongoose'

const EmployeeWorktimeSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Użytkownik jest wymagany!'],
	},
	employee: {
		type: Schema.Types.ObjectId,
		ref: 'Employee',
		required: [true, 'Pracownik jest wymagany!'],
	},
	date: {
		type: Date,
		required: [true, 'Podanie daty jest wymagane!'],
	},
	startTime: {
		type: String,
		required: [true, 'Podanie godziny rozpoczęcia pracy jest wymagane!'],
	},
	endTime: {
		type: String,
		required: [true, 'Podanie godziny zakończenia pracy jest wymagane!'],
	},
})

const EmployeeWorkTime = models.EmployeeWorkTime || model('EmployeeWorkTime', EmployeeWorktimeSchema)

export default EmployeeWorkTime
