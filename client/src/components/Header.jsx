import React from 'react'
import mainLogo from "../assets/mainLogo.png"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className='flex h-14 bg-slate-800 items-center justify-between text-white md:px-6'>
        <img className='h-7' src={mainLogo} alt="mainLogo" />
        <nav className='text-xl'>
          <Link className='mr-3' to="/" >Home</Link>
          <Link className='mr-3' to="/singup">Singup</Link>
          <Link to="/login" >Login</Link>
        </nav>
      </header>
    </>
  )
}

export default Header