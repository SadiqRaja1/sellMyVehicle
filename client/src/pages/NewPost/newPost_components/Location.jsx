import React from 'react'

const Location = () => {
    const states = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];
  return (
    <div className='col-span-4 grid grid-cols-6 gap-4'>

      <h4 className='h-full flex items-center text-3xl'>Location:</h4>

        <div className='col-span-2'>
            <label className='block' htmlFor="state">State</label>

            <select className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' name="state" id="state" defaultValue="">
                <option value="" disabled>--State--</option>
                {states.map((state) => 
                    <option value={state}>{state}</option>
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
  )
}

export default Location