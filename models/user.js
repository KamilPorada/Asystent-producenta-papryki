import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
	email: {
		type: String,
		unique: [true, 'Konto z podanym emailem już istnieje!'],
		required: [true, 'Podanie emaila jest wymagane!'],
	},
	username: {
		type: String,
		required: [true, 'Podanie nazwy użytkownika jest wymagane!'],
		match: [
			/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
			'Nazwa użytkownika jest nieprawidłowa, powinna zawierać 8-20 liter alfanumerycznych i być unikalna!',
		],
	},
	image: {
		type: String,
	},
	area:{
		type: Number,
		required: [true, 'Podanie powierzchni gospodarstwa jest wymagane!'],
	},
	numberOfTunnels:{
		type: Number,
		required: [true, 'Podanie liczby tuneli jest wymagane!'],
	},
	cityName:{
		type: String,
		required: [true, 'Podanie lokalizacji gospodarstwa jest wymagane!'],
	}
})

const User = models.User || model('User', UserSchema)

export default User
