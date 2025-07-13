import React from 'react'

const Fuel = () => {
  return (
    <>
      <div>
        <label className='block' htmlFor="fuel">Fuel_type</label>
          <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="vehicleType" id="vehicleType" defaultValue="">
                <option value="" disabled>--Select--</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
          </select>
      </div>
      <div>
        <label className='block' htmlFor="altFuel">Alternative Fuel</label>
          <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="altFuel" id="altFuel" defaultValue="none">
                <option value="none" selected="true">none</option>
                <option value="CNG">CNG</option>
                <option value="LPG">LPG</option>
          </select>
      </div>
    </>

  )
}

export default Fuel