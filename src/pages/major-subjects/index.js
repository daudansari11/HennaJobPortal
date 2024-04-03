import React, { useEffect, useState } from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import MajorSubjects from '../../components/major-subjects/MajorSubjects'
import axios from 'axios';

const MajorSubjectsPage = () => {
  const [data, setData] = useState();

  const getMajorSub = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/major-subject`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    getMajorSub();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/major-subject/delete/${id}`
      );
      getMajorSub()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Major Subjects" />
        <h3 className='page-title'>Manage Major Subjects <small>Major Subjects</small></h3>
        <MajorSubjects data={data} handleDelete={handleDelete}/>
      </div>
    </>
  )
}

export default MajorSubjectsPage