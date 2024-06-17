import mongoose from 'mongoose'
const { Schema } = mongoose

const discountSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['percentage', 'fixed'],
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  usage_limit: {
    type: Number,
    required: true,
  },
})

const Discount = mongoose.model('Discount', discountSchema)

export default Discount
