import Comment from '../models/comment.js'

const addComment = async (req, res, next) => {
  try {
    const user_id = req.user._id
    const { product_id, comment } = req.body
    const newComment = new Comment({ product_id, user_id, comment })
    await newComment.save()
    res
      .status(201)
      .json({ message: 'Comment added successfully', comment: newComment })
  } catch (error) {
    next(error)
  }
}
const getAllCommentsForProduct = async (req, res, next) => {
  try {
    const { product_id } = req.params

    const comments = await Comment.find({ product_id })

    res.status(200).json({ comments })
  } catch (error) {
    next(error)
  }
}
export { addComment, getAllCommentsForProduct }
