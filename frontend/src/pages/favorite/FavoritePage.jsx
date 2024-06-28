import React from 'react'
import MainLayout from '../../components/MainLayout'
import images from '../../constants/images'
import ProductCard from '../../components/ProductCard'

const FavoritePage = () => {
  const suggestedProducts = [
    {
      name: 'Breed Dry Dog Food',
      mainPrice: 100,
      salePrice: 100,
      img: images.Product9,
      rate: 6,
      rateNumber: 35,
      _id: '001',
      isFavorite: false,
      isNew: true,
    },
    {
      name: 'CANON EOS DSLR Camera',
      mainPrice: 360,
      salePrice: 360,
      img: images.Product10,
      rate: 0.9,
      rateNumber: 65,
      _id: '002',
      isFavorite: false,
    },
    {
      name: 'ASUS FHD Gaming Laptop',
      mainPrice: 1160,
      salePrice: 960,
      discound: 0.35,
      img: images.Product11,
      rate: 0.8,
      rateNumber: 78,
      _id: '003',
      isFavorite: false,
    },
    {
      name: 'Curology Product Set ',
      mainPrice: 500,
      salePrice: 500,
      img: images.Product12,
      rate: 0.73,
      rateNumber: 75,
      _id: '004',
      isFavorite: false,
    },
  ]
  const favoriteList = [
    {
      name: 'Breed Dry Dog Food',
      mainPrice: 100,
      salePrice: 100,
      img: images.Product9,
      rate: 6,
      rateNumber: 35,
      _id: '001',
      isFavorite: true,
    },
    {
      name: 'CANON EOS DSLR Camera',
      mainPrice: 360,
      salePrice: 360,
      img: images.Product10,
      rate: 0.9,
      rateNumber: 65,
      _id: '002',
      isFavorite: true,
    },
    {
      name: 'ASUS FHD Gaming Laptop',
      mainPrice: 760,
      salePrice: 760,
      img: images.Product11,
      rate: 0.8,
      rateNumber: 78,
      _id: '003',
      isFavorite: true,
    },
    {
      name: 'Curology Product Set ',
      mainPrice: 500,
      salePrice: 500,
      img: images.Product12,
      rate: 0.73,
      rateNumber: 75,
      _id: '004',
      isFavorite: true,
    },
  ]
  const allToCartHandler = () => {}
  return (
    <MainLayout>
      <div className='container mx-auto px-8 py-16'>
        <div className='flex items-center justify-between py-4 my-6'>
          <div className='font-semibold text-xl'>
            Wishlist ({favoriteList.length})
          </div>
          <button
            onClick={allToCartHandler}
            className='rounded-md font-semibold border border-[#464646] whitespace-nowrap md:px-4 md:py-2 text-sm px-2 py-1 md:text-sm hover:bg-black hover:bg-opacity-20 transition-all duration-300'>
            Move All To Cart
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6'>
          {favoriteList.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div className='container mx-auto px-8 py-16'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center justify-start gap-3 py-4 my-6'>
            <div className='w-4 h-8 bg-mainRed rounded-sm'></div>
            <div className='font-semibold text-lg'>Just For You</div>
          </div>
          <button className='text-white bg-mainRed rounded-md whitespace-nowrap md:px-4 md:py-2 px-3 py-2 text-xs md:text-sm'>
            View All
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6'>
          {suggestedProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default FavoritePage
