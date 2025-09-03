import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
  console.log(data.data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>New Home</div>
  )
}

export default Home