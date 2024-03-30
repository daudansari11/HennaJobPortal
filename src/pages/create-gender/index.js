import React from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import CreateGender from "../../components/genders/create-gender/CreateGender";


const CreateGenderPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Create Gender" />
        <CreateGender />
      </div>
    </>
  );
};

export default CreateGenderPage;
