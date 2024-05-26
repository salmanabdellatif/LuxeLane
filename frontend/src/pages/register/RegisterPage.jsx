import React from 'react'
import MainLayout from '../../components/MainLayout'
import images from '../../constants/images'

const RegisterPage = () => {
  const registerHandler = e => {
    e.preventDefault()
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
          <div className='w-2/3 space-y-8'>
            <div>
              <h1 className='text-2xl font-semibold text-center font-inter'>
                Create an account
              </h1>
            </div>
            <form className='space-y-4'>
              <div className='flex flex-col'>
                <label htmlFor='name' className='text-sm font-medium mb-2'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  placeholder='Enter your name'
                  className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 outline-none'
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='email' className='text-sm font-medium mb-2'>
                  Email
                </label>
                <input
                  id='email'
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
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                  className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 outline-none'
                />
              </div>
              <button
                onClick={e => registerHandler(e)}
                type='submit'
                className='w-full bg-mainRed text-white rounded-md py-2 px-4'>
                Create Account
              </button>
              <a
                href='/google-register'
                className='w-full  text-black rounded-md py-2 px-4 whitespace-nowrap border border-[#cecece] inline-block text-center'>
                Sign up with Google
              </a>
              <div className='flex items-center justify-center'>
                <span className='text-sm text-gray-500 mr-2'>
                  Already have account?
                </span>
                <a href='/login' className='text-sm text-mainRed font-medium'>
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default RegisterPage
