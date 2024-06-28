import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import images from '../../constants/images'
import axios from 'axios'

const Login = () => {
  const [errors, setErrors] = useState(null)
  const [loginData, setLoginData] = useState({ email: '', password: '' })

  const loginHandler = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://luxelane-api.vercel.app/api/users/login',
        loginData
      )

      // Extract the user token from the response
      const { token } = response.data

      // Save the user token to local storage
      localStorage.setItem('token', token)
      if (response.data.admin) {
        window.location.href = '/admin/dashboard'
      } else {
        window.location.href = '/'
      }
    } catch (error) {
      // Handle login errors
      setErrors(error.response.data)
    }
  }
  const formOnChangeHandler = e => {
    const { name, value } = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <MainLayout>
      <div className='container mx-auto flex'>
        <img
          src={images.SignUp}
          alt=''
          className=' w-1/2 object-cover hidden md:block'
        />
        <div className='flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto w-full'>
          <div className='w-2/3 space-y-8 '>
            <div>
              <h1 className='text-2xl font-semibold font-inter'>Login</h1>
            </div>
            <form className='space-y-4'>
              <div className='flex flex-col'>
                <label htmlFor='email' className='text-sm font-medium mb-2'>
                  Email
                </label>
                <input
                  onChange={formOnChangeHandler}
                  id='email'
                  name='email'
                  value={loginData.email}
                  type='text'
                  placeholder='Enter your email'
                  className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 outline-none'
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='password' className='text-sm font-medium mb-2'>
                  Password
                </label>
                <input
                  onChange={formOnChangeHandler}
                  id='password'
                  value={loginData.password}
                  name='password'
                  type='password'
                  placeholder='Enter your password'
                  className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 outline-none'
                />
              </div>
              {errors && <p className='text-mainRed text-xs'>*{errors}</p>}
              <button
                onClick={e => loginHandler(e)}
                type='submit'
                className='w-full bg-mainRed text-white rounded-md py-2 px-4'>
                Login
              </button>
              <a
                href='/google-login'
                className='w-full  text-black rounded-md py-2 px-4 whitespace-nowrap border border-[#cecece] inline-block text-center'>
                Login with Google
              </a>
              <div className='flex items-center justify-center'>
                <span className='text-xs text-gray-500 mr-2'>
                  Don't Have an Account?
                </span>
                <a
                  href='/register'
                  className='text-xs text-mainRed font-medium whitespace-nowrap'>
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Login
