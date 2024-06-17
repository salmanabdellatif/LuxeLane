import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json('Authentication invalid')
  }
  const token = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(payload.userId).select('-password')
    next()
  } catch (error) {
    return res.status(401).json('Authentication invalid')
  }
}
const isAdmin = (req, res, next) => {
  if (req.user && req.user.admin) {
    next()
  } else {
    return res
      .status(403)
      .json({ message: 'Unauthorized: Admin access required' })
  }
}
export { auth, isAdmin }
