import React from 'react'
import { SlScreenSmartphone } from 'react-icons/sl'
import { RiComputerLine } from 'react-icons/ri'
import { BsSmartwatch } from 'react-icons/bs'
import { CiCamera, CiHeadphones } from 'react-icons/ci'
import { IoGameControllerOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Categories = () => {
  // temp data
  const categoriesList = [
    {
      _id: '0010',
      name: 'Phones',
      logo: <SlScreenSmartphone className=' w-12 h-12' />,
    },
    {
      _id: '0020',
      name: 'Computers',
      logo: <RiComputerLine className=' w-12 h-12' />,
    },
    {
      _id: '0030',
      name: 'SmartWatch',
      logo: <BsSmartwatch className=' w-12 h-12' />,
    },
    {
      _id: '0040',
      name: 'Camera',
      logo: <CiCamera className=' w-12 h-12' />,
    },
    {
      _id: '0050',
      name: 'HeadPhones',
      logo: <CiHeadphones className=' w-12 h-12' />,
    },
    {
      _id: '0060',
      name: 'Gaming',
      logo: <IoGameControllerOutline className=' w-12 h-12' />,
    },
  ]
  return (
    <div className='container mx-auto px-3 md:px-8 py-16'>
      <div className='flex items-center justify-start gap-3 py-4 my-6'>
        <div className='w-4 h-8 bg-mainRed rounded-sm'></div>
        <div className='font-semibold text-mainRed'>Categories</div>
      </div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-lg md:text-3xl whitespace-nowrap'>
          Browse By Category
        </h2>
        <button className='text-white bg-mainRed rounded-md whitespace-nowrap md:px-4 md:py-2 px-3 py-2 text-xs md:text-sm'>
          All Categories
        </button>
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 my-5'>
        {categoriesList.map((category, i) => (
          <Link
            to={`category/${category._id}`}
            className='flex flex-col items-center justify-center gap-2 border border-black border-opacity-40 rounded-md p-5 hover:border-none hover:bg-black hover:bg-opacity-20 transition-all duration-300 cursor-pointer'
            key={i}>
            {category.logo}
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
