import React from "react";
import AddNewVideoLanguage from "../../components/home-page-video/add-new-video-language/AddNewVideoLanguage";
import PageBar from "../../components/dashboard/page-bar/PageBar";

const AddNewVideoLanguagePage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Add Video language" />
        <AddNewVideoLanguage />
      </div>
    </>
  );
};

export default AddNewVideoLanguagePage;
