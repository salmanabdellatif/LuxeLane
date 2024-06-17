import express from 'express'
const router = express.Router()
import {
  addCreditCard,
  getAllCreditCards,
  deleteCreditCard,
} from '../controllers/creditCardControllers.js'

import { auth } from '../middleWare/authentication.js'

router.post('/', auth, addCreditCard)

router.get('/', auth, getAllCreditCards)

router.delete('/:cardId', auth, deleteCreditCard)

export default router
