import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import LocationList from "../../components/location/locationList/LocationList";
import axios from "axios";

function LocationListPage() {
  const [data, setData] = useState();

  const getLocationData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/location/all`
      );
      setData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getLocationData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Location List</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageWrapper">
        <PageBar title="Location" />
        <h3 className="page-title">
          Manage Location <small>Location</small>
        </h3>
        <LocationList data={data} getLocationData={getLocationData} />
      </div>
    </>
  );
}

export default LocationListPage;
