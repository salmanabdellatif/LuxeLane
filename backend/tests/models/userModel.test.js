import mongoose from 'mongoose'
import User from '../../models/User'

describe('User Model', () => {
  beforeAll(async () => {})

  afterAll(async () => {})

  it('should create and save a user successfully', async () => {
    const userData = {
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
    }
    const user = new User(userData)
    const savedUser = await user.save()
    expect(savedUser._id).toBeDefined()
    expect(savedUser.email).toBe(userData.email)
  })
})
