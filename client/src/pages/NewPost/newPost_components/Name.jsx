import React from 'react'

const VehiName = () => {
  return (
    <div className='col-span-4 grid grid-cols-3 gap-4' >
        <div>
            <label className='block' htmlFor="make">Make</label>
            <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='make' id='make' />
        </div>
        <div>
            <label className='block' htmlFor="model">Model</label>
            <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='model' id='model' />              
        </div>
        <div>
            <label className='block' htmlFor="variant">Variant</label>
            <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='variant' id='variant' />
        </div>
    </div>
)
}

export default VehiName