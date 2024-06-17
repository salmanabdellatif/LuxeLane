import express from 'express'
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userControllers.js'
import { auth, isAdmin } from '../middleWare/authentication.js'
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/', auth, isAdmin, getAllUsers)
router.get('/user', auth, getUser)
router.put('/updateUser/:id', auth, updateUser)
router.delete('/:id', auth, isAdmin, deleteUser)

export default router
