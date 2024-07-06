import { Schema, model, models } from 'mongoose'

const EmployeeSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Użytkownik jest wymagany!'],
	},
	name: {
		type: String,
		required: [true, 'Podanie imienia jest wymagane!'],
	},
	surname: {
		type: String,
		required: [true, 'Podanie nazwiska jest wymagane!'],
	},
	gender: {
		type: String,
		required: [true, 'Podanie płci jest wymagane!'],
	},
	age: {
		type: Number,
		required: [true, 'Podanie wieku jest wymagane!'],
	},
	nationality: {
		type: String,
		required: [true, 'Podanie narodowości jest wymagane!'],
	},
	
})

const Employee = models.Employee || model('Employee', EmployeeSchema)

export default Employee
