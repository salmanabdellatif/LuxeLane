import React, { useState } from 'react'
import images from '../../../../constants/images'
import { Link } from 'react-router-dom'
import { FaRegStar, FaStar } from 'react-icons/fa'

const Reviews = () => {
  const ordersData = [
    {
      _id: '111',
      totalPrice: 656,
      status: 'received',
      user: {
        name: 'John Doe',
      },
      address: {
        _id: '002',
        addressName: 'home',
        blockDetails: 'no:11, floor:2, unit:7',
        street: '1234 st',
        city: 'merkez',
        state: 'isparta',
        country: 'turkey',
      },
      products: [
        {
          name: 'HAVIT HV-G92 Gamepad',
          mainPrice: 160,
          discound: 0.4,
          salePrice: 96,
          img: images.Product1,
          rate: 1,
          rateNumber: 88,
          _id: '001',
          qty: 1,
        },
        {
          name: 'IPS LCD Gaming Monitor',
          mainPrice: 400,
          discound: 0.3,
          salePrice: 280,
          img: images.Product3,
          rate: 1,
          rateNumber: 99,
          _id: '002',
          qty: 2,
        },
      ],
    },
    {
      _id: '111',
      totalPrice: 656,
      status: 'preparing',
      user: {
        name: 'John Doe',
      },
      address: {
        _id: '002',
        addressName: 'home',
        blockDetails: 'no:11, floor:2, unit:7',
        street: '1234 st',
        city: 'merkez',
        state: 'isparta',
        country: 'turkey',
      },
      products: [
        {
          name: 'HAVIT HV-G92 Gamepad',
          mainPrice: 160,
          discound: 0.4,
          salePrice: 96,
          img: images.Product1,
          rate: 1,
          rateNumber: 88,
          _id: '001',
          qty: 1,
        },
        {
          name: 'IPS LCD Gaming Monitor',
          mainPrice: 400,
          discound: 0.3,
          salePrice: 280,
          img: images.Product3,
          rate: 1,
          rateNumber: 99,
          _id: '002',
          qty: 2,
        },
      ],
    },
  ]
  const rateArrayFunc = rate =>
    Array.from({ length: 5 }, (_, index) => {
      const starRating = (index + 1) * 0.2
      return rate >= starRating ? 1 : 0
    })
  const [rateArray, setRateArray] = useState(rateArrayFunc(0))
  const submitReviewHandler = () => {}
  return (
    <div className='rounded-md mt-2 py-5 px-3 md:px-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-10 mx-auto'>
      <h1 className='font-semibold text-mainRed text-xl'>Review Your Orders</h1>
      {ordersData.map((order, i) => {
        return order.status === 'received' ? (
          <div className='mb-10' key={i}>
            <div className='my-3'>
              <div className='flex md:items-center justify-between flex-col md:flex-row my-3'>
                <div className='flex items-center gap-x-3 pb-2'>
                  <h3 className='font-bold'>Order Number #{order._id}</h3>
                  {order.status === 'received' ? (
                    <span className='font-semibold text-[#00FF66]'>
                      {order.status}
                    </span>
                  ) : order.status === 'preparing' ? (
                    <span className='font-semibold text-[#FFAD33]'>
                      {order.status}
                    </span>
                  ) : order.status === 'in cargo' ? (
                    <span className='font-semibold text-[#FFAD33]'>
                      {order.status}
                    </span>
                  ) : order.status === 'cancelled' ? (
                    <span className='font-semibold text-mainRed'>
                      {order.status}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <p className='font-semibold'>
                Name: <span className='text-mainRed'>{order.user.name}</span>
              </p>
              {order.products.map((product, j) => (
                <div className='my-2 border border-[#777a] rounded-md '>
                  <div
                    className='flex justify-between md:items-center items-end'
                    key={j}>
                    <Link
                      className='flex items-center gap-x-1 flex-col md:flex-row p-2'
                      to={`/product/${product._id}`}>
                      <img
                        className='w-20 aspect-square'
                        src={product.img}
                        alt={product.name}
                      />
                      <p className='text-xs md:text-sm text-center md:text-start py-3'>
                        {product.name} x {product.qty}
                      </p>
                    </Link>
                    <p className='p-4 text-sm whitespace-nowrap'>
                      Subtotal:{' '}
                      <span className='text-mainRed font-semibold'>
                        ${product.salePrice * product.qty}
                      </span>
                    </p>
                  </div>
                  <div className='px-3'>
                    <div className='flex items-center lg:gap-x-10 md:gap-x-5 gap-x-3 text-sm'>
                      <h4 className='md:text-lg font-semibold'>
                        Rate Your Product:{' '}
                      </h4>
                      <div className='flex items-center gap-2'>
                        {rateArray.map((rate, i) =>
                          rate ? (
                            <FaStar
                              className='text-[#FFAD33] md:w-7 md:h-7 w-5 h-5'
                              key={i}
                              onClick={() =>
                                setRateArray(rateArrayFunc((i + 1) * 0.2))
                              }
                            />
                          ) : (
                            <FaRegStar
                              className='text-[#FFAD33] md:w-7 md:h-7 w-5 h-5'
                              key={i}
                              onClick={() =>
                                setRateArray(rateArrayFunc((i + 1) * 0.2))
                              }
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className='my-3'>
                      <div className='flex md:items-center lg:gap-x-10 md:gap-x-5 gap-x-3 flex-col md:flex-row'>
                        <h3 className='font-semibold md:text-lg whitespace-nowrap'>
                          Leave a Comment:{' '}
                        </h3>
                        <input
                          type='text'
                          className='px-4 py-2 rounded-md bg-[#e7e7e7] w-full outline-none'
                        />
                      </div>
                      <button
                        className='w-full bg-mainRed rounded-md text-white px-4 py-2 my-3'
                        onClick={submitReviewHandler}>
                        Send Review
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex justify-between items-center px-2'>
              <h4 className='font-bold'>Total Price:</h4>
              <p className='text-mainRed font-semibold'>${order.totalPrice}</p>
            </div>
          </div>
        ) : (
          <></>
        )
      })}
    </div>
  )
}

export default Reviews
