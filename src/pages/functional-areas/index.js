import React, { useEffect, useState } from 'react';
import PageBar from '../../components/dashboard/page-bar/PageBar';
import FunctionalAreas from '../../components/functional-areas/FunctionalAreas';
import axios from 'axios';

const FunctionalAreasPage = () => {
  const [data, setData] = useState();

  const functionalArea = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/functional-area`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    functionalArea();
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/functional-area/delete/${id}`
      );
      functionalArea()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Functional Areas" />            
            <h3 className='page-title'>Manage Functional Areas <small>Functional Areas</small></h3>
            <FunctionalAreas data={data} handleDelete={handleDelete}/>
      </div>
    </>
  )
}

export default FunctionalAreasPage