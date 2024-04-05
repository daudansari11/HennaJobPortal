import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import Jobs from "../../components/jobs/Jobs";
import axios from "axios";

const JobsPage = () => {
  const [data, setData] = useState();

  const getJobs = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/jobs?page=${page}`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    getJobs(1);
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/jobs/delete/${id}`
      );
      getJobs()
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Jobs" />
        <h3 className="page-title">
          Manage Jobs <small>Jobs</small>
        </h3>
        <Jobs data={data} handleDelete={handleDelete} getJobs={getJobs}/>
      </div>
    </>
  );
};

export default JobsPage;
