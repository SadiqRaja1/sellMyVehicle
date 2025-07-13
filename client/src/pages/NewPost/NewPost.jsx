import VehicleName from "./newPost_components/Name"
import Year from "./newPost_components/Year"
import Fuel from "./newPost_components/Fuel"
import Kilometer from "./newPost_components/Kilometer"
import Color from "./newPost_components/Color"
import Insurance from "./newPost_components/Insurance"
import Transmission from "./newPost_components/Transmission"
import Owner from "./newPost_components/Owner"
import Registration from "./newPost_components/Registration"
import Location from "./newPost_components/Location"

const newPost = () => {
  return (
    <>
        <form className='flex flex-col justify-center items-center mt-5 text-gray-700 text-xl'>

          <div className='grid grid-cols-4 gap-4 border border-gray-300 rounded shadow px-20 py-6 w-4/5' >
            <h1 className='text-3xl col-span-4 text-center font-bold'>Enter Your Vehicle Details</h1>
            <hr  className='col-span-4 border-1'/>

            <VehicleName />
            <Year />
            <Kilometer />
            <Color />
            <Transmission />
            <Fuel />
            <Owner />
            <Registration />
            <Insurance />
            <Location />

          </div>
        </form>        
    </>
  )
}

export default newPost