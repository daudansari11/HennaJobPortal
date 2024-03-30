import React from "react";
import SortCareerLevels from "../../components/career-levels/sort-career-levels/SortCareerLevels";
import PageBar from "../../components/dashboard/page-bar/PageBar";

const SortCareerLevelsPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sort Career Levels" />
        <SortCareerLevels />
      </div>
    </>
  );
};

export default SortCareerLevelsPage;
