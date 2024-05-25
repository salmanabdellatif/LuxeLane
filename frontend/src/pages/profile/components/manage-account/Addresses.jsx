import React, { useState } from 'react'
import { MdOutlineEditLocation } from 'react-icons/md'
import { MdDeleteForever } from 'react-icons/md'

const validateForm = formData => {
  const errors = {}

  if (!formData.addressName.trim()) {
    errors.addressName = 'Address name is required'
  }

  if (!formData.blockDetails.trim()) {
    errors.blockDetails = 'Block details are required'
  }

  if (!formData.street.trim()) {
    errors.street = 'Street is required'
  }

  if (!formData.city.trim()) {
    errors.city = 'City is required'
  }

  if (!formData.state.trim()) {
    errors.state = 'State is required'
  }

  if (!formData.country.trim()) {
    errors.country = 'Country is required'
  }

  return errors
}

const genId = () => {
  return Math.floor(Math.random() * 10)
}
const Addresses = () => {
  const [savedAddresses, setSavedAddresses] = useState([
    {
      _id: '001',
      addressName: 'home',
      blockDetails: 'no:11, floor:2, unit:7',
      street: '1234 st',
      city: 'merkez',
      state: 'isparta',
      country: 'turkey',
    },
    {
      _id: '002',
      addressName: 'home',
      blockDetails: 'no:11, floor:2, unit:7',
      street: '1234 st',
      city: 'merkez',
      state: 'isparta',
      country: 'turkey',
    },
    {
      _id: '003',
      addressName: 'home',
      blockDetails: 'no:11, floor:2, unit:7',
      street: '1234 st',
      city: 'merkez',
      state: 'isparta',
      country: 'turkey',
    },
  ])
  const [formData, setFormData] = useState({
    addressName: '',
    blockDetails: '',
    street: '',
    city: '',
    state: '',
    country: '',
    _id: genId(),
  })
  const [errors, setErrors] = useState({})
  const onChangeHandler = e => {
    e.preventDefault()
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmitHandler = e => {
    e.preventDefault()

    const validationErrors = validateForm(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      if (savedAddresses.filter(add => add._id === formData._id)) {
        setSavedAddresses(prev => prev.filter(add => add._id !== formData._id))
      }
      setSavedAddresses(prev => [...prev, formData])
      setFormData({
        addressName: '',
        blockDetails: '',
        street: '',
        city: '',
        state: '',
        country: '',
        _id: genId(),
      })
    }
  }
  const editHandler = _id => {
    setFormData(...savedAddresses.filter(add => add._id === _id))
  }
  const deleteHandler = _id => {
    setSavedAddresses(prev => prev.filter(add => add._id !== _id))
  }

  return (
    <div className='w-full rounded-md mt-2 py-5 px-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {savedAddresses.map((address, i) => (
          <div
            key={i}
            className='p-2 rounded-md bg-[#ececec] border border-[#585858] overflow-hidden text-sm relative'>
            <div className='absolute right-0 top-0 flex items-center gap-1 p-1'>
              <MdOutlineEditLocation
                className='w-5 h-5 text-[#4A90E2] cursor-pointer'
                onClick={() => editHandler(address._id)}
              />
              <MdDeleteForever
                className='w-5 h-5 text-[#D11A2A] cursor-pointer'
                onClick={() => deleteHandler(address._id)}
              />
            </div>
            <h3>{address.addressName}</h3>
            <p>
              {address.blockDetails}, {address.street}
            </p>
            <p>
              {address.city}, {address.state}, {address.country}
            </p>
          </div>
        ))}
      </div>
      <h1 className='text-mainRed font-semibold mt-5 text-lg'>
        Add New Address
      </h1>
      <form action='submit'>
        <div className='flex justify-between items-center gap-x-5'>
          <div className='my-3 space-y-2 w-1/2 relative'>
            <label className='text-sm'>Address Name</label>
            <input
              onChange={e => onChangeHandler(e)}
              value={formData.addressName}
              name='addressName'
              type='text'
              className=' w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
            {errors.addressName && (
              <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
                *{errors.addressName}
              </p>
            )}
          </div>
          <div className='my-3 space-y-2 w-1/2 relative'>
            <label className='text-sm'>Block Details</label>
            <input
              onChange={e => onChangeHandler(e)}
              name='blockDetails'
              value={formData.blockDetails}
              type='text'
              className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
            {errors.blockDetails && (
              <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
                *{errors.blockDetails}
              </p>
            )}
          </div>
        </div>
        <div className='flex justify-between items-center gap-x-5'>
          <div className='my-3 space-y-2 w-1/2 relative'>
            <label className='text-sm'>Street</label>
            <input
              onChange={e => onChangeHandler(e)}
              value={formData.street}
              name='street'
              type='text'
              className=' w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
            {errors.street && (
              <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
                *{errors.street}
              </p>
            )}
          </div>
          <div className='my-3 space-y-2 w-1/2 relative'>
            <label className='text-sm'>City</label>
            <input
              onChange={e => onChangeHandler(e)}
              name='city'
              value={formData.city}
              type='text'
              className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
            {errors.city && (
              <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
                *{errors.city}
              </p>
            )}
          </div>
        </div>
        <div className='flex justify-between items-center gap-x-5 mb-3'>
          <div className='my-3 space-y-2 w-1/2 relative'>
            <label className='text-sm'>State</label>
            <input
              onChange={e => onChangeHandler(e)}
              value={formData.state}
              name='state'
              type='text'
              className=' w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
            {errors.state && (
              <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
                *{errors.state}
              </p>
            )}
          </div>
          <div className='my-3 space-y-2 w-1/2 relative'>
            <label className='text-sm'>Country</label>
            <input
              onChange={e => onChangeHandler(e)}
              name='country'
              value={formData.country}
              type='text'
              className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
            {errors.country && (
              <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
                *{errors.country}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={e => onSubmitHandler(e)}
          type='submit'
          className='bg-mainRed text-white font-semibold py-2 px-4 rounded-md w-full'>
          Save Address
        </button>
      </form>
    </div>
  )
}

export default Addresses
