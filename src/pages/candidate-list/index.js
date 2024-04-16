import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import CandidateListProfile from "../../components/candidateProfile/candidate-listProfile/CandidateListProfile";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Loaders } from "../Loaders";

const CandidateListPage = () => {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false)
  const getCandidatelistData2 = async (page) => {
    setLoader(true)
    try {
      const res = await axios.get(
        ` https://abaris-j-p-backend.vercel.app/api/candidate/all?page=${page}`
      );
      setData(res.data);
    } catch (error) { }
    setLoader(false)
  };
  const getCandidatelistData = async (page) => {
    setLoader(true)
    try {
      const res = await axios.get(
        ` https://abaris-j-p-backend.vercel.app/api/candidate/all`
      );
      setData(res.data);
    } catch (error) { }
    setLoader(false)
  };

  useEffect(() => {
    getCandidatelistData(1);
  }, []);


  const getCandidatelistDataFilter = async (val) => {
    setLoader(true)
    let url = `https://abaris-j-p-backend.vercel.app/api/candidate/filter`

    for (const key in val) {
      if (val[key].length > 0) {
        let newUrl = `${url}?${key}=${val[key]}`
        url = newUrl
      }
    }

    try {
      const res = await axios.get(
        `${url}`,
      );
      const clone = { data: [...res.data] }
      setData(clone)
    } catch (error) { }

    setLoader(false)
  };


  return (
    <>
      {loader && <Loaders />}
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
          getCandidatelistDataFilter={getCandidatelistDataFilter}
          data={data}
          getCandidatelistData={getCandidatelistData}
          getCandidatelistData2={getCandidatelistData2}
        />
      </div>
    </>
  );
};

export default CandidateListPage;
