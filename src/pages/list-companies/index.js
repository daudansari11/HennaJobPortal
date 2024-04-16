import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import Companies from "../../components/companies/Companies";
import axios from "axios";

const CompaniesPage = () => {
  const [data, setData] = useState();

  const getCompanys = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/company/all?page=${page}`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };
  const getCompanys2 = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/company/all`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    getCompanys2(1);
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/company/delete/${id}`
      );
      getCompanys()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Companies" />
        <h3 className="page-title">
          Manage Companies <small>Companies</small>
        </h3>
        <Companies data={data} handleDelete={handleDelete} getCompanys={getCompanys}/>
      </div>
    </>
  );
};

export default CompaniesPage;
