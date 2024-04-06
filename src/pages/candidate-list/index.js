import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import CandidateListProfile from "../../components/candidateProfile/candidate-listProfile/CandidateListProfile";
import { Helmet } from "react-helmet";
import axios from "axios";

const CandidateListPage = () => {
  const [data, setData] = useState();

  const getCandidatelistData2 = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/candidate?page=${page}`
      );
      setData(res.data);
    } catch (error) {}
  };
  const getCandidatelistData = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/candidate`
      );
      setData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getCandidatelistData(1);
  }, []);

  return (
    <>
      <Helmet>
        <title>Candidate List | job portal</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageWrapper">
        <PageBar title="Candidate" />
        <h3 className="page-title">
          List Candidate <small>Candidate</small>
        </h3>
        <CandidateListProfile
          data={data}
          getCandidatelistData={getCandidatelistData}
          getCandidatelistData2={getCandidatelistData2}
        />
      </div>
    </>
  );
};

export default CandidateListPage;
