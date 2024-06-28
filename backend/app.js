import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import connectDB from './db/connect.js'
import errorHandlerMiddleware from './middleWare/error-handler.js'
import notFoundMiddleware from './middleWare/not-found.js'

// Routes
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import favoriteProductRoutes from './routes/favotriteProductsRoutes.js'
import addressRoutes from './routes/addressRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import commentRoutes from './routes/commentRoutes.js'
import discountRoutes from './routes/discountRoutes.js'
import creditCardRoutes from './routes/creditCardRoutes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

connectDB()

app.get('/', (req, res) => {
  res.send('server is running...')
})

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/favorite-list', favoriteProductRoutes)
app.use('/api/addresses', addressRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/discounts', discountRoutes)
app.use('/api/creditCards', creditCardRoutes)

// error handler middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
