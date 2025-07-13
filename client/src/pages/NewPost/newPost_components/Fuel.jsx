import React from 'react'

const Fuel = () => {
  return (
    <div>
        <label className='block' htmlFor="fuel">Fuel_type</label>
        <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='fuel' id='fuel' />
    </div>
  )
}

export default Fuel