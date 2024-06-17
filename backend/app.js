import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db/connect.js'
import errorHandlerMiddleware from './middleWare/error-handler.js'
import notFoundMiddleware from './middleWare/not-found.js'

// Routes
import orderRoutes from './routes/orderRoutes.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import discountRoutes from './routes/discountRoutes.js'
import creditCardRoutes from './routes/creditCardRoutes.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.get('/', (req, res) => {
  res.send('server is running...')
})
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/products', productRoutes)
app.use('/api/discounts', discountRoutes)
app.use('/api/creditCards', creditCardRoutes)

// error handler middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
