import React, { useEffect, useState } from "react";
import SalaryPeriods from "../../components/salary-periods/SalaryPeriods";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import axios from "axios";

const SalaryPeriodsPage = () => {
  const [data, setData] = useState();

  const sallaryPeriod = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/salary-period`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    sallaryPeriod();
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/salary-period/delete/${id}`
      );
      sallaryPeriod()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Salary Periods" />
        <h3 className="page-title">
          Manage Salary Periods <small>Salary Periods</small>
        </h3>
        <SalaryPeriods data={data} handleDelete={handleDelete}/>
      </div>
    </>
  );
};

export default SalaryPeriodsPage;
