import express from 'express'
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
} from '../controllers/categoryControllers.js'
import { auth, isAdmin } from '../middleWare/authentication.js'

const router = express.Router()

router.post('/', auth, isAdmin, createCategory)
router.put('/:id', auth, isAdmin, updateCategory)
router.delete('/:id', auth, isAdmin, deleteCategory)
router.get('/', getAllCategories)

export default router
