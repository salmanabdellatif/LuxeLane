import mongoose from 'mongoose'

const { Schema, model } = mongoose

const AddressSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'please provide user'],
    },
    recipient_name: {
      type: String,
    },
    street_address: {
      type: String,
      required: [true, 'please provide street'],
    },
    city: {
      type: String,
      required: [true, 'please provide city'],
    },
    state: {
      type: String,
      required: [true, 'please provide state'],
    },
    postal_code: {
      type: String,
    },
    country: {
      type: String,
      required: [true, 'please provide country'],
    },
    phone_number: {
      type: String,
      required: [true, 'please provide phone number'],
    },
    is_default: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Address = model('Address', AddressSchema)

export default Address
