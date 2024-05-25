import React from 'react'
import { useState, useEffect } from 'react'
import images from '../../../constants/images'
import ProductCard from '../../../components/ProductCard'

const Todays = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const deadline = 'may, 30, 2024'
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000)
    return () => clearInterval(interval)
  }, [])
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
    <div className='container mx-auto px-3 md:px-8 py-4'>
      <div className='flex items-center justify-start gap-3 py-4'>
        <div className='w-4 h-8 bg-mainRed rounded-sm'></div>
        <div className='font-semibold text-mainRed'>Today's</div>
      </div>
      <div className='flex items-center justify-start'>
        <h2 className='font-bold text-lg md:text-3xl whitespace-nowrap'>
          Flash Sales
        </h2>
        <div className='flex py-6 pl-6 md:pl-16'>
          <div className='relative'>
            <p className='text-xs p-0 m-0 absolute -top-5'>Day</p>
            <span className='text-lg md:text-3xl font-semibold'>{days}</span>
            <span className='text-xl font-semibold text-mainRed px-3'>:</span>
          </div>
          <div className='relative'>
            <p className='text-xs p-0 m-0 absolute -top-5'>Hour</p>
            <span className='text-lg md:text-3xl font-semibold'>{hours}</span>
            <span className='text-xl font-semibold text-mainRed px-3'>:</span>
          </div>
          <div className='relative'>
            <p className='text-xs p-0 m-0 absolute -top-5'>Min</p>
            <span className='text-lg md:text-3xl font-semibold'>{minutes}</span>
            <span className='text-xl font-semibold text-mainRed px-3'>:</span>
          </div>
          <div className='relative'>
            <p className='text-xs p-0 m-0 absolute -top-5'>Sec</p>
            <span className='text-lg md:text-3xl font-semibold'>{seconds}</span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {ProductsTempData.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Todays
