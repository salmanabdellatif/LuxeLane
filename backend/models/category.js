import mongoose from 'mongoose'

const { Schema, model } = mongoose

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a category name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Category name cannot exceed 50 characters'],
    },
    description: {
      type: String,
      maxlength: [500, 'Category description cannot exceed 500 characters'],
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

const Category = model('Category', CategorySchema)

export default Category
