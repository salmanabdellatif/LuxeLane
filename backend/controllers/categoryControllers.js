import Category from '../models/category.js'

const createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body

    const user_id = req.user._id

    const newCategory = new Category({
      name,
      description,
      user_id,
    })

    const savedCategory = await newCategory.save()

    res.status(201).json({ category: savedCategory })
  } catch (error) {
    return next(error)
  }
}
const updateCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body
    const categoryId = req.params.id

    let category = await Category.findById(categoryId)

    if (!category) {
      return res.status(404).json({ error: 'Category not found' })
    }

    category.name = name || category.name
    category.description = description || category.description

    const updatedCategory = await category.save()

    res.status(200).json({ category: updatedCategory })
  } catch (error) {
    next(error)
  }
}
const deleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.id

    let category = await Category.findById(categoryId)

    if (!category) {
      return res.status(404).json({ error: 'Category not found' })
    }

    await category.deleteOne({ _id: categoryId })

    res.status(200).json({ message: 'Category deleted successfully' })
  } catch (error) {
    next(error)
  }
}
const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find()

    res.status(200).json({ categories })
  } catch (error) {
    next(error)
  }
}

export { createCategory, updateCategory, deleteCategory, getAllCategories }
