import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import Genders from "../../components/genders/Genders";
import axios from "axios";

const GendersPage = () => {
  const [data, setData] = useState();

  const getGenderData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/gender`
      );
      setData(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getGenderData();
  }, []);
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Genders" />
        <h3 className="page-title">
          Manage Genders <small>Genders</small>
        </h3>
        <Genders data={data} />
      </div>
    </>
  );
};

export default GendersPage;
