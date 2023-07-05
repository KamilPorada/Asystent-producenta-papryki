import { Schema, model, models } from 'mongoose'

const TradeOfPepperSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Użytkownik jest wymagany!'],
	},
	pointOfSaleId: {
		type: String,
		required: [true, 'Podanie punktu sprzedaży jest wymagane!'],
	},
	date: {
		type: Date,
		required: [true, 'Podanie daty jest wymagane!'],
	},
	clas: {
		type: Number,
		required: [true, 'Podanie klasy papryki jest wymagane!'],
	},
	color: {
		type: Number,
		required: [true, 'Podanie koloru papryki jest wymagane!'],
	},
	price: {
		type: Number,
		required: [true, 'Podanie ceny jest wymagane!'],
	},
	weight: {
		type: Number,
		required: [true, 'Podanie wagi towaru jest wymagane!'],
	},
	vatRate: {
		type: Number,
		required: [true, 'Podanie stawki VAT jest wymagane!'],
	},
	totalSum: {
		type: Number,
		required: [true, 'Podanie sumy jest wymagane!'],
	},
})

const TradeOfPepper = models.TradeOfPepper || model('TradeOfPepper', TradeOfPepperSchema)

export default TradeOfPepper
