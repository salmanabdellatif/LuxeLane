import { useState } from 'react'
import images from '../../../constants/images'

function validateProduct(product) {
  const errors = {}

  if (!product.name || product.name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters long'
  }

  if (!product.desc || product.desc.trim().length < 10) {
    errors.desc = 'Description must be at least 10 characters long'
  }
  product.mainPrice = Number(product.mainPrice)
  if (
    product.mainPrice === undefined ||
    product.mainPrice === null ||
    product.mainPrice <= 0 ||
    isNaN(product.mainPrice)
  ) {
    errors.mainPrice = 'Main price must be a positive number'
  }

  if (!product.category || typeof product.category !== 'string') {
    errors.category = 'Category is required and must be a string'
  }

  if (
    product.discound !== undefined &&
    (product.discound < 0 || product.discound > 1)
  ) {
    errors.discound = 'Discount must be between 0 and 1'
  }

  return errors
}

const Products = () => {
  const tempProducts = [
    {
      _id: '001',
      name: 'Breed Dry Dog Food',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nemo quaerat rem vero temporibus, consectetur velit quia! Temporibus aperiam odit nihil exercitationem.',
      mainPrice: 100,
      img: images.Product9,
      category: 'pets',
      discound: 0.1,
    },
    {
      _id: '002',
      name: 'Breed Dry Dog Food',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nemo quaerat rem vero temporibus, consectetur velit quia! Temporibus aperiam odit nihil exercitationem.',
      mainPrice: 100,
      img: images.Product9,
      category: 'pets',
      discound: 0.1,
    },
  ]
  const [searchValue, setSearchValue] = useState('')
  const [searchError, setSearchError] = useState('')
  const [searchedProducts, setSearchedProducts] = useState([])
  const [errors, setErrors] = useState({})
  const [EditFormData, setEditFormData] = useState()
  const [previews, setPreviews] = useState([]) // images viewer

  const editHandler = _id => {
    setErrors({})
    setEditFormData(searchedProducts.filter(user => user._id === _id)[0])
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
      setSearchedProducts(tempProducts)
      // clear edit form if it visible
      setEditFormData(null)
    }
  }
  const addHandler = e => {
    e.preventDefault()
    setEditFormData({
      _id: Math.floor(Math.random() * 10),
      name: '',
      desc: '',
      mainPrice: '',
      img: images.Product9,
      category: '',
      discound: '',
    })
  }
  const formOnChangeHandler = e => {
    const { name, value } = e.target
    setEditFormData(prevUser => ({
      ...prevUser,
      [name]: value,
    }))
  }
  const editFormSubmitHandler = e => {
    e.preventDefault()

    const errors = validateProduct(EditFormData)
    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      setSearchedProducts(prev => {
        // Check if the product exists in the list
        const productIndex = prev.findIndex(
          product => product._id === EditFormData._id
        )
        if (productIndex !== -1) {
          // Product exists, update it
          return prev.map((product, index) =>
            index === productIndex ? EditFormData : product
          )
        } else {
          // Product does not exist, add it as a new item
          return [...prev, EditFormData]
        }
      })
      // set form data to null to make it invisible
      setEditFormData(null)
      // edit db here
    }
  }
  const deleteHandler = id => {
    setSearchedProducts(prev => prev.filter(user => user._id !== id))
    setEditFormData()
    //  edit db here
  }

  // handle upload images
  const fileUploaderOnChangeHandler = event => {
    const files = Array.from(event.target.files)
    const newPreviews = files.map(file => URL.createObjectURL(file))
    setPreviews(newPreviews)
  }
  return (
    <div className='container mx-auto px-3 md:px-5 pb-20'>
      <form>
        <div className='md:w-2/3 md:mx-auto my-10 space-y-5'>
          <div className='flex md:items-center justify-center md:flex-row flex-col gap-x-4 w-full'>
            <label
              htmlFor='search'
              className='whitespace-nowrap text-xl font-semibold py-3 w-full'>
              Search Products:
            </label>
            <div className='relative w-full'>
              <input
                type='text'
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder='Product Name'
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
            <div className='w-1/2 relative'>
              <label htmlFor='name' className='px-1'>
                Product Name
              </label>
              <input
                onChange={e => formOnChangeHandler(e)}
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
            <div className='w-1/2 relative'>
              <label htmlFor='category' className='px-1'>
                Category
              </label>
              <input
                onChange={e => formOnChangeHandler(e)}
                type='text'
                name='category'
                id='category'
                className='w-full bg-[#dbdbdb] rounded-md px-3 py-1.5 outline-none'
                value={EditFormData.category}
              />
              {errors.category && (
                <p className='text-mainRed text-xs absolute -bottom-4 left-0 whitespace-nowrap'>
                  {errors.category}
                </p>
              )}
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-x-3 mt-4'>
            <div className='w-1/2 relative'>
              <label htmlFor='price' className='px-1'>
                Main Price
              </label>
              <input
                onChange={e => formOnChangeHandler(e)}
                type='text'
                name='mainPrice'
                id='price'
                className='w-full bg-[#dbdbdb] rounded-md px-3 py-1.5 outline-none'
                value={EditFormData.mainPrice}
              />
              {errors.mainPrice && (
                <p className='text-mainRed text-xs absolute -bottom-4 left-0 whitespace-nowrap'>
                  {errors.mainPrice}
                </p>
              )}
            </div>
            <div className='w-1/2 relative'>
              <label htmlFor='discound' className='px-1'>
                Discound
              </label>
              <input
                onChange={e => formOnChangeHandler(e)}
                type='text'
                name='discound'
                id='discound'
                className='w-full bg-[#dbdbdb] rounded-md px-3 py-1.5 outline-none'
                value={EditFormData.discound}
              />
              {errors.discound && (
                <p className='text-mainRed text-xs absolute -bottom-4 left-0 whitespace-nowrap'>
                  {errors.discound}
                </p>
              )}
            </div>
          </div>
          <div className='relative my-4'>
            <label htmlFor='description' className='px-1'>
              Description
            </label>
            <textarea
              onChange={e => formOnChangeHandler(e)}
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
          <div className='flex flex-col gap-y-2 my-2'>
            <label htmlFor='description' className='px-1 font-semibold'>
              Upload Product Image
            </label>
            <input
              type='file'
              multiple
              onChange={fileUploaderOnChangeHandler}
              name='img'
            />
          </div>
          <div className='w-full flex gap-x-2'>
            {previews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                style={{ width: '100px', marginRight: '10px' }}
              />
            ))}
          </div>
          <button
            onClick={e => editFormSubmitHandler(e)}
            className='bg-mainRed text-white px-4 py-2 rounded-md my-6 w-full'>
            Save Changes
          </button>
        </form>
      )}
      {searchedProducts[0] && (
        <div>
          {searchedProducts.map(product => (
            <div
              key={product._id}
              className='rounded-md p-2 w-full border border-[#bebebe] mt-3'>
              <div className='flex gap-x-2 items-center'>
                <p className='w-1/2'>
                  <span className='font-semibold'>Product Name: </span>
                  {product.name}
                </p>
                <p className='w-1/2'>
                  <span className='font-semibold'>Category: </span>
                  {product.category}
                </p>
              </div>
              <div className='flex gap-x-2 items-center'>
                <p className='w-1/2'>
                  <span className='font-semibold'>Main Price: </span>
                  {product.mainPrice}
                </p>
                <p className='w-1/2'>
                  <span className='font-semibold'>Discound: </span>
                  {product.discound}
                </p>
              </div>
              <div className='flex gap-x-2 items-center'>
                <p className='my-3'>
                  <span className='font-semibold'>Product Description: </span>
                  <span className='text-sm'>{product.desc}</span>
                </p>
              </div>
              <div className='flex justify-between items-center gap-3 mt-4'>
                <button
                  onClick={() => editHandler(product._id)}
                  className='text-white px-3 py-1.5 rounded-md bg-[#949494] w-1/3'>
                  Edit
                </button>
                <button
                  onClick={() => deleteHandler(product._id)}
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

export default Products
