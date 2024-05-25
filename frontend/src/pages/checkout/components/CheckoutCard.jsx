import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutCard = ({ data }) => {
  return (
    <div className='flex justify-between items-center relative'>
      <div className='absolute bg-[#e2e2e2] flex justify-center items-center w-3 h-3 rounded-full p-2 text-xs -left-1.5 bg-opacity-70'>
        {data.qty}
      </div>
      <Link to={`/product/${data._id}`} className='flex items-center gap-3'>
        <img src={data.img} alt={data.name} className='w-12 aspect-square' />
        <p className=' text-xs md:text-sm text-center md:text-start'>
          {data.name}
        </p>
      </Link>
      <p className='font-semibold text-sm w-1/6 text-right'>
        ${data.salePrice}
      </p>
    </div>
  )
}

export default CheckoutCard
