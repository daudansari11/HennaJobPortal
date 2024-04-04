import React, { useEffect, useState } from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import MaritalStatus from '../../components/marital-status/MaritalStatus'
import axios from 'axios';

const MaritalStatusPage = () => {
  const [data, setData] = useState();

  const getMaritals = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/marital-status/`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    getMaritals();
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/marital-status/delete/${id}`
      );
      getMaritals()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
      <div className="pageWrapper">
            <PageBar title="Marital Status" />            
            <h3 className='page-title'>Manage Marital Status <small>Marital Status</small></h3>
            <MaritalStatus data={data} handleDelete={handleDelete}/>
      </div>
       
    </>
  )
}

export default MaritalStatusPage