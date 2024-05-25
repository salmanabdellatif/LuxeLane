import React from 'react'
import ProductCard from '../../../components/ProductCard'
import images from '../../../constants/images'

const OurProducts = () => {
  // temp data
  const ProductsTempData = [
    {
      name: 'Breed Dry Dog Food',
      mainPrice: 100,
      salePrice: 100,
      img: images.Product9,
      rate: 6,
      rateNumber: 35,
      _id: '001',
    },
    {
      name: 'CANON EOS DSLR Camera',
      mainPrice: 360,
      salePrice: 360,
      img: images.Product10,
      rate: 0.9,
      rateNumber: 65,
      _id: '002',
    },
    {
      name: 'ASUS FHD Gaming Laptop',
      mainPrice: 760,
      salePrice: 760,
      img: images.Product11,
      rate: 0.8,
      rateNumber: 78,
      _id: '003',
    },
    {
      name: 'Curology Product Set ',
      mainPrice: 500,
      salePrice: 500,
      img: images.Product12,
      rate: 0.73,
      rateNumber: 75,
      _id: '004',
    },
    {
      name: 'Kids Electric Car',
      isNew: true,
      mainPrice: 100,
      salePrice: 100,
      img: images.Product13,
      rate: 6,
      rateNumber: 35,
      _id: '005',
    },
    {
      name: 'Jr. Zoom Soccer Cleats',
      mainPrice: 360,
      salePrice: 360,
      img: images.Product14,
      rate: 0.9,
      rateNumber: 65,
      _id: '006',
    },
    {
      name: 'GP11 Shooter USB Gamepad',
      isNew: true,
      mainPrice: 460,
      salePrice: 460,
      img: images.Product15,
      rate: 0.8,
      rateNumber: 78,
      _id: '007',
    },
    {
      name: 'Quilted Satin Jacket',
      mainPrice: 360,
      salePrice: 360,
      img: images.Product16,
      rate: 0.73,
      rateNumber: 75,
      _id: '008',
    },
  ]
  return (
    <div className='container mx-auto px-3 md:px-8 py-16'>
      <div className='flex items-center justify-start gap-3 py-4 my-6'>
        <div className='w-4 h-8 bg-mainRed rounded-sm'></div>
        <div className='font-semibold text-mainRed'>Our Products</div>
      </div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-lg md:text-3xl whitespace-nowrap'>
          Explore Our Products
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

export default OurProducts
