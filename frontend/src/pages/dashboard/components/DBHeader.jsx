import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const NavItemsInfo = [
  { name: 'Users' },
  { name: 'Products' },
  { name: 'Categories' },
  { name: 'Logout', link: '/' },
]
const DBHeader = ({ setSection }) => {
  const [navIsVisible, setNavIsVisible] = useState(false)

  const onClickHandler = item => {
    if (item.name === 'Logout') {
      logoutHandler()
    }
    setSection(item.name)
    setNavIsVisible(prev => !prev)
  }
  const logoutHandler = () => {
    // log out logic here
  }
  return (
    <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
      <header className='container mx-auto px-5 py-4 flex justify-between items-center'>
        <div className='block order-first'>
          <Link
            className='font-inter font-extrabold text-black text-xl space-x-2'
            to='/admin/dashboard'>
            <span>LuxeLane</span>
            <span className='text-sm font-medium text-mainRed'>dashboard</span>
          </Link>
        </div>
        <div className='lg:hidden z-50 cursor-pointer'>
          {navIsVisible ? (
            <AiOutlineClose
              className='w-6 h-6'
              onClick={() => setNavIsVisible(curState => !curState)}
            />
          ) : (
            <AiOutlineMenu
              className='w-6 h-6'
              onClick={() => setNavIsVisible(curState => !curState)}
            />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? 'right-0' : '-right-full'
          } transition-all duration-300 mt-[60px] lg:mt-0 bg-black bg-opacity-95 lg:bg-transparent z-[49] fixed top-0 bottom-0 w-full lg:w-auto lg:static flex lg:justify-end flex-col lg:flex-row gap-x-9 justify-center items-center`}>
          <ul className='flex gap-2 flex-col items-center gap-y-5 lg:flex-row text-white lg:text-black'>
            {NavItemsInfo.map(item => (
              <li key={item.name} className='relative group cursor-pointer'>
                <Link
                  onClick={() => onClickHandler(item)}
                  to={item.link}
                  className='px-4 py-2'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className='h-[1px] w-full bg-[#9c9c9c] bg-opacity-40'></div>
    </section>
  )
}

export default DBHeader
