import React from 'react'
import "./App.css"
import {Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"

const App = () => {
  return (
    <main className='pt-14 h-screen w-full bg-gray-100'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>

      <Footer />
    </main>

  )
}

export default App