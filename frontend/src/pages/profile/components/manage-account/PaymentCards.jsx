import React, { useState } from 'react'
import { MdOutlineEditLocation } from 'react-icons/md'
import { MdDeleteForever } from 'react-icons/md'

// luhn algorithm to validate credit card number
const luhnCheck = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x))
  let sum = arr.reduce((acc, val, i) => {
    if (i % 2 !== 0) {
      val = val * 2
      if (val > 9) {
        val = val - 9
      }
    }
    return acc + val
  }, 0)
  return sum % 10 === 0
}
// form validation
const validateCreditCardForm = formData => {
  const errors = {}
  if (!formData.cardNumber.trim() || !luhnCheck(formData.cardNumber)) {
    errors.cardNumber = 'Invalid card number'
  }
  if (!formData.cardHolder.trim()) {
    errors.cardHolder = 'Card holder name is required'
  }
  const currentYear = new Date().getFullYear() % 100
  const currentMonth = new Date().getMonth() + 1
  if (!formData.MM || formData.MM < 1 || formData.MM > 12) {
    errors.MM = 'Invalid expiry month'
  }
  if (
    !formData.YY ||
    formData.YY < currentYear ||
    formData.YY > currentYear + 20
  ) {
    errors.YY = 'Invalid expiry year'
  } else if (formData.YY === currentYear && formData.MM < currentMonth) {
    errors.MM = 'Expiry month must be in the future'
  }
  if (!formData.CVV || !/^\d{3}$/.test(formData.CVV)) {
    errors.CVV = 'Invalid CVV'
  }
  return errors
}
// geenerate temporary id
const genId = () => {
  return Math.floor(Math.random() * 10)
}

const PaymentCards = () => {
  const [errors, setErrors] = useState({})
  // temp card data
  const [savedCards, setSavedCards] = useState([
    {
      _id: '001',
      cardHolder: 'john doe',
      cardNumber: '5401991866596921',
      YY: '27',
      MM: '05',
      CVV: '123',
    },
    {
      _id: '002',
      cardHolder: 'john doe',
      cardNumber: '5401991866596921',
      YY: '27',
      MM: '05',
      CVV: '123',
    },
    {
      _id: '003',
      cardHolder: 'john doe',
      cardNumber: '5401991866596921',
      YY: '27',
      MM: '05',
      CVV: '123',
    },
  ])

  const [formData, setFormData] = useState({
    cardHolder: '',
    cardNumber: '',
    MM: '',
    YY: '',
    CVV: '',
    _id: genId(),
  })

  const onChangeHandler = e => {
    e.preventDefault()
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    const validationErrors = validateCreditCardForm(formData)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      if (savedCards.filter(add => add._id === formData._id)) {
        // delete old card data -> when you edit it
        setSavedCards(prev => prev.filter(add => add._id !== formData._id))
      }
      setSavedCards(prev => [...prev, formData])
      setFormData({
        cardHolder: '',
        cardNumber: '',
        MM: '',
        YY: '',
        CVV: '',
        _id: genId(),
      })
    }
  }

  const editHandler = _id => {
    setFormData(...savedCards.filter(add => add._id === _id))
  }

  const deleteHandler = _id => {
    setSavedCards(prev => prev.filter(add => add._id !== _id))
  }

  return (
    <div className='rounded-md mt-2 py-5 px-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-10 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {savedCards.map((card, i) => (
          <div
            key={i}
            className='p-2 rounded-md bg-[#ececec] border border-[#585858] overflow-hidden text-sm relative'>
            <div className='absolute right-0 top-0 flex items-center gap-1 p-1'>
              <MdOutlineEditLocation
                className='w-5 h-5 text-[#4A90E2] cursor-pointer'
                onClick={() => editHandler(card._id)}
              />
              <MdDeleteForever
                className='w-5 h-5 text-[#D11A2A] cursor-pointer'
                onClick={() => deleteHandler(card._id)}
              />
            </div>
            <h3>{card.cardHolder}</h3>
            <p>
              {card.cardNumber.substring(0, 4)}****
              {card.cardNumber.substring(12, 16)}
            </p>
            <p>
              {card.MM} - {card.YY}
            </p>
            <p>cvv : {card.CVV}</p>
          </div>
        ))}
      </div>
      <h1 className='text-mainRed font-semibold mt-5 text-lg'>Add New Card</h1>
      <form action='submit' className='mx-auto'>
        <div className='my-3 space-y-2 relative'>
          <label className='text-sm'>Card Holder</label>
          <input
            onChange={e => onChangeHandler(e)}
            name='cardHolder'
            value={formData.cardHolder}
            type='text'
            className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
          />
          {errors.cardHolder && (
            <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
              *{errors.cardHolder}
            </p>
          )}
        </div>
        <div className='my-3 space-y-2 relative'>
          <label className='text-sm'>Card Number</label>
          <input
            onChange={e => onChangeHandler(e)}
            maxLength='16'
            name='cardNumber'
            value={formData.cardNumber}
            type='text'
            className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
          />
          {errors.cardNumber && (
            <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
              *{errors.cardNumber}
            </p>
          )}
        </div>
        <div className='flex justify-between items-center gap-x-2 mb-3'>
          <div className='my-3 space-y-2 relative'>
            <label className='text-sm'>MM</label>
            <input
              onChange={e => onChangeHandler(e)}
              maxLength='2'
              value={formData.MM}
              name='MM'
              type='text'
              className=' w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
            {errors.MM && (
              <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
                *{errors.MM}
              </p>
            )}
          </div>
          <div className='my-3 space-y-2 relative'>
            <label className='text-sm'>YY</label>
            <input
              onChange={e => onChangeHandler(e)}
              maxLength='2'
              value={formData.YY}
              name='YY'
              type='text'
              className=' w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
            {errors.YY && (
              <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
                *{errors.YY}
              </p>
            )}
          </div>
          <div className='my-3 space-y-2 relative'>
            <label className='text-sm'>CVV</label>
            <input
              onChange={e => onChangeHandler(e)}
              maxLength='3'
              name='CVV'
              value={formData.CVV}
              type='text'
              className='w-full bg-[#ebebeb] px-3 py-2 rounded-md outline-none'
            />
            {errors.CVV && (
              <p className='text-mainRed text-xs absolute -bottom-4 left-1'>
                *{errors.CVV}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={e => onSubmitHandler(e)}
          type='submit'
          className='bg-mainRed text-white font-semibold py-2 px-4 rounded-md w-full'>
          Save Card
        </button>
      </form>
    </div>
  )
}

export default PaymentCards
