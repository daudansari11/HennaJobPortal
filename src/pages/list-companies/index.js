import React from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import Companies from "../../components/companies/Companies";

const CompaniesPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Companies" />
        <h3 className="page-title">
          Manage Companies <small>Companies</small>
        </h3>
        <Companies />
      </div>
    </>
  );
};

export default CompaniesPage;
