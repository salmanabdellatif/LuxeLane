import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductList from '../components/ProductList'

test('renders product list', () => {
  const products = [
    { _id: '1', name: 'Product 1', desc: 'Description 1' },
    { _id: '2', name: 'Product 2', desc: 'Description 2' },
  ]
  render(<ProductList products={products} />)
  expect(screen.getByText('Product 1')).toBeInTheDocument()
  expect(screen.getByText('Product 2')).toBeInTheDocument()
})
