import React from 'react'

const Insurance = () => {
  return (
    <div>
        <label className='block' htmlFor="insurance">Insurance</label>
        <input className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5' type="text" name='insurance' id='insurance' />
    </div>
  )
}

export default Insurance