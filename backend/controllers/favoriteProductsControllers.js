import FavoriteProduct from '../models/favoriteProducts.js'

const addFavoriteProduct = async (req, res, next) => {
  try {
    const userId = req.user._id
    const { productId } = req.body
    let favoriteProduct = await FavoriteProduct.findOne({ user: userId })

    if (favoriteProduct) {
      if (favoriteProduct.products.includes(productId)) {
        return res.status(400).json({ message: 'Product already in favorites' })
      }
      favoriteProduct.products.push(productId)
      await favoriteProduct.save()
    } else {
      favoriteProduct = new FavoriteProduct({
        user: userId,
        products: [productId],
      })
      await favoriteProduct.save()
    }

    const newFavoriteProduct = new FavoriteProduct({
      user: userId,
      products: [productId],
    })
    await newFavoriteProduct.save()

    return res
      .status(201)
      .json({ message: 'Product added to favorites successfully' })
  } catch (error) {
    return next(error)
  }
}
const getAllFavProducts = async (req, res, next) => {
  try {
    const userId = req.user._id

    const favoriteProduct = await FavoriteProduct.findOne({
      user: userId,
    }).populate('products')

    if (!favoriteProduct) {
      return res
        .status(404)
        .json({ message: 'you do not have favorite products' })
    }

    return res.status(200).json(favoriteProduct.products)
  } catch (error) {
    return next(error)
  }
}
const removeFavoriteProduct = async (req, res, next) => {
  try {
    const userId = req.user._id
    const { productId } = req.body
    const favoriteProduct = await FavoriteProduct.findOne({ user: userId })
    if (!favoriteProduct) {
      return res.status(404).json({ message: 'Favorite products not found' })
    }
    if (!favoriteProduct.products.includes(productId)) {
      return res.status(404).json({ message: 'Product not found in favorites' })
    }
    favoriteProduct.products.pull(productId)
    await favoriteProduct.save()
    return res
      .status(200)
      .json({ message: 'Product removed from favorites successfully' })
  } catch (error) {
    return next(error)
  }
}

export { addFavoriteProduct, getAllFavProducts, removeFavoriteProduct }
