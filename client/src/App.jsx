import React from 'react'
import "./App.css"
import {Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Singup from "./pages/Singup"

const App = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='pt-14 flex-grow bg-gray-100'>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/singup' element={<Singup />} />
        </Routes>

      </main>

      {/* footer will not load in login and singup page */}
      {location.pathname !== "/login" && location.pathname !== "/singup" && <Footer />}
    </div>


  )
}

export default App