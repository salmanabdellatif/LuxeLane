import mongoose from 'mongoose'

const { Schema, model } = mongoose

const CommentSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Comment = model('Comment', CommentSchema)

export default Comment
