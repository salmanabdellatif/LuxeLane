import React from 'react'
import MainLayout from '../../components/MainLayout'
import { Link, useLocation } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs'

const NotFound = () => {
  const location = useLocation().pathname.substring(1)
  // temp data
  const breadCrumbsData = [
    { name: 'Home', link: '/' },
    { name: '404 Error', link: location },
  ]
  return (
    <MainLayout>
      <div className='container mx-auto px-3'>
        <BreadCrumbs data={breadCrumbsData} />
        <div className='text-center my-28'>
          <h1 className='md:text-8xl text-4xl py-4'>404 Not Found</h1>
          <p className='md:text-sm text-xs'>
            Your visited page not found. You may go home page.
          </p>
          <Link
            to='/'
            className='py-2 px-4 bg-mainRed text-white inline-block my-5 rounded-md'>
            Back to home page
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default NotFound
