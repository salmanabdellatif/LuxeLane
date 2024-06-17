import Order from '../models/order.js'

const createOrder = async (req, res, next) => {
  try {
    const userId = req.user._id
    const { products, totalPrice, address } = req.body

    if (!Array.isArray(products) || products.length === 0) {
      return res
        .status(400)
        .json({ error: 'Please provide at least one product' })
    }

    const newOrder = new Order({
      user_id: userId,
      products,
      totalPrice,
      address,
      status: 'preparing',
    })

    const savedOrder = await newOrder.save()

    res.status(201).json({ order: savedOrder })
  } catch (error) {
    next(error)
  }
}
const updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id
    const updates = req.body

    const order = await Order.findById(orderId)

    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }

    Object.assign(order, updates)

    const updatedOrder = await order.save()

    res.status(200).json({ order: updatedOrder })
  } catch (error) {
    next(error)
  }
}
const getUserOrders = async (req, res, next) => {
  console.log('user')
  try {
    const orders = await Order.find({ user_id: req.user._id }).populate({
      path: 'products.product_id',
      select: 'name mainPrice',
    })

    res.status(200).json({ orders })
  } catch (error) {
    next(error)
  }
}
const getAllOrdersForAdmin = async (req, res, next) => {
  console.log('admin')
  try {
    const orders = await Order.find()

    res.status(200).json({ orders })
  } catch (error) {
    next(error)
  }
}

export { createOrder, updateOrder, getUserOrders, getAllOrdersForAdmin }
