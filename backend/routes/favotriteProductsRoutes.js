import express from 'express'
import {
  addFavoriteProduct,
  getAllFavProducts,
  removeFavoriteProduct,
} from '../controllers/favoriteProductsControllers.js'
import { auth } from '../middleWare/authentication.js'

const router = express.Router()

router.post('/add', auth, addFavoriteProduct)
router.get('/', auth, getAllFavProducts)
router.delete('/remove', auth, removeFavoriteProduct)

export default router
