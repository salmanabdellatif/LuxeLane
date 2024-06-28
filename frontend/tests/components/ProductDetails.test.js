import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductDetails from '../components/ProductDetails'

test('renders product details', () => {
  const product = {
    _id: '1',
    name: 'Product 1',
    desc: 'Description 1',
    mainPrice: 100,
    category: 'Category 1',
    inStockQty: 10,
  }
  render(<ProductDetails product={product} />)
  expect(screen.getByText('Product 1')).toBeInTheDocument()
  expect(screen.getByText('Description 1')).toBeInTheDocument()
  expect(screen.getByText('Category 1')).toBeInTheDocument()
})
