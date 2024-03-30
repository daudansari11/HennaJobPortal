import React, { useEffect, useState } from "react";
import AddLanguageLevel from "../../components/language-levels/add-language-level/AddLanguageLevel";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import axios from "axios";

const AddLanguageLevelPage = () => {
  const [data, setData] = useState();

  const getLanguageData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/language`
      );
      setData(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getLanguageData();
  }, []);
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Language Levels" />
        <h3 className="page-title">
          Manage Language Levels <small>Language Levels</small>
        </h3>
        <AddLanguageLevel data={data} />
      </div>
    </>
  );
};

export default AddLanguageLevelPage;
