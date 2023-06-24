import { Schema, model, models } from 'mongoose';

const PointOfSaleSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Użytkownik jest wymagany!'],
  },
  name: {
    type: String,
    required: [true, 'Nazwa jest wymagana!'],
  },
  address: {
    type: String,
    required: [true, 'Adres jest wymagany!'],
  },
  type: {
    type: String,
    required: [true, 'Typ punktu sprzedaży jest wymagany!'],
  },
  latitude: {
    type: Number,
    required: [true, 'Szerokość geograficzna jest wymagana!'],
  },
  longitude: {
    type: Number,
    required: [true, 'Długość geograficzna jest wymagana!'],
  },
});

const PointOfSale = models.PointOfSale || model('PointOfSale', PointOfSaleSchema);

export default PointOfSale;
