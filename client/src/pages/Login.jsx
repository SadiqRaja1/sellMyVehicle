import React, { useState } from 'react'
import mainLogo from "../assets/mainLogo.png"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [userData, setUserData] = useState({
    email:"",
    password:"",
  })

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let url = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${url}/auth/login`, userData)
      localStorage.setItem("token", response.data.token);
      navigate("/")
    }catch(error){
      console.error(error)
    }
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData((prev) => {
      return{
        ...prev,
        [name]:value,
      }
    })
  }
  return (
    <>
      <form className='bg-white/10 backdrop-blur-md border border-white/30 p-6 shadow-lg text-white rounded-3xl'>
        <div className='w-full flex justify-center md:pr-5 mb-3'> 
        <Link to="/"><img className='h-7' src={mainLogo} alt="Main Logo" /></Link>
        </div>

        <h1 className='text-4xl text-center mb-3'>Login</h1>

        <div className='w-full flex bg-white/20 rounded px-2 py-3 mb-3'>
          <label className='text-xl ml-1' htmlFor="email">Email</label>
          <input className='px-2 py-0.5 ml-1 flex-grow focus:outline-none focus:bg-white/25 rounded' type="email" id='email' name="email" value={userData.email} onChange={handleChange}/>
        </div>

        <div className='w-full flex bg-white/20 rounded px-2 py-3 mb-3'>
          <label className='text-xl ml-1' htmlFor="password">Password</label>
          <input className='px-2 py-0.5 ml-1 flex-grow focus:outline-none focus:bg-white/25 rounded' type="password" id='password' name='password' value={userData.password} onChange={handleChange}/>
        </div>

        <div className='w-full flex justify-center'>
          <button className='bg-white/20 px-4 py-2 rounded active:scale-110 hover:bg-white/30' onClick={handleSubmit}>Login</button>
        </div>

        <p className='text-center'>Don't have an account? <Link className='text-blue-400' to="/Signup">Signup</Link></p>

      </form>
    </>
  )
}

export default Login