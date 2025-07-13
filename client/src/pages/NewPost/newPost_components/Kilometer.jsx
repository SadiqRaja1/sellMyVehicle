import React from 'react'

const Kilometer = () => {
  return (
    <div>
        <label className='block' htmlFor="kilometer">Kilometer Driven</label>
        <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='kilometer' id='kilometer' />
    </div>
  )
}

export default Kilometer