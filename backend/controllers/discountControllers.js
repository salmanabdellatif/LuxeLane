import Discount from '../models/discount.js'

const createDiscount = async (req, res, next) => {
  try {
    const {
      code,
      description,
      type,
      value,
      start_date,
      end_date,
      is_active,
      usage_limit,
    } = req.body

    const newDiscount = new Discount({
      code,
      description,
      type,
      value,
      start_date,
      end_date,
      is_active,
      usage_limit,
    })

    await newDiscount.save()

    res.status(201).json({
      message: 'Discount added successfully',
      discount: newDiscount,
    })
  } catch (error) {
    next(error)
  }
}
const getAllDiscounts = async (req, res, next) => {
  try {
    const discounts = await Discount.find()

    res.status(200).json({
      message: 'All discounts fetched successfully',
      discounts: discounts,
    })
  } catch (error) {
    next(error)
  }
}
const getDiscountByCode = async (req, res, next) => {
  try {
    const code = req.params.code

    const discount = await Discount.findOne({ code: code })

    if (!discount) {
      return res.status(404).json({
        message: 'Discount not found',
      })
    }

    res.status(200).json({
      message: 'Discount found successfully',
      discount: discount,
    })
  } catch (error) {
    next(error)
  }
}
const updateDiscount = async (req, res, next) => {
  try {
    const { id } = req.params
    const {
      code,
      description,
      type,
      value,
      start_date,
      end_date,
      is_active,
      usage_limit,
    } = req.body

    const updatedDiscount = await Discount.findByIdAndUpdate(
      id,
      {
        code,
        description,
        type,
        value,
        start_date,
        end_date,
        is_active,
        usage_limit,
      },
      { new: true, runValidators: true }
    )

    if (!updatedDiscount) {
      return res.status(404).json({
        message: 'Discount not found',
      })
    }

    res.status(200).json({
      message: 'Discount updated successfully',
      discount: updatedDiscount,
    })
  } catch (error) {
    next(error)
  }
}
const deleteDiscount = async (req, res, next) => {
  try {
    const { id } = req.params

    const deletedDiscount = await Discount.findByIdAndDelete(id)

    if (!deletedDiscount) {
      return res.status(404).json({
        message: 'Discount not found',
      })
    }

    res.status(200).json({
      message: 'Discount deleted successfully',
      discount: deletedDiscount,
    })
  } catch (error) {
    next(error)
  }
}
export {
  createDiscount,
  getAllDiscounts,
  getDiscountByCode,
  updateDiscount,
  deleteDiscount,
}
