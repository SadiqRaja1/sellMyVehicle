import React from 'react'
import { Outlet } from 'react-router-dom'
import "./AuthLayout.css"

const AuthLayout = () => {
  return (
    <div id='authMainDiv' className='min-h-screen w-full flex flex-col bg-blue-700 items-center justify-center'>
        <Outlet />
    </div>
  )
}

export default AuthLayout