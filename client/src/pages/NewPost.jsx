import { useState } from "react"
import axios from "axios"

const newPost = () => {

  const states = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];

  const [formData, setFormData] = useState({
    "vehicleType":"",
    "make":"",
    "model":"",
    "variant":"",
    "year":"",
    "fuel_Type":"",
    "alternate_Fuel":"none",
    "kilometer":"",
    "state":"",
    "city":"",
    "locality":"",
    "sellingPrice":"",
    "owner":"",
    "color":"",
    "transmission":"",
    "registration_Type":"",
    "insurance_show":"",
    "insurance_valid_Till":"",
    "seller_Comment":"",
    "image1":null,
    "image2":null,
    "image3":null,
    "image4":null,
    "image5":null,
    "image6":null,
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    try{

      let mainUrl = import.meta.env.VITE_BACKEND_URL;
      let data = new FormData()

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      })

      const res = axios.post(`${mainUrl}/post/vehicle`, data);
    }catch(error){
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const {name, value, type} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (parseInt(value) || 0) : value
    }))
  }

  const handleFileChange = (e) => {
    const {name, files} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files[0] || null
    }))
  }

  return (
    <>
        <form className='flex flex-col justify-center items-center my-5 text-gray-700 text-xl'>

          <div className='grid grid-cols-4 gap-4 border border-gray-300 rounded shadow px-20 py-6 w-4/5' >
            <h1 className='text-3xl col-span-4 text-center font-bold'>Enter Your Vehicle Details</h1>
            <hr  className='col-span-4 border-1'/>

            <div className='col-span-4 grid grid-cols-7 gap-4' >

                <div>
                  <label htmlFor="vehicleType">Vehicle type</label>
                  <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="vehicleType" id="vehicleType"
                  value={formData.vehicleType} onChange={handleChange}>
                    <option value="" disabled>--Select--</option>
                    <option value="Bike">Bike</option>
                    <option value="Car">Car</option>
                  </select>
                </div>

                <div className='col-span-2'>
                  <label className='block' htmlFor="make">Make</label>
                  <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='make' id='make' value={formData.make} onChange={handleChange}/>
                </div>

                <div className='col-span-2'>
                  <label className='block' htmlFor="model">Model</label>
                  <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='model' id='model' value={formData.model} onChange={handleChange} />              
                </div>

                <div className='col-span-2'>
                  <label className='block' htmlFor="variant">Variant</label>
                  <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='variant' id='variant' value={formData.variant} onChange={handleChange}/>
                </div>
            </div>

            <div>
              <label className='block' htmlFor="year">Registration Year</label>
              <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="number" name='year' id='year' value={formData.year} onChange={handleChange}/>
            </div>

            <div>
              <label className='block' htmlFor="kilometer">Kilometer Driven</label>
              <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="number" name='kilometer' id='kilometer'  value={formData.kilometer} onChange={handleChange}/>
            </div>

            <div>
              <label className='block' htmlFor="sellingPrice">Selling Price</label>
              <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="number" name='sellingPrice' id='sellingPrice'  value={formData.sellingPrice} onChange={handleChange}/>
            </div>
            
            <div>
              <label className='block' htmlFor="color">Color</label>
              <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='color' id='color' value={formData.color} onChange={handleChange}/>
            </div>

            <div className='col-span-4 grid grid-cols-5 gap-4'>

              <div>
                <label className='block' htmlFor="transmission">Transmission</label>
                  <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="transmission" id="transmission" value={formData.transmission} onChange={handleChange}>
                    <option value="" disabled>--Select--</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
              </div>

              <div>
                <label className='block' htmlFor="fuel">Fuel_type</label>
                  <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="fuel_Type" id="fuel_Type" value={formData.fuel_Type} onChange={handleChange}>
                    <option value="" disabled>--Select--</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                  </select>
              </div>

              <div>
                <label className='block' htmlFor="alternate_Fuel">Alternative Fuel</label>
                  <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="alternate_Fuel" id="alternate_Fuel" value={formData.alternate_Fuel} onChange={handleChange}>
                    <option value="none">none</option>
                    <option value="CNG">CNG</option>
                    <option value="LPG">LPG</option>
                  </select>
              </div>

              <div>
                <label className='block' htmlFor="owner">Owner</label>
                  <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="owner" id="owner"
                  value={formData.owner} onChange={handleChange}>
                    <option value="" disabled>--Select--</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                    <option value="Fourth or more">Fourth or more</option>
                  </select>
              </div>

              <div>
                <label className='block' htmlFor="registration_Type">Registration_type</label>
                  <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="registration_Type" id="registration_Type" value={formData.registration_Type} onChange={handleChange}>
                    <option value="" disabled>--Select--</option>
                    <option value="Individual">Individual</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Taxi">Taxi</option>
                  </select>
              </div>
            </div>
            

            <div className='col-span-4 grid grid-cols-6 gap-4'>
              <h4 className='h-full flex items-center text-3xl'>Insurance:</h4>
              <div className='col-span-3'>
                <label htmlFor="insurance_show">Show</label>
                <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="insurance_show" id="insurance_show" value={formData.insurance_show} onChange={handleChange}>
                  <option value="" disabled>--Select--</option>
                  <option value="Zero Depreciation">Zero Depreciation</option>
                  <option value="First-Party">First-Party</option>
                  <option value="Third-Party Insurance">Third-Party Insurance</option>
                  <option value="Expired">Expired</option>
                </select>
              </div>
              
              <div className='col-span-2'>
                <label htmlFor="insurance_valid_Till">Valid Till</label>
                <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="date" id='insurance_valid_Till' name='insurance_valid_Till' value={formData.insurance_valid_Till} onChange={handleChange}/>
              </div>
            </div>
            
            <div className='col-span-4 grid grid-cols-6 gap-4'>
              <h4 className='h-full flex items-center text-3xl'>Location:</h4>
                <div className='col-span-2'>
                    <label className='block' htmlFor="state">State</label>

                    <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="state" id="state" value={formData.state} onChange={handleChange}>
                      <option value="" disabled>--State--</option>
                      {states.map((state) => 
                        <option key={state} value={state}>{state}</option>
                      )}
                    </select>
                </div>

                <div className='col-span-2'>
                  <label className='block' htmlFor="city">City</label>
                  <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="city" id="city" type="text" value={formData.city} onChange={handleChange}/>
                </div>

                <div className=''>
                  <label className='block' htmlFor="locality">Locality</label>
                  <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="locality" id="locality" type="text" value={formData.locality} onChange={handleChange}/>
                </div>
            </div>
            
            <div className='col-span-4 grid grid-cols-6 gap-4'>
              <label className='h-full flex items-center text-3xl' htmlFor="seller_Comment">Seller Comment:</label>
              <textarea className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5 col-span-5' name="seller_Comment" id="seller_Comment" value={formData.seller_Comment} onChange={handleChange}></textarea>
            </div>

            <div className="col-span-4  grid grid-cols-3 gap-2">
              <div>
                <label className="block" htmlFor="image1">Vehicle Front Image</label>
                <input className="block w-full text-sm mt-1 text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-gray-50 focus:outline-none file:border file:border-gray-300 file:text-white file:bg-gray-700 file:rounded-tl-xl file:rounded-bl-lg file:text-md file:py-2 file:px-4 hover:file:bg-gray-500" type="file" id="image1" onChange={handleFileChange} name="image1"/>
              </div>

              <div>
                <label className="block" htmlFor="image2">Vehicle Left Image</label>
                <input className="block w-full text-sm mt-1 text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-gray-50 focus:outline-none file:border file:border-gray-300 file:text-white file:bg-gray-700 file:rounded-tl-xl file:rounded-bl-lg file:text-md file:py-2 file:px-4 hover:file:bg-gray-500" type="file" id="image2" onChange={handleFileChange} name="image2"/>
              </div>

              <div>
                <label className="block" htmlFor="image3">Vehicle Right Image</label>
                <input className="block w-full text-sm mt-1 text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-gray-50 focus:outline-none file:border file:border-gray-300 file:text-white file:bg-gray-700 file:rounded-tl-xl file:rounded-bl-lg file:text-md file:py-2 file:px-4 hover:file:bg-gray-500" type="file" id="image3" onChange={handleFileChange} name="image3"/>
              </div>

              <div>
                <label className="block" htmlFor="image4">Vehicle Back Image</label>
                <input className="block w-full text-sm mt-1 text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-gray-50 focus:outline-none file:border file:border-gray-300 file:text-white file:bg-gray-700 file:rounded-tl-xl file:rounded-bl-lg file:text-md file:py-2 file:px-4 hover:file:bg-gray-500" type="file" id="image4" onChange={handleFileChange} name="image4"/>
              </div>

              <div>
                <label className="block" htmlFor="image5">Vehicle Odameter Image</label>
                <input className="block w-full text-sm mt-1 text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-gray-50 focus:outline-none file:border file:border-gray-300 file:text-white file:bg-gray-700 file:rounded-tl-xl file:rounded-bl-lg file:text-md file:py-2 file:px-4 hover:file:bg-gray-500" type="file" id="image5" onChange={handleFileChange} name="image5"/>
              </div>

              <div>
                <label className="block" htmlFor="image6">Vehicle Engine Image</label>
                <input className="block w-full text-sm mt-1 text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-gray-50 focus:outline-none file:border file:border-gray-300 file:text-white file:bg-gray-700 file:rounded-tl-xl file:rounded-bl-lg file:text-md file:py-2 file:px-4 hover:file:bg-gray-500" type="file" id="image6" onChange={handleFileChange} name="image6"/>
              </div>

            </div>

            <div className="col-span-4 grid grid-cols-3">
              <button className="bg-indigo-600  col-start-2 text-white py-1 mx-10 rounded shadow shadow-gray-300 border hover:bg-indigo-700 active:scale-110" onClick={handleSubmit}>Post</button>
            </div>
          </div>
        </form>        
    </>
  )
}

export default newPost