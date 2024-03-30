import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import LanguageLevels from "../../components/language-levels/LanguageLevels";
import axios from "axios";

const LangLevelsPage = () => {
  const [data, setData] = useState();

  const getLanguagelevelData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/language`
      );
      setData(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getLanguagelevelData();
  }, []);
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
