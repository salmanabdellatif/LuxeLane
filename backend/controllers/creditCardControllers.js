import CreditCard from '../models/creditCard.js'
import User from '../models/user.js'

const addCreditCard = async (req, res, next) => {
  try {
    const userId = req.user._id
    const { cardholderName, cardNumber, expiryMonth, expiryYear, cvv } =
      req.body

    // Validate input
    if (!cardholderName || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // Verify the user exists
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Create a new credit card document
    const newCard = new CreditCard({
      userId,
      cardholderName,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
    })

    // Save the credit card
    await newCard.save()

    // Return success response
    res
      .status(201)
      .json({ message: 'Payment card added successfully', cardId: newCard._id })
  } catch (error) {
    next(error)
  }
}
const getAllCreditCards = async (req, res, next) => {
  try {
    const userId = req.user._id

    // Fetch all credit cards for the user
    const creditCards = await CreditCard.find({ userId })

    if (!creditCards || creditCards.length === 0) {
      return res
        .status(404)
        .json({ message: 'No credit cards found for this user' })
    }

    // Return the credit cards
    res.status(200).json(creditCards)
  } catch (error) {
    next(error)
  }
}
const deleteCreditCard = async (req, res) => {
  try {
    const userId = req.user._id
    const { cardId } = req.params

    // Find the credit card
    const creditCard = await CreditCard.findOne({ _id: cardId, userId })

    if (!creditCard) {
      return res.status(404).json({ error: 'Credit card not found' })
    }

    // Delete the credit card
    await CreditCard.deleteOne({ _id: cardId })

    // Return success response
    res.status(200).json({ message: 'Credit card deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

export { addCreditCard, getAllCreditCards, deleteCreditCard }
