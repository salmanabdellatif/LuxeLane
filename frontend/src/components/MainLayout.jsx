import Header from './Header'
import Footer from './Footer'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
