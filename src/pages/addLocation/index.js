import React from "react";
import { Helmet } from "react-helmet";
import PageBar from "../../components/dashboard/page-bar/PageBar";

import AddLocation from "../../components/location/locationList/addLocation/AddLocation";

function AddLocationPage() {
  return (
    <>
      <Helmet>
        <title>Add Location | job Portal HENNA</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageWrapper">
        <PageBar title="Add Location" />

        <AddLocation />
      </div>
    </>
  );
}

export default AddLocationPage;
