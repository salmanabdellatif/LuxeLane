import React, { useState } from 'react'

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/
  return phoneRegex.test(phone)
}

function validateUser(user) {
  const errors = {}
  if (!user.firstName || user.firstName.trim().length === 0) {
    errors.firstName = 'First name is required'
  }
  if (!user.lastName || user.lastName.trim().length === 0) {
    errors.lastName = 'Last name is required'
  }
  if (!user.email || !isValidEmail(user.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!user.phone || !isValidPhone(user.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }
  return errors
}

const Users = () => {
  const tempUsers = [
    {
      _id: '0001',
      firstName: 'John',
      lastName: 'Doe',
      email: 's@gmail.com',
      phone: '05551112233',
    },
    {
      _id: '0002',
      firstName: 'John',
      lastName: 'Doe',
      email: 's@gmail.com',
      phone: '05551112233',
    },
  ]
  const [searchValue, setSearchValue] = useState('')
  const [searchError, setSearchError] = useState('')
  const [searchedUsers, setSearchedUsers] = useState([])
  const [errors, setErrors] = useState({})
  const [EditFormData, setEditFormData] = useState()

  const editHandler = _id => {
    setErrors({})
    setEditFormData(searchedUsers.filter(user => user._id === _id)[0])
  }

  const searchSubmitHandler = e => {
    e.preventDefault()
    // validation
    if (searchValue.length < 3) {
      setSearchError('Please enter a minimum of 3 characters')
    } else {
      setSearchError('')
      // search logic
      setSearchValue('')
      // set data
      setSearchedUsers(tempUsers)
      // clear edit form if it visible
      setEditFormData(null)
    }
  }
  function editFormOnChangeHandler(event) {
    const { name, value } = event.target
    setEditFormData(prevUser => ({
      ...prevUser,
      [name]: value,
    }))
  }
  function editFormSubmitHandler(e) {
    e.preventDefault()
    const errors = validateUser(EditFormData)
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      setSearchedUsers(prev =>
        prev.map(user => (user._id === EditFormData._id ? EditFormData : user))
      )
      setEditFormData(null)
      // edit db here
    }
  }
  const deleteHandler = id => {
    setSearchedUsers(prev => prev.filter(user => user._id !== id))
    setEditFormData()
    //  edit db here
  }
  return (
    <div className='container mx-auto px-3 md:px-5 pb-20'>
      <form>
        <div className='md:w-2/3 md:mx-auto my-10 space-y-5'>
          <div className='flex md:items-center justify-center md:flex-row flex-col gap-x-4 w-full'>
            <label
              htmlFor='search'
              className='whitespace-nowrap text-xl font-semibold py-3 w-full'>
              Search Users:
            </label>
            <div className='relative w-full'>
              <input
                type='text'
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder='Name, Or Email'
                className='bg-[#dbdbdb] rounded-md overflow-hidden outline-none px-6 py-3 w-full'
                name='search'
                id='search'
              />
              {searchError && (
                <p className='text-mainRed text-xs absolute -bottom-4 left-0 whitespace-nowrap'>
                  *{searchError}
                </p>
              )}
            </div>
          </div>
          <button
            className='bg-mainRed text-white px-4 py-2 rounded-md w-full'
            onClick={searchSubmitHandler}>
            Search
          </button>
        </div>
      </form>
      {EditFormData && (
        <form>
          <div className='flex flex-col md:flex-row gap-x-3'>
            <div className='w-1/2 relative'>
              <label htmlFor='firstName' className='px-1'>
                First Name:
              </label>
              <input
                onChange={e => editFormOnChangeHandler(e)}
                type='text'
                name='firstName'
                id='firstName'
                className='w-full bg-[#dbdbdb] rounded-md px-3 py-1.5 outline-none'
                value={EditFormData.firstName}
              />
              {errors.firstName && (
                <p className='text-mainRed text-xs absolute -bottom-4 left-0 whitespace-nowrap'>
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className='w-1/2 relative'>
              <label htmlFor='firstName' className='px-1'>
                Last Name:
              </label>
              <input
                onChange={e => editFormOnChangeHandler(e)}
                type='text'
                name='lastName'
                id='lastName'
                className='w-full bg-[#dbdbdb] rounded-md px-3 py-1.5 outline-none'
                value={EditFormData.lastName}
              />
              {errors.lastName && (
                <p className='text-mainRed text-xs absolute -bottom-4 left-0 whitespace-nowrap'>
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-x-3 mt-4'>
            <div className='w-1/2 relative'>
              <label htmlFor='email' className='px-1'>
                Email
              </label>
              <input
                onChange={e => editFormOnChangeHandler(e)}
                type='text'
                name='email'
                id='email'
                className='w-full bg-[#dbdbdb] rounded-md px-3 py-1.5 outline-none'
                value={EditFormData.email}
              />
              {errors.email && (
                <p className='text-mainRed text-xs absolute -bottom-4 left-0 whitespace-nowrap'>
                  {errors.email}
                </p>
              )}
            </div>
            <div className='w-1/2 relative'>
              <label htmlFor='phone' className='px-1'>
                Phone Number
              </label>
              <input
                onChange={e => editFormOnChangeHandler(e)}
                type='text'
                name='phone'
                id='phone'
                className='w-full bg-[#dbdbdb] rounded-md px-3 py-1.5 outline-none'
                value={EditFormData.phone}
              />
              {errors.phone && (
                <p className='text-mainRed text-xs absolute -bottom-4 left-0 whitespace-nowrap'>
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={e => editFormSubmitHandler(e)}
            className='bg-mainRed text-white px-4 py-2 rounded-md my-6 w-full'>
            Save Changes
          </button>
        </form>
      )}
      {searchedUsers[0] && (
        <div>
          {searchedUsers.map(user => (
            <div
              key={user._id}
              className='rounded-md p-2 w-full border border-[#bebebe] mt-3'>
              <div className='flex gap-x-2 items-center'>
                <p className='w-1/2'>
                  <span className='font-semibold'>First Name: </span>
                  {user.firstName}
                </p>
                <p className='w-1/2'>
                  <span className='font-semibold'>Last Name: </span>
                  {user.lastName}
                </p>
              </div>
              <div className='flex gap-x-2 items-center'>
                <p className='w-1/2'>
                  <span className='font-semibold'>Email: </span>
                  {user.email}
                </p>
                <p className='w-1/2'>
                  <span className='font-semibold'>Phone: </span>
                  {user.phone}
                </p>
              </div>
              <div className='flex justify-between items-center gap-3 mt-4'>
                <button
                  onClick={() => editHandler(user._id)}
                  className='text-white px-3 py-1.5 rounded-md bg-[#949494] w-1/3'>
                  Edit
                </button>
                <button
                  onClick={() => deleteHandler(user._id)}
                  className='text-white px-3 py-1.5 rounded-md bg-mainRed w-1/3'>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Users
