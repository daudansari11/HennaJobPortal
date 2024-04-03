import React, { useEffect, useState } from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import DegreeTypes from '../../components/degree-types/DegreeTypes'
import axios from 'axios';

const DegreeTypesPage = () => {
  const [data, setData] = useState();

  const getDegree = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/degree-type`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    getDegree();
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/degree-type/delete/${id}`
      );
      getDegree()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Degree Types" />            
            <h3 className='page-title'>Manage Degree Types <small>Degree Types</small></h3>
            <DegreeTypes data={data} handleDelete={handleDelete}/>
      </div>
    </>
  )
}

export default DegreeTypesPage