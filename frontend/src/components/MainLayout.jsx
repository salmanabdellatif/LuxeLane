import Header from './Header'
import Footer from './Footer'
import React from 'react'

const MainLayout = ({ children, user, setUser }) => {
  return (
    <div>
      <Header user={user} setUser={setUser} />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
