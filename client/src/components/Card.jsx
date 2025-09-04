import React from 'react'

const Card = ({userData}) => {
    console.log(userData)
  return (
    <>
        <div className='h-96 w-80 shadow-lg rounded-2xl hover:scale-105 cursor-pointer'>
            <img className='h-2/3 w-full rounded-t-2xl' src="https://imgd.aeplcdn.com/300x225/vimages/202507/4062319_80138_1_1753086720104.jpg?q=80" alt="carImage" />
            <h3 className='text-lg text-center font-bold'>2021 Mercedis Benz AMG Standard</h3>
            <div className='flex justify-around'>
                <p>Km. 21,000</p> |
                <p><i class="fa-solid fa-gear"></i>Manual</p> |
                <p><i class="fa-solid fa-gas-pump"></i>Petrol</p>
            </div>
            
            <div className='flex justify-around'>
                <p><i class="fa-solid fa-location-dot"></i>Tiruchy</p> |
                <p><i class="fa-solid fa-palette"></i>Red</p> |
                <p><i class="fa-solid fa-users"></i>2nd</p>
            </div>
            <h4 className='text-2xl text-center font-bold mt-3'>Rs. 12,00,000</h4>
        </div>


        <div className='h-80 w-64 border-black border-2'></div>
        <div className='h-80 w-64 border-black border-2'></div>

    </>
  )
}

export default Card