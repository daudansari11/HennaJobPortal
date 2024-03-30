import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import Jobs from "../../components/jobs/Jobs";
// import axios from "axios";

const JobsPage = () => {
  // const [data, setData] = useState();

  // const getJobData = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://job-panel-backend.vercel.app/api/job `
  //     );
  //     setData(res.data);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getJobData();
  // }, []);

  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Jobs" />
        <h3 className="page-title">
          Manage Jobs <small>Jobs</small>
        </h3>
        <Jobs />
      </div>
    </>
  );
};

export default JobsPage;
