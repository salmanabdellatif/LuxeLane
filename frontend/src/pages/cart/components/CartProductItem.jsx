import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAdd } from 'react-icons/io'
import { HiOutlineMinusSmall } from 'react-icons/hi2'
import { RiDeleteBin6Line } from 'react-icons/ri'

const CartProductItem = ({ item, setCartItems, cartItems }) => {
  const addHandler = () => {
    // add functionality
    setCartItems(items => items.filter(i => (i === item ? i.qty++ : i.qty)))
  }
  const subHandler = () => {
    // sub functionality
    setCartItems(items => items.filter(i => (i === item ? i.qty-- : i.qty)))
  }
  const deleteHandler = () => {
    // delete functionality
    setCartItems(items => items.filter(i => (i === item ? null : i.qty)))
  }
  return (
    <tr className='font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.05)] rounded-sm text-xs'>
      <td>
        <div>
          <Link
            className='flex items-center gap-x-1 flex-col md:flex-row'
            to={`/product/${item._id}`}>
            <img
              className='w-20 aspect-square'
              src={item.img}
              alt={item.name}
            />
            <p className='text-xs md:text-sm text-center md:text-start'>
              {item.name}
            </p>
          </Link>
        </div>
      </td>
      <td className='px-2 md:px-5'>${item.salePrice}</td>
      <td className='px-2 md:px-5 space-x-3 whitespace-nowrap'>
        {item.qty !== 1 ? (
          <button
            onClick={subHandler}
            className='bg-[#e4e4e4] rounded-full w-7 h-7'>
            <HiOutlineMinusSmall className='inline w-7 h-7' />
          </button>
        ) : (
          <button
            onClick={deleteHandler}
            className='bg-[#e4e4e4] rounded-full w-7 h-7'>
            <RiDeleteBin6Line className='inline w-5 h-5' />
          </button>
        )}
        <span>{item.qty}</span>
        <button
          onClick={addHandler}
          className='bg-[#e4e4e4] rounded-full w-7 h-7'>
          <IoIosAdd className='inline w-7 h-7' />
        </button>
      </td>
      <td className='px-2 md:px-5'>
        ${(item.salePrice * item.qty).toFixed(2)}
      </td>
    </tr>
  )
}

export default CartProductItem
