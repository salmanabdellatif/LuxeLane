import Product from '../models/product.js'
import { uploadPicture } from '../utils/uploadPicture.js'

const createProduct = (req, res, next) => {
  const upload = uploadPicture.array('productImgs')

  upload(req, res, async function (err) {
    try {
      if (err) {
        return res
          .status(500)
          .json('An unknown error occurred when uploading: ' + err.message)
      }

      if (!req.files || req.files.length === 0) {
        return res.status(400).json('Please provide images')
      }

      const productData = req.body
      productData.images = req.files.map(file => file.filename)

      const newProduct = await Product.create(productData)
      res.status(201).json(newProduct)
    } catch (error) {
      next(error)
    }
  })
}
const getAllProducts = async (req, res, next) => {
  try {
    const { keyword, minPrice, maxPrice } = req.query

    let where = {}

    if (keyword) {
      where.name = { $regex: keyword, $options: 'i' }
    }

    // Add price range filtering
    if (minPrice && maxPrice) {
      where.mainPrice = {
        $gte: parseFloat(minPrice),
        $lte: parseFloat(maxPrice),
      }
    } else if (minPrice) {
      where.mainPrice = { $gte: parseFloat(minPrice) }
    } else if (maxPrice) {
      where.mainPrice = { $lte: parseFloat(maxPrice) }
    }

    // Find products with the constructed filters
    const products = await Product.find(where)

    res.status(200).json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
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
