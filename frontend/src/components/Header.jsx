import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { FiSearch, FiUser } from 'react-icons/fi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { CiStar } from 'react-icons/ci'
import { CiLogout } from 'react-icons/ci'
import { GoInbox } from 'react-icons/go'

const NavItemsInfo = [
  { name: 'Home', link: '/' },
  { name: 'Contact', link: '/contact' },
  { name: 'About', link: '/about' },
  { name: 'Sign Up', link: '/register' },
  { name: 'Favorite', link: '/favorite', style: 'md:hidden' },
  { name: 'Cart', link: '/cart', style: 'md:hidden' },
]
const Header = ({ user, setUser }) => {
  const [navIsVisible, setNavIsVisible] = useState(false)
  const navVisiblityHandler = () => {
    setNavIsVisible(curState => !curState)
  }
  const logoutHandler = () => {
    localStorage.removeItem('token')
    setUser(null)
    window.location.href = '/'
  }
  const location = useLocation().pathname.substring(1)
  return (
    <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
      <header className='container mx-auto px-5 py-4 flex justify-between items-center'>
        <div className='hidden md:block md:order-first'>
          <Link className='font-inter font-extrabold text-black text-xl' to='/'>
            LuxeLane
          </Link>
        </div>
        <div className='lg:hidden z-50 cursor-pointer'>
          {navIsVisible ? (
            <AiOutlineClose className='w-6 h-6' onClick={navVisiblityHandler} />
          ) : (
            <AiOutlineMenu className='w-6 h-6' onClick={navVisiblityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? 'right-0' : '-right-full'
          } transition-all duration-300 mt-[73px] lg:mt-0 bg-black bg-opacity-95 lg:bg-transparent z-[49] fixed top-0 bottom-0 w-full lg:w-auto lg:static flex lg:justify-end flex-col lg:flex-row gap-x-9 justify-center items-center`}>
          <ul className='flex gap-2 flex-col items-center gap-y-5 lg:flex-row text-white lg:text-black'>
            {NavItemsInfo.map(item => {
              if (item.name === 'Favorite' && !user) {
                return null
              }
              if (item.name === 'Sign Up' && user) {
                return null
              }
              return (
                <li key={item.name} className='relative group cursor-pointer'>
                  <Link
                    onClick={() => setNavIsVisible(prev => !prev)}
                    to={item.link}
                    className={`px-4 py-2 ${item.style}`}>
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='flex items-center gap-x-2 order-first lg:order-last mx-3'>
          <div className='relative'>
            <FiSearch className='absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-black' />
            <input
              type='text'
              placeholder='What are you looking for?'
              className='text-dark-soft placeholder:text-[#9c9c9c] focus:outline-none rounded-md p-2 pl-3 min-w-[270px] bg-[#F5F5F5]'
            />
          </div>
          <div className='mx-2 hidden md:block'>
            <Link to='/favorite'>
              <FaRegHeart className='w-6 h-6 text-black' />
            </Link>
          </div>
          <div className='mx-2 hidden md:block'>
            <Link to='/cart'>
              <FiShoppingCart className='w-6 h-6 text-black' />
            </Link>
          </div>
          {user && (
            <div className='mx-2 hidden md:block relative group'>
              <Link to='/profile'>
                <FiUser
                  className={`${
                    location === 'profile'
                      ? 'bg-mainRed text-white'
                      : 'hover:bg-mainRed hover:text-white'
                  } w-8 h-8 text-black rounded-full p-1 transition-all duration-300`}
                />
              </Link>
              <ul className='backdrop-blur-md bg-white/30 absolute hidden rounded-md group-hover:block -right-2 overflow-hidden'>
                <Link
                  to='/profile'
                  className='flex items-center gap-x-2 hover:bg-[#dddddd] hover:bg-opacity-30 transition-all duration-300 px-3 py-2'>
                  <FiUser className='w-5 h-5' />
                  <li className=' text-sm whitespace-nowrap'>
                    Manage My Account
                  </li>
                </Link>
                <Link
                  to='/profile'
                  className='flex items-center gap-x-2 hover:bg-[#dddddd] hover:bg-opacity-30 transition-all duration-300 px-3 py-2'>
                  <GoInbox className='w-5 h-5' />
                  <li className=' text-sm whitespace-nowrap'>My Orders</li>
                </Link>
                <Link
                  to='/profile'
                  className='flex items-center gap-x-2 hover:bg-[#dddddd] hover:bg-opacity-30 transition-all duration-300 px-3 py-2'>
                  <IoIosCloseCircleOutline className='w-5 h-5' />
                  <li className=' text-sm whitespace-nowrap'>
                    My Cancellations
                  </li>
                </Link>
                <Link
                  to='/profile'
                  className='flex items-center gap-x-2 hover:bg-[#dddddd] hover:bg-opacity-30 transition-all duration-300 px-3 py-2'>
                  <CiStar className='w-5 h-5' />
                  <li className=' text-sm whitespace-nowrap'>My Reviews</li>
                </Link>
                <Link
                  to='/'
                  onClick={logoutHandler}
                  className='flex items-center gap-x-2 hover:bg-[#dddddd] hover:bg-opacity-30 transition-all duration-300 px-3 py-2'>
                  <CiLogout className='w-5 h-5' />
                  <li className=' text-sm whitespace-nowrap'>Logout</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </header>
      <div className='h-[1px] w-full bg-[#9c9c9c] bg-opacity-40'></div>
    </section>
  )
}

export default Header
