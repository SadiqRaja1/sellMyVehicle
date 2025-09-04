import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "../components/Card"

const Home = () => {
  const [data, setData] = useState([]);

  const backed_URL = import.meta.env.VITE_BACKEND_URL;
  const fetchData = async () => {
    try {
      const response = await axios.get(`${backed_URL}/dashboard/data`);
      setData(response.data);
    }catch {
      console.error("Error in getting data from backend");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full h-screen justify-center flex'>
      <div className='xl:w-5/6 w-full h-full flex justify-around pt-6'>
        <Card userData={data}/>
      </div>
    </div>
  )
}

export default Home