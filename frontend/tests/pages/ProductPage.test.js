import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductPage from '../pages/ProductPage'

test('renders product page', () => {
  render(<ProductPage />)
  expect(screen.getByText('Product Details')).toBeInTheDocument()
})
