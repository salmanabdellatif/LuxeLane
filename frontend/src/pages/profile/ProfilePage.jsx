import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import Orders from './components/manage-orders/Orders'
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md'
import Reviews from './components/manage-orders/Reviews'

const ProfilePage = () => {
  const [leftNavIsVisible, setLeftNavIsVisible] = useState(false)
  const handleLeftNav = () => {
    setLeftNavIsVisible(prev => !prev)
  }
  const userData = {
    firstName: 'John',
    lastName: ' Doe',
    email: 'johndoe@gmail.com',
    address: 'Kingston, 5236, United State',
  }
  const breadCrumbsData = [
    { name: 'Home', link: '/' },
    { name: 'My Account', link: '/profile' },
  ]
  const [section, setSection] = useState('profile')
  return (
    <MainLayout>
      <div className='container mx-auto px-5'>
        <div className='flex justify-between md:items-center flex-col md:flex-row pb-4'>
          <BreadCrumbs data={breadCrumbsData} />
          <h2>
            Welcome!
            <span className='text-mainRed font-semibold'>{` ${userData.firstName} ${userData.lastName}`}</span>
          </h2>
        </div>
        <div className='flex justify-between w-full relative gap-2'>
          <div
            className={`md:w-1/4 absolute md:static bg-black bg-opacity-95 md:bg-white transition-all duration-300 z-30 p-8 md:p-0 rounded-r-lg h-3/5 ${
              !leftNavIsVisible ? '-left-52' : '-left-5'
            }`}>
            {!leftNavIsVisible ? (
              <MdOutlineKeyboardArrowRight
                className='w-8 h-8 absolute -right-8 top-2 bg-[#bebebe] bg-opacity-50 rounded-r md:hidden'
                onClick={handleLeftNav}
              />
            ) : (
              <MdOutlineKeyboardArrowLeft
                className='w-8 h-8 absolute -right-8 top-2 bg-[#bebebe] bg-opacity-50 rounded-r md:hidden'
                onClick={handleLeftNav}
              />
            )}
            <div className='py-2'>
              <h2 className='font-semibold text-[#e5e7eb] md:text-black'>
                My Orders
              </h2>
              <ul className='pl-5' onClick={handleLeftNav}>
                <li
                  onClick={() => setSection('orders')}
                  className={`${
                    section === 'orders' ? 'text-mainRed' : 'text-[#8b8b8b]'
                  } text-sm px-2 pt-2 cursor-pointer`}>
                  My Orders
                </li>
                <li
                  onClick={() => setSection('reviews')}
                  className={`${
                    section === 'reviews' ? 'text-mainRed' : 'text-[#8b8b8b]'
                  } text-sm px-2 pt-2 cursor-pointer`}>
                  My Reviews
                </li>
              </ul>
            </div>
          </div>
          <div className='md:w-3/4 w-full mx-auto'>
            { section === 'orders' ? (
              <Orders setSection={setSection} />
            ) : (
              <Reviews />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProfilePage
