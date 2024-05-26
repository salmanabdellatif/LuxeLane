import React, { useState } from 'react'

const EditProfile = () => {
  const onChangeHandler = e => {
    e.preventDefault()
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmitHandler = e => {
    e.preventDefault()
    console.log(formData)
  }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    ConfirmPassword: '',
  })

  return (
    <div className='w-full rounded-md mt-2 py-5 px-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-10'>
      <h1 className='text-mainRed font-semibold'>Edit Your Profile</h1>
      <form action='submit' onSubmit={e => onSubmitHandler(e)}>
        <div className='flex justify-between items-center gap-x-5'>
          <div className='my-3 space-y-2 w-1/2'>
            <label className='text-sm'>First Name</label>
            <input
              onChange={e => onChangeHandler(e)}
              value={formData.firstName}
              name='firstName'
              type='text'
              className=' w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
          </div>
          <div className='my-3 space-y-2 w-1/2'>
            <label className='text-sm'>Last Name</label>
            <input
              onChange={e => onChangeHandler(e)}
              name='lastName'
              value={formData.lastName}
              type='text'
              className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
          </div>
        </div>
        <div className='flex justify-between items-center gap-x-5'>
          <div className='my-3 space-y-2 w-1/2'>
            <label className='text-sm'>Email</label>
            <input
              onChange={e => onChangeHandler(e)}
              name='email'
              value={formData.email}
              type='email'
              className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
          </div>
          <div className='my-3 space-y-2 w-1/2'>
            <label className='text-sm'>Address</label>
            <input
              onChange={e => onChangeHandler(e)}
              name='address'
              value={formData.address}
              type='text'
              className=' w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
          </div>
        </div>
        <div className='my-3 w-full space-y-4'>
          <label className='text-'>Change Your Password</label>
          <input
            onChange={e => onChangeHandler(e)}
            value={formData.currentPassword}
            name='currentPassword'
            type='password'
            placeholder='Current Passwod'
            className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
          />
          <input
            onChange={e => onChangeHandler(e)}
            name='newPassword'
            value={formData.newPassword}
            placeholder='New Passwod'
            type='password'
            className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
          />
          <input
            onChange={e => onChangeHandler(e)}
            name='ConfirmPassword'
            value={formData.ConfirmPassword}
            type='password'
            placeholder='Confirm New Passwod'
            className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
          />
        </div>
        <button
          type='submit'
          className='bg-mainRed text-white font-semibold py-2 px-4 rounded-md w-full'>
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditProfile
