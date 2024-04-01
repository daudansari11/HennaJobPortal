import React from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddCareerLevel from "../../components/career-levels/add-career-level/AddCareerLevel";
import { useParams } from "react-router-dom";

const CreateCareerLevelPage = () => {
  const params = useParams();
  return (
    <>
      <div className="pageWrapper">
        <PageBar
          title={params.id ? "Update Career level" : "Add Career Level"}
        />
        <AddCareerLevel />
      </div>
    </>
  );
};

export default CreateCareerLevelPage;
