import express from 'express'
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productControllers.js'
import { auth, isAdmin } from '../middleWare/authentication.js'

const router = express.Router()

router.post('/', auth, isAdmin, createProduct)
router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.put('/:id', auth, isAdmin, updateProduct)
router.delete('/:id', auth, isAdmin, deleteProduct)

export default router
