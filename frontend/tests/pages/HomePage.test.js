import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '../pages/HomePage'

test('renders home page', () => {
  render(<HomePage />)
  expect(screen.getByText('Welcome to Luxelane')).toBeInTheDocument()
})
