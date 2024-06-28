import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/home/HomePage'
import RegisterPage from './pages/register/RegisterPage'
import LoginPage from './pages/login/LoginPage'
import FavoritePage from './pages/favorite/FavoritePage'
import CartPage from './pages/cart/CartPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import ProfilePage from './pages/profile/ProfilePage'
import AboutPage from './pages/about/AboutPage'
import NotFound from './pages/notFound/NotFound'
import ContactPage from './pages/contact/ContactPage'
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage'
import DashboardPage from './pages/dashboard/DashboardPage'

function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios
        .get('https://luxelane-api.vercel.app/api/users/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          // Set the user state with the fetched user data
          setUser(response.data)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching user data:', error)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])
  return (
    <div className='App font-poppins'>
      <Routes>
        <Route
          index
          path='/'
          element={<HomePage user={user} setUser={setUser} loading={loading} />}
        />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route
          path='/product/:id'
          element={
            <ProductDetailsPage
              user={user}
              setUser={setUser}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route path='/admin/dashboard' element={<DashboardPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
