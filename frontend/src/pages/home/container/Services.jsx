import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { RiCustomerServiceLine } from 'react-icons/ri'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'

const Services = () => {
  return (
    <div className='container mx-auto px-5 md:px-12 flex justify-evenly items-center py-12 flex-col md:flex-row gap-6'>
      <div className='flex flex-col items-center'>
        <div className='flex justify-center items-center bg-black w-12 h-12 rounded-full border-4 border-[#bdbdbd] mb-4'>
          <TbTruckDelivery className='text-white w-6 h-6' />
        </div>
        <p className='font-semibold'>FREE AND FAST DELIVERY</p>
        <span className='text-xs'>Free delivery for all orders over $140</span>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex justify-center items-center bg-black w-12 h-12 rounded-full border-4 border-[#bdbdbd] mb-4'>
          <RiCustomerServiceLine className='text-white w-6 h-6' />
        </div>
        <p className='font-semibold'>24/7 CUSTOMER SERVICE</p>
        <span className='text-xs'>Friendly 24/7 customer support</span>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex justify-center items-center bg-black w-12 h-12 rounded-full border-4 border-[#bdbdbd] mb-4'>
          <IoShieldCheckmarkOutline className='text-white w-6 h-6' />
        </div>
        <p className='font-semibold'>MONEY BACK GUARANTEE</p>
        <span className='text-xs'>We reurn money within 30 days</span>
      </div>
    </div>
  )
}

export default Services
