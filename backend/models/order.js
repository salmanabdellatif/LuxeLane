import mongoose from 'mongoose'

const { Schema, model } = mongoose

const OrderSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'please provide user_id'],
    },
    status: {
      type: String,
      enum: ['preparing', 'in cargo', 'received'],
      default: 'preparing',
    },
    products: [
      {
        product_id: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          min: 1,
          max: 10,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Order = model('Order', OrderSchema)

export default Order
