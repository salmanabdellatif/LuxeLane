import mongoose from 'mongoose'

const creditCardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cardholderName: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expiryMonth: { type: String, required: true },
  expiryYear: { type: String, required: true },
  cvv: { type: String, required: true },
})

const CreditCard = mongoose.model('CreditCard', creditCardSchema)

export default CreditCard
