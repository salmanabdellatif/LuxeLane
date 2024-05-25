import React, { useState } from 'react'
import DBHeader from './components/DBHeader'
import Users from './components/Users'
import Categories from './components/Categories'
import Products from './components/Products'

const DashboardPage = () => {
  const [section, setSection] = useState('Users')
  return (
    <div>
      <DBHeader setSection={setSection} />
      {section === 'Users' ? (
        <Users />
      ) : section === 'Categories' ? (
        <Categories />
      ) : section === 'Products' ? (
        <Products />
      ) : null}
    </div>
  )
}

export default DashboardPage
