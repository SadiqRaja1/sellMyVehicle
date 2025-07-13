import React from 'react'

const Year = () => {
  return (
    <div>
        <label className='block' htmlFor="year">Registration Year</label>
        <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='year' id='year' />
    </div>
  )
}

export default Year