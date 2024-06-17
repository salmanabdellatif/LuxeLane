import mongoose, { model } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxlength: 30,
      minlength: 3,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      maxlength: 50,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
    },
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }], // Corrected
    phone: {
      type: String,
      match: [/^\d{10,15}$/, 'Please provide a valid phone number'],
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})
UserSchema.pre('save', function (next) {
  if (!this.username && this.name) {
    this.username = `${this.name.toLowerCase()}${new Date()}`
  }
  next()
})
UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  )
}
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
const User = model('User', UserSchema)
export default User
