import express from 'express'
import {
  addComment,
  getAllCommentsForProduct,
} from '../controllers/commentControllers.js'
import { auth } from '../middleWare/authentication.js'

const router = express.Router()

router.post('/', auth, addComment)
router.get('/:product_id', getAllCommentsForProduct)

export default router
