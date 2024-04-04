import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ResultTypes from "../../components/result-types/ResultTypes";
import axios from "axios";

const ResultTypesPage = () => {
  const [data, setData] = useState();
  const getResultdData = async () => {
    try {
      const res = await axios.get(
        ` https://abaris-j-p-backend.vercel.app/api/result-type`
      );
      setData(res.data);
    } catch (error) {
      alert("get result type data not found");
    }
  };

  useEffect(() => {
    getResultdData();
  }, []);
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Result Types" />
        <h3 className="page-title">
          Manage Result Types <small>Result Types</small>
        </h3>
        <ResultTypes data={data} getResultdData={getResultdData} />
      </div>
    </>
  );
};

export default ResultTypesPage;
