import React from "react";
import SalaryPeriods from "../../components/salary-periods/SalaryPeriods";
import PageBar from "../../components/dashboard/page-bar/PageBar";

const SalaryPeriodsPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Salary Periods" />
        <h3 className="page-title">
          Manage Salary Periods <small>Salary Periods</small>
        </h3>
        <SalaryPeriods />
      </div>
    </>
  );
};

export default SalaryPeriodsPage;
