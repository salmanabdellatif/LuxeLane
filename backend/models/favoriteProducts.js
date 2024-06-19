// favoriteProduct.js
import mongoose from 'mongoose'

const { Schema } = mongoose

const FavoriteProductSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'please provide a user'],
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'please provide a product'],
      },
    ],
  },
  { timestamps: true }
)

const FavoriteProduct = mongoose.model('FavoriteProduct', FavoriteProductSchema)

export default FavoriteProduct
