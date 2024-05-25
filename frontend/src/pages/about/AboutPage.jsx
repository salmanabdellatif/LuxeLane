import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import { CiShop, CiDollar, CiGift } from 'react-icons/ci'
import { FaHandHoldingDollar } from 'react-icons/fa6'
import Services from '../home/container/Services'

const AboutPage = () => {
  // temp data
  const breadCrumbsData = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
  ]
  return (
    <MainLayout>
      <div className='container mx-auto'>
        <div className='px-3 md:px-5'>
          <BreadCrumbs data={breadCrumbsData} />
        </div>
        <div className='flex w-full py-5 flex-col md:flex-row'>
          <div className='md:w-1/2 flex justify-center items-center'>
            <div className='py-6 px-4'>
              <h1 className='font-semibold text-4xl my-3'>Our Story</h1>
              <p className='text-sm my-4'>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{' '}
              </p>
              <p className='text-sm'>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          <div className='md:w-1/2 overflow-hidden rounded-sm'>
            <img
              className='w-full object-cover'
              src={images.AboutImage}
              alt='about us'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-3 py-16'>
          <div className='flex flex-col items-center border border-[#bdbdbd] rounded-sm py-5 gap-y-5'>
            <div className=' flex justify-center items-center bg-black w-16 h-16 rounded-full border-8 border-[#bdbdbd] mb-4'>
              <CiShop className='text-white w-10 h-10' />
            </div>
            <p className='font-bold text-2xl'>10.5K</p>
            <span className='text-lg'>Sallers active our site</span>
          </div>
          <div className='flex flex-col items-center border border-[#bdbdbd] rounded-sm py-5 gap-y-5'>
            <div className=' flex justify-center items-center bg-black w-16 h-16 rounded-full border-8 border-[#bdbdbd] mb-4'>
              <CiDollar className='text-white w-10 h-10' />
            </div>
            <p className='font-bold text-2xl'>33K</p>
            <span className='text-lg'>Mopnthly Produduct Sale</span>
          </div>
          <div className='flex flex-col items-center border border-[#bdbdbd] rounded-sm py-5 gap-y-5'>
            <div className=' flex justify-center items-center bg-black w-16 h-16 rounded-full border-8 border-[#bdbdbd] mb-4'>
              <CiGift className='text-white w-10 h-10' />
            </div>
            <p className='font-bold text-2xl'>45.5K</p>
            <span className='text-lg'>Customer active in our site</span>
          </div>
          <div className='flex flex-col items-center border border-[#bdbdbd] rounded-sm py-5 gap-y-5'>
            <div className=' flex justify-center items-center bg-black w-16 h-16 rounded-full border-8 border-[#bdbdbd] mb-4'>
              <FaHandHoldingDollar className='text-white w-8 h-8' />
            </div>
            <p className='font-bold text-2xl'>25K</p>
            <span className='text-lg'>Anual gross sale in our site</span>
          </div>
        </div>
        <Services />
      </div>
    </MainLayout>
  )
}

export default AboutPage
