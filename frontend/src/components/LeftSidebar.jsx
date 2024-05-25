import React from 'react'

const LeftSidebar = () => {
  return (
    <div className='my-8 hidden md:w-1/4 md:block'>
      <ul className='flex flex-col gap-y-2 lg:gap-y-3 lg:pl-8'>
        <li>Woman’s Fashion</li>
        <li>Men’s Fashion</li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby’s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </div>
  )
}

export default LeftSidebar
