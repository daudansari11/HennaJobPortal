import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import CareerLevels from "../../components/career-levels/CareerLevels";
import axios from "axios";

const CareerLevelsPage = () => {
  const [careerData, setCareerData] = useState();

  const getCareerData = async () => {
    try {
      const resCareerData = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/carrier/`
      );
      setCareerData(resCareerData.data);
    } catch (error) {
      alert("error");
    }
  };
  useEffect(() => {
    getCareerData();
  }, []);

  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Career Levels" />
        <h3 className="page-title">
          Manage Career Levels <small>Career Levels</small>
        </h3>
        <CareerLevels careerData={careerData} getCareerData={getCareerData} />
      </div>
    </>
  );
};

export default CareerLevelsPage;
