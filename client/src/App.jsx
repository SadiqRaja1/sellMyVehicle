import React from 'react'
import "./App.css"
import {Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/about"
import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"

const App = () => {
  const location = useLocation();

  return (
        <Routes>

          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>            
          </Route>  

          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>

        </Routes>
  )
}

export default App