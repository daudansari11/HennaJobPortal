import React, { useEffect, useState } from "react";
import AddLanguageLevel from "../../components/language-levels/add-language-level/AddLanguageLevel";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import axios from "axios";

const AddLanguageLevelPage = () => {
  
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Language Levels" />
        <h3 className="page-title">
          Manage Language Levels <small>Language Levels</small>
        </h3>
        <AddLanguageLevel  />
      </div>
    </>
  );
};

export default AddLanguageLevelPage;
