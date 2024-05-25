import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import { FaRegHeart, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { HiOutlineArrowPath } from 'react-icons/hi2'
import { TbTruckDelivery } from 'react-icons/tb'
import ProductCard from '../../components/ProductCard'

const ProductDetailsPage = () => {
  const { id: productId } = useParams()
  const productData = {
    _id: productId,
    name: 'Havic HV G-92 Gamepad',
    category: {
      _id: '005',
      name: 'Gaming',
    },
    images: [
      images.productDetailMain,
      images.productDetail1,
      images.productDetail2,
      images.productDetail3,
      images.productDetail4,
    ],
    hasSizes: true,
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    hasColors: true,
    availableColors: ['db4444', '000000'],
    desc: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
    rate: 0.9,
    mainPrice: 192,
    rateNumber: 150,
    inStockQty: 1,
  }
  const breadCrumbsData = [
    { name: 'Home', link: '/' },
    {
      name: productData.category.name,
      link: `/category/${productData.category._id}`,
    },
    { name: productData.name, link: `/product/${productData._id}` },
  ]

  const rateArray = Array.from({ length: 5 }, (_, index) => {
    const starRating = (index + 1) * 0.2
    return productData.rate >= starRating
      ? 1
      : productData.rate >= starRating - 0.1
      ? 0.5
      : 0
  })
  const [curColor, setCurColor] = useState(productData.availableColors[0])
  const [qty, setQty] = useState(1)
  const [curSize, setCurSize] = useState(productData.availableSizes[0])
  const addToCartHandler = () => {}
  const addToFavoriteHandler = () => {}
  const ProductsTempData = [
    {
      name: 'HAVIT HV-G92 Gamepad',
      mainPrice: 160,
      discound: 0.4,
      salePrice: 96,
      img: images.Product1,
      rate: 1,
      rateNumber: 88,
      _id: '001',
    },
    {
      name: 'AK-900 Wired Keyboard',
      mainPrice: 1160,
      discound: 0.35,
      salePrice: 754,
      img: images.Product2,
      rate: 0.8,
      rateNumber: 75,
      _id: '002',
    },
    {
      name: 'IPS LCD Gaming Monitor',
      mainPrice: 400,
      discound: 0.3,
      salePrice: 280,
      img: images.Product3,
      rate: 1,
      rateNumber: 99,
      _id: '003',
    },
    {
      name: 'S-Series Comfort Chair ',
      mainPrice: 400,
      discound: 0.25,
      salePrice: 300,
      img: images.Product4,
      rate: 0.9,
      rateNumber: 85,
      _id: '004',
    },
  ]
  return (
    <MainLayout>
      <div className='container mx-auto mb-16'>
        <div className='px-3 md:p-0'>
          <BreadCrumbs data={breadCrumbsData} />
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='flex justify-between md:w-7/12 gap-3 '>
            <div className='flex flex-col gap-y-2 w-1/5'>
              {productData.images.slice(1).map((img, i) => (
                <div
                  key={i}
                  className='flex justify-center items-center bg-[#e6e6e6aa] rounded-sm p-3'>
                  <img
                    src={img}
                    className='object-cover'
                    alt='product gallery'
                  />
                </div>
              ))}
            </div>
            <div className='w-4/5 flex justify-center items-center rounded-sm bg-[#e6e6e6aa]'>
              <img src={productData.images[0]} alt='main img' />
            </div>
          </div>
          <div className='px-5 md:px-8 my-10 md:my-0 space-y-3 md:w-5/12'>
            <h1 className='font-semibold text-lg'>{productData.name}</h1>
            <p className='flex gap-2 items-center text-sm'>
              <div className='flex items-center gap-2'>
                {rateArray.map((rate, i) =>
                  rate > 0.7 ? (
                    <FaStar className='text-[#FFAD33]' key={i} />
                  ) : rate < 0.3 ? (
                    <FaRegStar className='text-[#FFAD33]' key={i} />
                  ) : (
                    <FaStarHalfAlt className='text-[#FFAD33]' key={i} />
                  )
                )}
              </div>
              <span className='text-[#a7a7a7]'>
                ({productData.rateNumber}{' '}
                {`Review${productData.rateNumber > 1 ? 's' : ''}`})
              </span>
              |
              {productData.inStockQty > 3 ? (
                <span className='text-[#00FF66]'>in stock</span>
              ) : productData.inStockQty <= 3 && productData.inStockQty > 0 ? (
                <span className='text-[#FFAD33]'>
                  last {productData.inStockQty}
                </span>
              ) : productData.inStockQty === 0 ? (
                <span className='text-mainRed'>No Available</span>
              ) : (
                ''
              )}
            </p>
            <p className='text-lg font-semibold'>${productData.mainPrice}</p>
            <p className='text-sm'>{productData.desc}</p>
            <hr />
            <div className='flex gap-x-2 items-center'>
              <h2>Colors: </h2>
              {productData.hasColors &&
                productData.availableColors.map((color, i) => (
                  <div
                    key={i}
                    onClick={() => setCurColor(color)}
                    className={`w-5 h-5 rounded-full cursor-pointer ${
                      curColor === color ? 'border-2 border-[#c7c7c7]' : ''
                    }`}
                    style={{ backgroundColor: `#${color}` }}></div>
                ))}
            </div>
            <div className='flex gap-x-3 items-center'>
              <h2>Size: </h2>
              {productData.hasSizes &&
                productData.availableSizes.map((size, i) => (
                  <div
                    key={i}
                    onClick={() => setCurSize(size)}
                    className={`flex justify-center items-center cursor-pointer border border-[#5e5e5e] w-8 h-8 rounded-md ${
                      curSize === size
                        ? 'bg-mainRed text-white border-none'
                        : ''
                    }`}>
                    {size}
                  </div>
                ))}
            </div>
            <div className='flex justify-between items-center gap-x-3 mb-6'>
              <div className='w-2/5 flex justify-between items-center border border-[#bbbbbb] rounded-md overflow-hidden'>
                <div
                  className='w-10 h-10 flex justify-center items-center border-r border-[#bbbbbb]'
                  onClick={() => setQty(prev => (prev === 1 ? prev : --prev))}>
                  <FiMinus className='w-6 h-6' />
                </div>
                <p className='font-semibold'>{qty}</p>
                <div
                  className='w-10 h-10 flex justify-center items-center border-l border-[#bbbbbb] bg-mainRed'
                  onClick={() => setQty(prev => (prev === 10 ? prev : ++prev))}>
                  <FiPlus className='w-6 h-6 text-white' />
                </div>
              </div>
              <button
                className='text-white bg-mainRed rounded-md py-2 w-2/5'
                onClick={addToCartHandler}>
                Add To Cart
              </button>
              <div
                className='border border-[#bbbbbb] rounded-md flex justify-center items-center p-1.5 cursor-pointer'
                onClick={addToFavoriteHandler}>
                <FaRegHeart className='w-6 h-6' />
              </div>
            </div>
            <div className='rounded-md border border-[#bbbbbb]'>
              <div className='flex items-center gap-x-3 p-3'>
                <TbTruckDelivery className='w-9 h-9' />
                <div>
                  <p>Free Delivery</p>
                  <a href='/' className='text-xs text-black'>
                    Enter your postal code for Delivery Availability
                  </a>
                </div>
              </div>
              <hr />
              <div className='flex items-center gap-x-3 p-3'>
                <HiOutlineArrowPath className='w-9 h-9' />
                <div>
                  <p>Return Delivery</p>
                  <a href='/' className='text-xs text-black'>
                    Free 30 Days Delivery Returns. Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-3 md:px-8 py-16'>
        <div className='flex items-center justify-start gap-3 py-4 my-6'>
          <div className='w-4 h-8 bg-mainRed rounded-sm'></div>
          <div className='font-semibold text-mainRed'>Related Items</div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6'>
          {ProductsTempData.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default ProductDetailsPage
