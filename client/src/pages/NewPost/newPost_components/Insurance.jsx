import React from 'react'

const Insurance = () => {
  return (
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
  )
}

export default Insurance