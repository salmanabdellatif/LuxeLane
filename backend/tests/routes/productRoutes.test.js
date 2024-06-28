import request from 'supertest'
import app from '../../server'

describe('Product Routes', () => {
  beforeAll(async () => {})

  afterAll(async () => {})

  describe('GET /api/products', () => {
    it('should return a list of products', async () => {
      const response = await request(app).get('/api/products')
      expect(response.status).toBe(200)
      expect(response.body).toBeInstanceOf(Array)
    })
  })

  describe('POST /api/products', () => {
    it('should create a new product', async () => {
      const newProduct = {
        name: 'Test Product',
        desc: 'Test Description',
        mainPrice: 100,
        category: 'Test Category',
        inStockQty: 10,
      }
      const response = await request(app).post('/api/products').send(newProduct)
      expect(response.status).toBe(201)
      expect(response.body.name).toBe(newProduct.name)
    })
  })
})
