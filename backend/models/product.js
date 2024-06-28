import mongoose from 'mongoose'

const { Schema } = mongoose

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'please provide name'],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'please provide category'],
  },
  images: {
    type: [String],
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    min: 0,
    max: 1,
    default: 0,
  },
  mainPrice: {
    type: Number,
    required: true,
  },
  rateNumber: {
    type: Number,
    default: 0,
  },
  inStockQty: {
    type: Number,
    default: 0,
  },
})

const Product = mongoose.model('Product', productSchema)

export default Product
