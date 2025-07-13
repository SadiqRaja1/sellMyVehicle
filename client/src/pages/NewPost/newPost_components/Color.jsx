import React from 'react'

const Color = () => {
  return (
    <div>
        <label className='block' htmlFor="color">Color</label>
        <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='color' id='color' />
    </div>
  )
}

export default Color