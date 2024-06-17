import Product from '../models/product.js'

const createProduct = async (req, res, next) => {
  try {
    const productData = req.body
    const newProduct = await Product.create(productData)
    res.status(201).json(newProduct)
  } catch (error) {
    next(error)
  }
}
const getAllProducts = async (req, res, next) => {
  try {
    const { keyword } = req.query

    const filter = {
      $or: [
        { name: { $regex: new RegExp(keyword, 'i') } },
        { category: { $regex: new RegExp(keyword, 'i') } },
      ],
    }

    if (minPrice && maxPrice) {
      filter.mainPrice = {
        $gte: parseFloat(minPrice),
        $lte: parseFloat(maxPrice),
      }
    } else if (minPrice) {
      filter.mainPrice = { $gte: parseFloat(minPrice) }
    } else if (maxPrice) {
      filter.mainPrice = { $lte: parseFloat(maxPrice) }
    }

    const products = await Product.find(filter)

    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}
const getProductById = async (req, res, next) => {
  try {
    const productId = req.params.id
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}
const updateProduct = async (req, res, next) => {
  try {
    const productIdToUpdate = req.params.id
    const updatedProductData = req.body

    const updatedProduct = await Product.findByIdAndUpdate(
      productIdToUpdate,
      updatedProductData,
      { new: true }
    )

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.status(200).json(updatedProduct)
  } catch (error) {
    next(error)
  }
}
const deleteProduct = async (req, res, next) => {
  try {
    const productIdToDelete = req.params.id
    const deletedProduct = await Product.findByIdAndDelete(productIdToDelete)
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.status(200).json({ message: 'Product deleted successfully' })
  } catch (error) {
    next(error)
  }
}

export {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
