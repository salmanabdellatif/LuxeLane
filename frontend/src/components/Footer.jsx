import React from 'react'
import { FaRegCopyright } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  const copyRightYear = new Date().getFullYear().toString()
  return (
    <div className='bg-black bg-opacity-95 w-full'>
      <div className='container mx-auto px-8 text-white'>
        <div className='py-10 flex justify-evenly flex-col md:flex-row gap-6 md:gap-0 text-center md:text-left'>
          <div className='flex flex-col'>
            <h2 className='py-3'>Support</h2>
            <span className='text-xs py-2'>address istanbul, Turkey</span>
            <span className='text-xs py-2'>example@gmail.com</span>
            <span className='text-xs py-2'>+90-555-123-4567</span>
          </div>
          <div className='flex flex-col'>
            <h2 className='py-3'>Account</h2>
            <Link to='/profile/:id' className='text-xs  py-2'>
              My Account
            </Link>
            <Link to='/register' className='text-xs  py-2'>
              Login / Register
            </Link>
            <Link to='/cart' className='text-xs  py-2'>
              Cart
            </Link>
            <Link to='/favorite' className='text-xs  py-2'>
              Wishlist
            </Link>
          </div>
          <div className='flex flex-col'>
            <h2 className='py-3'>Quick Link</h2>
            <span className='text-xs  py-2'>Privacy Policy</span>
            <span className='text-xs  py-2'>Terms Of Use</span>
            <span className='text-xs  py-2'>FAQ</span>
            <span className='text-xs  py-2'>Contact</span>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#313131]'></div>
      <div className='container mx-auto px-8 text-[#acacac] flex justify-center items-center gap-2 py-3 text-xs md:text-sm'>
        <FaRegCopyright />
        <span>Copyright LuxeLane {copyRightYear}. All right reserved</span>
      </div>
    </div>
  )
}

export default Footer
