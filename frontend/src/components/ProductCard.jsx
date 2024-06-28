import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar, FaStar, FaStarHalfAlt, FaRegHeart } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'

const ProductCard = ({ product }) => {
  const addToFavoriteHandler = () => {}
  const addToCartHandler = () => {}
  const removeFromFavoriteHandler = () => {}
  const rateArray = Array.from({ length: 5 }, (_, index) => {
    const starRating = (index + 1) * 0.2
    return product.rate >= starRating
      ? 1
      : product.rate >= starRating - 0.1
      ? 0.5
      : 0
  })
  return (
    <div className='p-3 rounded-md bg-[#F5F5F5] relative transition duration-300 transform hover:scale-105'>
      {product.discound && (
        <div className='absolute top-2 left-2 py-1 px-2 bg-mainRed text-white rounded-sm text-xs font-light'>
          -{product.discound * 100}%
        </div>
      )}
      {product.isNew && (
        <div className='absolute top-2 left-2 py-1 px-2 bg-[#00FF66] text-white rounded-sm text-xs font-light'>
          New
        </div>
      )}
      <div className='absolute top-2 right-2 space-y-2'>
        {!product.isFavorite ? (
          <div className=' p-2 bg-white bg-opacity-70 rounded-full flex items-center justify-center group hover:bg-mainRed transition duration-300'>
            <FaRegHeart
              className='w-6 h-6 group-hover:text-white transition duration-300 cursor-pointer'
              onClick={addToFavoriteHandler}
            />
          </div>
        ) : (
          <div className=' p-2 bg-white bg-opacity-70 rounded-full flex items-center justify-center group hover:bg-mainRed transition duration-300'>
            <RiDeleteBin6Line
              className='w-6 h-6 group-hover:text-white transition duration-300 cursor-pointer'
              onClick={removeFromFavoriteHandler}
            />
          </div>
        )}
        <div className=' p-2 bg-white bg-opacity-70 rounded-full flex items-center justify-center group hover:bg-mainRed transition duration-300'>
          <IoMdAdd
            className='w-6 h-6 group-hover:text-white transition duration-300 cursor-pointer'
            onClick={addToCartHandler}
          />
        </div>
      </div>
      <Link to={`/product/${product._id}`}>
        <img
          src={product.img}
          alt={product.name}
          className='mx-auto h-[150px] w-auto'
        />
        <h2 className='whitespace-nowrap'>{product.name}</h2>
        <div className='flex gap-x-3 items-center'>
          <span className='text-mainRed'>${product.salePrice}</span>
          {product.discound && (
            <span className='opacity-70 line-through'>
              ${product.mainPrice}
            </span>
          )}
        </div>
        <div className='flex gap-2'>
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
          <div className='opacity-70 font-semibold'>({product.rateNumber})</div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
