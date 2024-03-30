import React from "react";
import SortLanguageLevels from "../../components/language-levels/sort-language-levels/SortLanguageLevels";
import PageBar from "../../components/dashboard/page-bar/PageBar";

const SortLanguageLevelsPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sort Language Levels" />
        <SortLanguageLevels />
      </div>
    </>
  );
};

export default SortLanguageLevelsPage;
