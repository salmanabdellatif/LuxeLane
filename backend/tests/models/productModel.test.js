import mongoose from 'mongoose'
import Product from '../../models/Product'

describe('Product Model', () => {
  beforeAll(async () => {})

  afterAll(async () => {})

  it('should create and save a product successfully', async () => {
    const productData = {
      name: 'Test Product',
      desc: 'Test Description',
      mainPrice: 100,
      category: 'Test Category',
      inStockQty: 10,
    }
    const product = new Product(productData)
    const savedProduct = await product.save()
    expect(savedProduct._id).toBeDefined()
    expect(savedProduct.name).toBe(productData.name)
  })
})
