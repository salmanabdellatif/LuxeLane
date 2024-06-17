import express from 'express'
const router = express.Router()
import {
  createDiscount,
  getAllDiscounts,
  getDiscountByCode,
  updateDiscount,
  deleteDiscount,
} from '../controllers/discountControllers.js'
import { auth, isAdmin } from '../middleWare/authentication.js'

router.post('/', auth, isAdmin, createDiscount)

router.get('/', auth, isAdmin, getAllDiscounts)

router.get('/:code', getDiscountByCode)

router.put('/:id', auth, isAdmin, updateDiscount)

router.delete('/:id', auth, isAdmin, deleteDiscount)

export default router
