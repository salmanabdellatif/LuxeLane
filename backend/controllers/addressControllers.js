import Address from '../models/address.js'

const addAddress = async (req, res, next) => {
  try {
    const userId = req.user._id
    const {
      recipient_name,
      street_address,
      city,
      state,
      postal_code,
      country,
      phone_number,
      is_default,
    } = req.body

    // If is_default is true, set all other addresses for the user to is_default: false
    if (is_default) {
      await Address.updateMany(
        { user: userId, is_default: true },
        { is_default: false }
      )
    }

    const newAddress = new Address({
      user_id: userId,
      recipient_name,
      street_address,
      city,
      state,
      postal_code,
      country,
      phone_number,
      is_default,
    })

    await newAddress.save()

    return res
      .status(201)
      .json({ message: 'Address added successfully', address: newAddress })
  } catch (error) {
    return next(error)
  }
}

const deleteAddress = async (req, res, next) => {
  try {
    const userId = req.user._id
    const { addressId } = req.params

    // Find the address by ID and ensure it belongs to the authenticated user
    const address = await Address.findOne({ _id: addressId, user_id: userId })

    if (!address) {
      return res.status(404).json({ message: 'Address not found' })
    }

    // Delete the address
    await Address.deleteOne({ _id: addressId })

    return res.status(200).json({ message: 'Address deleted successfully' })
  } catch (error) {
    return next(error)
  }
}
const getAllAddresses = async (req, res, next) => {
  try {
    const userId = req.user._id

    // Find all addresses for the authenticated user
    const addresses = await Address.find({ user_id: userId })

    if (!addresses.length) {
      return res.status(404).json({ message: 'No addresses found' })
    }

    return res.status(200).json(addresses)
  } catch (error) {
    return next(error)
  }
}

export { addAddress, getAllAddresses, deleteAddress }
