import React from "react";
import EditLanguageLevel from "../../components/language-levels/edit-language-level/EditLanguageLevel";
import PageBar from "../../components/dashboard/page-bar/PageBar";

const EditLanguageLevelPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Edit Language Level" />
        <EditLanguageLevel />
      </div>
    </>
  );
};

export default EditLanguageLevelPage;
