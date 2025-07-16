import { useState } from "react"

const newPost = () => {

  const states = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];

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

            <div className='col-span-4 grid grid-cols-7 gap-4' >
                <div>
                  <label htmlFor="vehicleType">Vehicle type</label>
                  <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="vehicleType" id="vehicleType"
                  value={formData.vehicleType} onChange={handleChange}>
                    <option value="" disabled>--Select--</option>
                    <option value="bike">Bike</option>
                    <option value="car">Car</option>
                  </select>
                </div>
                <div className='col-span-2'>
                  <label className='block' htmlFor="make">Make</label>
                  <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='make' id='make' value={formData.vehicleName.make} onChange={handleChange}/>
                </div>
                <div className='col-span-2'>
                  <label className='block' htmlFor="model">Model</label>
                  <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='model' id='model' />              
                </div>
                <div className='col-span-2'>
                  <label className='block' htmlFor="variant">Variant</label>
                  <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='variant' id='variant' />
                </div>
            </div>

            <div>
              <label className='block' htmlFor="year">Registration Year</label>
              <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='year' id='year' />
            </div>

            <div>
              <label className='block' htmlFor="kilometer">Kilometer Driven</label>
              <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='kilometer' id='kilometer' />
            </div>
            
            <div>
              <label className='block' htmlFor="color">Color</label>
              <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='color' id='color' />
            </div>

            <div>
              <label className='block' htmlFor="transmission">Transmission</label>
              <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='transmission' id='transmission' />
            </div>

            <div>
              <label className='block' htmlFor="fuel">Fuel_type</label>
                <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="vehicleType" id="vehicleType">
                  <option value="" disabled>--Select--</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                </select>
            </div>
            <div>
              <label className='block' htmlFor="altFuel">Alternative Fuel</label>
                <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="altFuel" id="altFuel">
                  <option value="none">none</option>
                  <option value="CNG">CNG</option>
                  <option value="LPG">LPG</option>
                </select>
            </div>

            <div>
              <label className='block' htmlFor="owner">Owner</label>
              <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='owner' id='owner' />
            </div>

            <div>
              <label className='block' htmlFor="registration">Registration_type</label>
              <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='registration' id='registration' />
            </div>

            <div className='col-span-4 grid grid-cols-6 gap-4'>
              <h4 className='h-full flex items-center text-3xl'>Insurance:</h4>
              <div className='col-span-3'>
                <label htmlFor="show">Show</label>
                <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="vehicleType" id="vehicleType" defaultValue="">
                  <option value="" disabled>--Select--</option>
                  <option value="Zero Depreciation">Zero Depreciation</option>
                  <option value="First-Party">First-Party</option>
                  <option value="Third-Party Insurance">Third-Party Insurance</option>
                  <option value="Expired">Expired</option>
                </select>
              </div>
              
              <div className='col-span-2'>
                <label htmlFor="validTill">Valid Till</label>
                <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="date" id='validTill' name='validTill' />
              </div>
            </div>
            
            <div className='col-span-4 grid grid-cols-6 gap-4'>
              <h4 className='h-full flex items-center text-3xl'>Location:</h4>
                <div className='col-span-2'>
                    <label className='block' htmlFor="state">State</label>

                    <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="state" id="state" defaultValue="">
                      <option value="" disabled>--State--</option>
                      {states.map((state) => 
                        <option key={state} value={state}>{state}</option>
                      )}
                    </select>
                </div>

                <div className='col-span-2'>
                  <label className='block' htmlFor="city">City</label>
                  <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="city" id="city" type="text" />
                </div>

                <div className=''>
                  <label className='block' htmlFor="locality">Locality</label>
                  <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="locality" id="locality" type="text" />
                </div>
            </div>
            
            <div className='col-span-4 grid grid-cols-6 gap-4'>
              <label className='h-full flex items-center text-3xl' htmlFor="sellerComment">Seller Comment:</label>
              <textarea className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5 col-span-5' name="sellerComment" id="sellerComment"></textarea>
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