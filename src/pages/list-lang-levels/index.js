import React from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import LanguageLevels from "../../components/language-levels/LanguageLevels";

const LangLevelsPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Language Levels" />
        <h3 className="page-title">
          Manage Language Levels <small>Language Levels</small>
        </h3>
        <LanguageLevels />
      </div>
    </>
  );
};

export default LangLevelsPage;
