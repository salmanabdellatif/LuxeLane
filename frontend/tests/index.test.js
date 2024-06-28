import React from 'react'
import { render } from '@testing-library/react'
import Index from '../index'

test('renders index without crashing', () => {
  render(<Index />)
})
