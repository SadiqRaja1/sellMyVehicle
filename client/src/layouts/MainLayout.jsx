import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='pt-14 flex-grow bg-gray-100'>
        <Outlet />
      </main>
      <Footer />
    </div>


  )
}

export default MainLayout