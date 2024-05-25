import React, { useState } from 'react'

function validateCategory(category) {
  const errors = {}
  // Validate name
  if (!category.name || category.name.trim().length < 3) {
    errors.name = 'Category name must be at least 3 characters long'
  }
  // Validate desc
  if (!category.desc || category.desc.trim().length < 10) {
    errors.desc = 'Description must be at least 10 characters long'
  }
  return errors
}

const Categories = () => {
  const tempCategories = [
    {
      _id: '0001',
      name: 'Gaming',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nemo quaerat rem vero temporibus, consectetur velit quia! Temporibus aperiam odit nihil exercitationem.',
    },
    {
      _id: '0002',
      name: 'Gaming',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nemo quaerat rem vero temporibus, consectetur velit quia! Temporibus aperiam odit nihil exercitationem.',
    },
  ]
  const [searchValue, setSearchValue] = useState('')
  const [searchError, setSearchError] = useState('')
  const [searchedCategories, setSearchedCategories] = useState([])
  const [errors, setErrors] = useState({})
  const [EditFormData, setEditFormData] = useState()

  const editHandler = _id => {
    setErrors({})
    setEditFormData(searchedCategories.filter(user => user._id === _id)[0])
  }

  const addHandler = e => {
    e.preventDefault()
    setEditFormData({
      _id: Math.floor(Math.random() * 10) + 25,
      name: '',
      desc: '',
    })
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
      setSearchedCategories(tempCategories)
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
    const errors = validateCategory(EditFormData)
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      setSearchedCategories(prev => {
        // Check if the category exists in the list
        const categoryIndex = prev.findIndex(
          category => category._id === EditFormData._id
        )

        if (categoryIndex !== -1) {
          // Category exists, update it
          return prev.map((category, index) =>
            index === categoryIndex ? EditFormData : category
          )
        } else {
          // Category does not exist, add it as a new item
          return [...prev, EditFormData]
        }
      })
      // set form data to null to make it invisible
      setEditFormData(null)
      // edit db here
    }
  }
  const deleteHandler = id => {
    setSearchedCategories(prev => prev.filter(user => user._id !== id))
    // clear edit form if it is not
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
              Search Categories:
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
          <button
            className='bg-[#05445E] text-white px-4 py-2 rounded-md w-full'
            onClick={addHandler}>
            Add New Product
          </button>
        </div>
      </form>
      {EditFormData && (
        <form>
          <div className='flex flex-col md:flex-row gap-x-3'>
            <div className='relative w-full'>
              <label htmlFor='name' className='px-1'>
                Category Name
              </label>
              <input
                onChange={e => editFormOnChangeHandler(e)}
                type='text'
                name='name'
                id='name'
                className='w-full bg-[#dbdbdb] rounded-md px-3 py-1.5 outline-none'
                value={EditFormData.name}
              />
              {errors.name && (
                <p className='text-mainRed text-xs absolute -bottom-4 left-0 whitespace-nowrap'>
                  {errors.name}
                </p>
              )}
            </div>
          </div>
          <div className='relative my-4'>
            <label htmlFor='description' className='px-1'>
              Description
            </label>
            <textarea
              onChange={e => editFormOnChangeHandler(e)}
              type='text'
              name='desc'
              id='description'
              className='w-full bg-[#dbdbdb] rounded-md px-3 py-1.5 outline-none'
              value={EditFormData.desc}
            />
            {errors.desc && (
              <p className='text-mainRed text-xs absolute -bottom-4 left-0 whitespace-nowrap'>
                {errors.desc}
              </p>
            )}
          </div>
          <button
            onClick={e => editFormSubmitHandler(e)}
            className='bg-mainRed text-white px-4 py-2 rounded-md my-6 w-full'>
            Save Changes
          </button>
        </form>
      )}
      {searchedCategories[0] && (
        <div>
          {searchedCategories.map(category => (
            <div
              key={category._id}
              className='rounded-md p-2 w-full border border-[#bebebe] mt-3'>
              <div className='flex gap-x-2 items-center'>
                <p>
                  <span className='font-semibold'>Category Name: </span>
                  {category.name}
                </p>
              </div>
              <div className='flex gap-x-2 items-center'>
                <p>
                  <span className='font-semibold'>Description: </span>
                  {category.desc}
                </p>
              </div>
              <div className='flex justify-between items-center gap-3 mt-4'>
                <button
                  onClick={() => editHandler(category._id)}
                  className='text-white px-3 py-1.5 rounded-md bg-[#949494] w-1/3'>
                  Edit
                </button>
                <button
                  onClick={() => deleteHandler(category._id)}
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

export default Categories
