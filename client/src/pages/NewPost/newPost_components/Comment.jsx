import React from 'react'

const Comment = () => {
  return (
    <div className='col-span-4 grid grid-cols-6 gap-4'>
        <label className='h-full flex items-center text-3xl' htmlFor="sellerComment">Seller Comment:</label>
        <textarea className='w-full focus:outline-0 border border-gray-400 rounded px-1 py-1.5 col-span-5' name="sellerComment" id="sellerComment"></textarea>
    </div>
  )
}

export default Comment