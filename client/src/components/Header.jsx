import React from 'react'
import mainLogo from "../assets/mainLogo.png"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className='fixed w-full z-50 top-0 left-0 right-0 flex h-14 bg-slate-800 items-center justify-between text-white md:px-6'>
        <img className='h-7' src={mainLogo} alt="mainLogo" />
        <nav className='text-xl'>
          <Link className='mr-3' to="/" >Home</Link>
          <Link className='mr-3' to="/signup">Signup</Link>
          <Link to="/login" >Login</Link>
        </nav>
      </header>
    </>
  )
}

export default Header