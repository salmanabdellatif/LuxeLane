import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import images from '../../constants/images'
import CheckoutCard from './components/CheckoutCard'

const CheckoutPage = () => {
  const [coupon, setCoupon] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState('')
  // temp data
  const breadCrumbsData = [
    { name: 'Home', link: '/' },
    { name: 'Account', link: '/profile' },
    { name: 'Cart', link: '/cart' },
    { name: 'Checkout', link: '/checkout' },
  ]
  const checkoutData = [
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
  ]
  let totalPrice = 0
  for (let item of checkoutData) {
    totalPrice += item.salePrice * item.qty
  }
  const shippingPrice = totalPrice < 300 ? 35 : 0
  const applyCouponHandler = () => {
    // it will check in db if it valid coupon
    // then add it to interface
    setAppliedCoupon(coupon)
    setCoupon('')
  }
  const deleteCouponHandler = () => {
    setAppliedCoupon('')
    setCoupon('')
  }
  return (
    <MainLayout>
      <div className='container mx-auto px-4 md:px-8'>
        <BreadCrumbs data={breadCrumbsData} />
        <h1 className='text-2xl font-semibold'>Billing Details</h1>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='md:w-5/12'>
            <div className='flex flex-col w-full mb-5'>
              <label className='text-sm text-[#a7a7a7]'>First Name</label>
              <input
                type='text'
                className='rounded-sm bg-[#ebebeb] outline-none px-4 py-2 mt-1'
              />
            </div>
            <div className='flex flex-col w-full mb-5'>
              <label className='text-sm text-[#a7a7a7]'>Address Name</label>
              <input
                type='text'
                className='rounded-sm bg-[#ebebeb] outline-none px-4 py-2 mt-1'
              />
            </div>
            <div className='flex flex-col w-full mb-5'>
              <label className='text-sm text-[#a7a7a7]'>Street Address</label>
              <input
                type='text'
                className='rounded-sm bg-[#ebebeb] outline-none px-4 py-2 mt-1'
              />
            </div>
            <div className='flex flex-col w-full mb-5'>
              <label className='text-sm text-[#a7a7a7]'>
                Apartment, floor, etc. (optional)
              </label>
              <input
                type='text'
                className='rounded-sm bg-[#ebebeb] outline-none px-4 py-2 mt-1'
              />
            </div>
            <div className='flex flex-col w-full mb-5'>
              <label className='text-sm text-[#a7a7a7]'>City</label>
              <input
                type='text'
                className='rounded-sm bg-[#ebebeb] outline-none px-4 py-2 mt-1'
              />
            </div>
            <div className='flex flex-col w-full mb-5'>
              <label className='text-sm text-[#a7a7a7]'>Phone Number</label>
              <input
                type='text'
                className='rounded-sm bg-[#ebebeb] outline-none px-4 py-2 mt-1'
              />
            </div>
            <div className='flex flex-col w-full mb-5'>
              <label className='text-sm text-[#a7a7a7]'>Email Address</label>
              <input
                type='email'
                className='rounded-sm bg-[#ebebeb] outline-none px-4 py-2 mt-1'
              />
            </div>
            <div className='flex w-full mb-5 gap-3'>
              <input type='checkbox' id='saveaddress' />
              <label htmlFor='saveaddress'>
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
          <div className='md:w-5/12 my-8 md:my-0'>
            <div className='space-y-3'>
              {checkoutData.map((item, i) => (
                <CheckoutCard key={i} data={item} />
              ))}
            </div>
            <div className='py-1 text-sm my-3'>
              <div className='flex justify-between items-center border-b border-[#d8d8d8] py-2'>
                <div>Subtotal:</div>
                <div>${totalPrice}</div>
              </div>
              <div className='flex justify-between items-center border-b border-[#d8d8d8] py-2'>
                <div>Shipping:</div>
                <div>{!shippingPrice ? 'Free' : `$${shippingPrice}`}</div>
              </div>
              {appliedCoupon && (
                <div className='flex justify-between items-center border-b border-[#d8d8d8] py-2'>
                  <div>Discound:</div>
                  <div>-$50</div>
                </div>
              )}
              <div className='flex justify-between items-center py-2'>
                <div>Total:</div>
                <div>${totalPrice + shippingPrice}</div>
              </div>
            </div>
            <div className='flex justify-evenly gap-2 max-w-full'>
              <input
                className='max-w-[170px] placeholder:text-[#a7a7a7] outline-none border border-[#a1a1a1] px-2 md:px-3 py-1 md:py-1 rounded-md'
                type='text'
                name='coupon'
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                placeholder='Coupon Code'
              />
              {appliedCoupon ? (
                <button
                  className='border border-[#a1a1a1] md:px-3 px-2 md:py-1 rounded-md whitespace-nowrap text-xs'
                  onClick={deleteCouponHandler}>
                  Delete Coupon
                </button>
              ) : (
                <button
                  className='text-white bg-mainRed md:px-3 px-2 md:py-1 rounded-md whitespace-nowrap text-xs'
                  onClick={applyCouponHandler}>
                  Apply Coupon
                </button>
              )}
            </div>
            <button className='text-white bg-mainRed md:px-4 px-2 md:py-2 rounded-md whitespace-nowrap text-sm w-full my-3'>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default CheckoutPage
