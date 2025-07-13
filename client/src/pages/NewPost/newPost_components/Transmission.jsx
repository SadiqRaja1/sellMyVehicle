import React from 'react'

const Transmission = () => {
  return (
    <div>
        <label className='block' htmlFor="transmission">Transmission</label>
        <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='transmission' id='transmission' />
    </div>
  )
}

export default Transmission