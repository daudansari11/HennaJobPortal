import React from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import EditCareerLevel from "../../components/career-levels/edit-career-level/EditCareerLevel";

const EditCareerLevelPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Edit Career Level" />
          <EditCareerLevel />
      </div>
    </>
  );
};

export default EditCareerLevelPage;
