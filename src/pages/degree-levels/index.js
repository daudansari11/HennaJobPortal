import React, { useEffect, useState } from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import DegreeLevels from '../../components/degree-levels/DegreeLevels'
import axios from 'axios';

const DegreeLevelsPage = () => {
  const [data, setData] = useState();

  const getDegree = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/degree-level`
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
        `https://abaris-j-p-backend.vercel.app/api/degree-level/delete/${id}`
      );
      getDegree()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Degree Levels" />            
            <h3 className='page-title'>Manage Degree Levels <small>Degree Levels</small></h3>
            <DegreeLevels handleDelete={handleDelete} data={data} />
      </div>
    </>
  )
}

export default DegreeLevelsPage