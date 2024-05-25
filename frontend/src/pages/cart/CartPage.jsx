import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import CartProductItem from './components/CartProductItem'
import images from '../../constants/images'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
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
  ])

  const breadCrumbsData = [
    { name: 'Home', link: '/' },
    { name: 'Cart', link: '/cart' },
  ]
  let totalPrice = 0
  for (let item of cartItems) {
    totalPrice += item.salePrice * item.qty
  }
  const shippingPrice = totalPrice < 300 ? 35 : 0
  const updateCartHandler = () => {
    // frontend updating functionalities has been added, after finishing backend this function will work
  }
  const applyCouponHandler = () => {}
  const deleteCouponHandler = () => {}
  // const checkoutHandler = () => {}
  const appliedCoupon = ''
  return (
    <MainLayout>
      <div className='container mx-auto px-2 md:px-5'>
        <BreadCrumbs data={breadCrumbsData} />
        <div className=''>
          <table className='w-full max-w-full border border-separate border-spacing-y-4 border-transparent'>
            <thead className='shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-sm text-sm md:text-lg'>
              <tr className='font-bold'>
                <th className='text-start py-5 px-2 md:px-4'>Product</th>
                <th className='text-start py-5 px-2 md:px-4'>Price</th>
                <th className='text-start py-5 px-2 md:px-4'>Quantity</th>
                <th className='text-start py-5 px-2 md:px-4'>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => (
                <CartProductItem
                  key={i}
                  item={item}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                />
              ))}
            </tbody>
          </table>
          <div className='flex justify-between items-center my-5'>
            <Link
              to='/'
              className='text-xs md:text-sm border border-[#a1a1a1] px-4 py-2 rounded-md font-semibold'>
              Return To Shop
            </Link>
            <button
              onClick={updateCartHandler}
              className='text-xs md:text-sm border border-[#a1a1a1] px-4 py-2 rounded-md font-semibold'>
              Update Cart
            </button>
          </div>
          <div className='flex flex-col md:flex-row items-center md:items-start py-6 justify-center gap-y-10'>
            <div className='flex gap-2 md:w-5/12'>
              <input
                className=' max-w-[180px] placeholder:text-[#a7a7a7] outline-none border border-[#a1a1a1] px-2 md:px-4 py-1 md:py-2 rounded-md'
                type='text'
                placeholder='Coupon Code'
              />
              {appliedCoupon ? (
                <button
                  className='border border-[#a1a1a1] md:px-4 px-2 md:py-2 rounded-md whitespace-nowrap text-xs'
                  onClick={deleteCouponHandler}>
                  Delete Coupon
                </button>
              ) : (
                <button
                  className='text-white bg-mainRed md:px-4 px-2 md:py-2 rounded-md whitespace-nowrap text-xs'
                  onClick={applyCouponHandler}>
                  Apply Coupon
                </button>
              )}
            </div>
            <div className='border border-black rounded-md flex flex-col justify-between md:w-5/12 p-4 max-w-[290px] w-full'>
              <h2 className='py-2 font-semibold'>Cart Total</h2>
              <div className='py-1 text-sm'>
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
              <Link
                to='/checkout'
                className='text-white bg-mainRed md:px-5 px-3 mx-auto py-2 md:py-3 rounded-md text-sm'>
                Procees to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default CartPage
