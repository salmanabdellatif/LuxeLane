import { Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/home/HomePage'
import RegisterPage from './pages/register/RegisterPage'
import LoginPage from './pages/login/LoginPage'
import CartPage from './pages/cart/CartPage'
import ProfilePage from './pages/profile/ProfilePage'
import DashboardPage from './pages/dashboard/DashboardPage'
import AboutPage from './pages/about/AboutPage'
import NotFound from './pages/notFound/NotFound'
import ContactPage from './pages/contact/ContactPage'
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage'
import CheckoutPage from './pages/checkout/CheckoutPage'

function App() {
  return (
    <div className='App font-poppins'>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/admin/dashboard' element={<DashboardPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/product/:id' element={<ProductDetailsPage />} />
        <Route path='/admin/dashboard' element={<DashboardPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
