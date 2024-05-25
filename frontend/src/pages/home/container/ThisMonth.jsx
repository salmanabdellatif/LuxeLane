import React from 'react'
import images from '../../../constants/images'
import ProductCard from '../../../components/ProductCard'

const ThisMonth = () => {
  // temp data
  const ProductsTempData = [
    {
      name: 'The north coat',
      mainPrice: 360,
      salePrice: 360,
      img: images.Product5,
      rate: 1,
      rateNumber: 65,
      _id: '001',
    },
    {
      name: 'Gucci duffle bag',
      mainPrice: 1160,
      salePrice: 1160,
      img: images.Product6,
      rate: 0.9,
      rateNumber: 65,
      _id: '002',
    },
    {
      name: 'RGB liquid CPU Cooler',
      mainPrice: 460,
      salePrice: 460,
      img: images.Product7,
      rate: 0.8,
      rateNumber: 78,
      _id: '003',
    },
    {
      name: 'Small BookSelf',
      mainPrice: 360,
      salePrice: 360,
      img: images.Product8,
      rate: 0.73,
      rateNumber: 75,
      _id: '004',
    },
  ]
  return (
    <div className='container mx-auto px-3 md:px-8 py-16'>
      <div className='flex items-center justify-start gap-3 py-4 my-6'>
        <div className='w-4 h-8 bg-mainRed rounded-sm'></div>
        <div className='font-semibold text-mainRed'>This Month</div>
      </div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-lg md:text-3xl whitespace-nowrap'>
          Best Selling Products
        </h2>
        <button className='text-white bg-mainRed rounded-md whitespace-nowrap md:px-4 md:py-2 px-3 py-2 text-xs md:text-sm'>
          View All
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6'>
        {ProductsTempData.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ThisMonth
