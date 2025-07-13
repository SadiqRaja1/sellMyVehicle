import React from 'react'

const Owner = () => {
  return (
    <div>
        <label className='block' htmlFor="owner">Owner</label>
        <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='owner' id='owner' />
    </div>
  )
}

export default Owner