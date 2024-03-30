import React from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewPackage from "../../components/packages/add-new-package/AddNewPackage";

const AddNewPackagePage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Add Package" />

        <AddNewPackage />
      </div>
    </>
  );
};

export default AddNewPackagePage;
