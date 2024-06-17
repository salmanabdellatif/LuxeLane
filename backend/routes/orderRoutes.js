import express from 'express'
import {
  createOrder,
  getUserOrders,
  updateOrder,
  getAllOrdersForAdmin,
} from '../controllers/orderControlers.js'
import { auth, isAdmin } from '../middleWare/authentication.js'

const router = express.Router()

router.post('/', auth, createOrder)
router.put('/:id', auth, isAdmin, updateOrder)
router.get('/', auth, getUserOrders)
router.get('/admin', auth, isAdmin, getAllOrdersForAdmin)

export default router
