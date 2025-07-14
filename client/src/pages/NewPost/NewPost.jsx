import VehicleName from "./newPost_components/Name"
import Year from "./newPost_components/Year"
import Fuel from "./newPost_components/Fuel"
import Kilometer from "./newPost_components/Kilometer"
import Color from "./newPost_components/Color"
import Insurance from "./newPost_components/Insurance"
import Transmission from "./newPost_components/Transmission"
import Owner from "./newPost_components/Owner"
import Registration from "./newPost_components/Registration"
import Location from "./newPost_components/Location"
import SellerComment from "./newPost_components/Comment"
import { useState } from "react"

const newPost = () => {

  const [formData, setFormData] = useState({
    "vehicleType":"",

    "vehicleName":{
      "make":"",
      "model":"",
      "variant":""
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      console.log(formData)
    }catch(error){
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name] : value
    })
  }
  return (
    <>
        <form className='flex flex-col justify-center items-center my-5 text-gray-700 text-xl'>

          <div className='grid grid-cols-4 gap-4 border border-gray-300 rounded shadow px-20 py-6 w-4/5' >
            <h1 className='text-3xl col-span-4 text-center font-bold'>Enter Your Vehicle Details</h1>
            <hr  className='col-span-4 border-1'/>

            <VehicleName formData={formData} handleChange={handleChange} />
            <Year />
            <Kilometer />
            <Color />
            <Transmission />
            <Fuel />
            <Owner />
            <Registration />
            <Insurance />
            <Location />
            <SellerComment />

            <div className="col-span-4 grid grid-cols-3">
              <button className="bg-indigo-600  col-start-2 text-white py-1 mx-10 rounded shadow shadow-gray-300 border hover:bg-indigo-700 active:scale-110" onClick={handleSubmit}>Post</button>
            </div>
          </div>
        </form>        
    </>
  )
}

export default newPost