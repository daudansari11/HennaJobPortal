import React, { useEffect, useState } from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import OwnershipTypes from '../../components/ownership-types/OwnershipTypes'
import axios from 'axios';

const OwnershipTypesPage = () => {
  const [data, setData] = useState();

  const ownershipData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/ownership-type`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    ownershipData();
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/ownership-type/delete/${id}`
      );
      ownershipData()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Ownership Types" />            
            <h3 className='page-title'>Manage Ownership Types <small>Ownership Types</small></h3>
            <OwnershipTypes data={data} handleDelete={handleDelete}/>
      </div>
    </>
  )
}

export default OwnershipTypesPage