import request from 'supertest'
import app from '../../server'

describe('User Controller', () => {
  beforeAll(async () => {})

  afterAll(async () => {})

  describe('POST /api/users/register', () => {
    it('should register a new user', async () => {
      const newUser = {
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
      }
      const response = await request(app)
        .post('/api/users/register')
        .send(newUser)
      expect(response.status).toBe(201)
      expect(response.body.email).toBe(newUser.email)
    })
  })

  describe('POST /api/users/login', () => {
    it('should login an existing user', async () => {
      const userCredentials = {
        email: 'testuser@example.com',
        password: 'password123',
      }
      const response = await request(app)
        .post('/api/users/login')
        .send(userCredentials)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('token')
    })
  })
})
