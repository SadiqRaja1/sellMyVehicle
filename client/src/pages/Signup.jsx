import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import mainLogo from "../assets/mainLogo.png"
import axios from "axios"

const Signup = () => {
  const [userData, setUserData] = useState({
    name :"",
    email :"",
    password : "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passMismatch, setPassMismatch] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(userData.password !== confirmPassword){
      setPassMismatch(true)
      setTimeout(() => {
        setPassMismatch(false)
      }, 2000);
      return
    }
    try{
      let url=import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${url}/user/register`, userData);
      console.log("User created")
      navigate("/login")
    }catch(error){
      console.error("Some Error occured:", error)
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData((prev) => {
      return{
        ...prev,
        [name]: value
      }
    })
  }
  return (
    <>
      {passMismatch && <p className='bg-rose-500 text-white px-4 py-2 mt-1 rounded-lg top-0 absolute'>Password Mismatch</p> }

      <form className='bg-white/10 backdrop-blur-md border border-white/30 p-6 shadow-lg text-white rounded-3xl'>
        <div className='w-full flex justify-center md:pr-5 mb-3'> 
        <img className='h-7' src={mainLogo} alt="Main Logo" />
        </div>

        <h1 className='text-4xl text-center mb-3'>Signup</h1>

        <div className='w-full flex bg-white/20 rounded px-2 py-3 mb-3'>
          <label className='text-xl ml-1' htmlFor="name">Name</label>
          <input className='px-2 py-0.5 ml-1 flex-grow focus:outline-none focus:bg-white/25 rounded' type="text" id='name' name='name' value={userData.name} onChange={handleChange}/>
        </div>

        <div className='w-full flex bg-white/20 rounded px-2 py-3 mb-3'>
          <label className='text-xl ml-1' htmlFor="email">Email</label>
          <input className='px-2 py-0.5 ml-1 flex-grow focus:outline-none focus:bg-white/25 rounded' type="email" id='email' name="email" value={userData.email} onChange={handleChange}/>
        </div>

        <div className='w-full flex bg-white/20 rounded px-2 py-3 mb-3'>
          <label className='text-xl ml-1' htmlFor="password">Password</label>
          <input className='px-2 py-0.5 ml-1 flex-grow focus:outline-none focus:bg-white/25 rounded' type="password" id='password' name='password' value={userData.password} onChange={handleChange}/>
        </div>

        <div className='w-full flex bg-white/20 rounded px-2 py-3 mb-3 '>
          <label className='text-xl ml-1' htmlFor="confirmPassword">Confirm Password</label>
          <input className='px-2 py-0.5 ml-1 flex-grow focus:outline-none focus:bg-white/25 rounded' type="password" id='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
        </div>

        <div className='w-full flex justify-center'>
          <button className='bg-white/20 px-4 py-2 rounded active:scale-110 hover:bg-white/30' onClick={handleSubmit}>Register</button>
        </div>

        <p className='text-center'>Already have an account? <Link className='text-blue-400' to="/login" >Login</Link></p>

      </form>
    </>
  )
}

export default Signup