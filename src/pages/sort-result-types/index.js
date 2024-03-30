import React from "react";
import SortResultTypes from "../../components/result-types/sortr-result-types/SortResultTypes";
import PageBar from "../../components/dashboard/page-bar/PageBar";

const SortResultTypesPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sort Result Types" />
        <SortResultTypes />
      </div>
    </>
  );
};

export default SortResultTypesPage;
