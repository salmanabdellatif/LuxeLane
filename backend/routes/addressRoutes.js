import express from 'express'
import {
  addAddress,
  getAllAddresses,
  deleteAddress,
} from '../controllers/addressControllers.js'
import { auth } from '../middleWare/authentication.js'

const router = express.Router()

router.post('/', auth, addAddress)
router.delete('/:addressId', auth, deleteAddress)
router.get('/', auth, getAllAddresses)

export default router
