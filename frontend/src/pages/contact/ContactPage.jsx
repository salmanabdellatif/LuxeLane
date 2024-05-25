import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { FiPhone } from 'react-icons/fi'
import { CiMail } from 'react-icons/ci'

const validate = data => {
  const errors = {}

  // Name validation
  if (!data.name) {
    errors.name = 'Name is required'
  } else if (data.name.length < 3) {
    errors.name = 'Name must be at least 3 characters long'
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email) {
    errors.email = 'Email is required'
  } else if (!emailPattern.test(data.email)) {
    errors.email = 'Email is invalid'
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/
  if (!data.phone) {
    errors.phone = 'Phone number is required'
  } else if (!phonePattern.test(data.phone)) {
    errors.phone = 'Phone number is invalid (must be 10 digits)'
  }

  // Message validation
  if (!data.message) {
    errors.message = 'Message is required'
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }

  return errors
}

const ContactPage = () => {
  // temp data
  const breadCrumbsData = [
    { name: 'Home', link: '/' },
    { name: 'Contact', link: 'contact' },
  ]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const onChangeHandler = e => {
    e.preventDefault()
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const submitHandlr = e => {
    e.preventDefault()
    const validationErrors = validate(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      // send data to server
      // clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    }
  }
  return (
    <MainLayout>
      <div className='container mx-auto'>
        <div className='px-5'>
          <BreadCrumbs data={breadCrumbsData} />
        </div>
        <div className='flex flex-col md:flex-row justify- lg:gap-14 md:gap-8 gap-5 px-10'>
          <div className='md:w-1/4 space-y-5 mb-20'>
            <div className='space-y-4'>
              <div className='flex gap-3 items-center'>
                <div className='p-2 rounded-full bg-mainRed text-white w-fit'>
                  <FiPhone className='w-6 h-6' />
                </div>
                <h4 className='font-semibold'>Call To Us</h4>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className='w-full h-px bg-[#8a8a8a]'></div>
            <div className='space-y-4'>
              <div className='flex gap-3 items-center'>
                <div className='p-2 rounded-full bg-mainRed text-white w-fit'>
                  <CiMail className='w-6 h-6' />
                </div>
                <h4 className='font-semibold'>Write To Us</h4>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <form
            action='submit'
            className='flex flex-col items-end relative h-fit pb-40 md:pb-8'
            onSubmit={e => submitHandlr(e)}>
            <div className='flex md:flex-row flex-col gap-3 w-full'>
              <input
                onChange={e => onChangeHandler(e)}
                type='text'
                value={formData.name}
                className='px-4 py-2 bg-[#e0e0e0] outline-none rounded-md'
                placeholder='Your Name'
                name='name'
              />
              <input
                onChange={e => onChangeHandler(e)}
                value={formData.email}
                type='text'
                className='px-4 py-2 bg-[#e0e0e0] outline-none rounded-md'
                placeholder='Your Email'
                name='email'
              />
              <input
                onChange={e => onChangeHandler(e)}
                value={formData.phone}
                type='text'
                className='px-4 py-2 bg-[#e0e0e0] outline-none rounded-md'
                placeholder='Your Phone'
                name='phone'
              />
            </div>
            <textarea
              onChange={e => onChangeHandler(e)}
              value={formData.message}
              name='message'
              placeholder='Your Message'
              className='w-full h-28 px-4 py-2 bg-[#e0e0e0] outline-none rounded-md mt-6'
            />
            <div className='absolute bottom-0 left-0 text-mainRed'>
              {errors.name && <p>*{errors.name}*</p>}
              {errors.email && <p>*{errors.email}*</p>}
              {errors.phone && <p>*{errors.phone}*</p>}
              {errors.message && <p>*{errors.message}*</p>}
            </div>
            <button
              type='submit'
              className='px-3 py-1.5 text-white bg-mainRed rounded-md my-4 text-lg'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default ContactPage
