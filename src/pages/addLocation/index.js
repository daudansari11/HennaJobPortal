import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageBar from "../../components/dashboard/page-bar/PageBar";

import AddLocation from "../../components/location/locationList/addLocation/AddLocation";
import axios from "axios";

function AddLocationPage() {
  const [allState, setAllState] = useState({
    country_id: '',
    states_id: '',
    city_id: '',
  })

  const getAllData = async () => {

    const resCountryData = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/countries`
    );

    const state = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/states`
    );

    const citie = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/cities`
    );


    setAllState({
      ...allState,
      country_id: resCountryData.data,
      states_id: state.data.data,
      city_id: citie.data,
    });
  }
  useEffect(() => {
    getAllData()
  }, [])
  return (
    <>
      <Helmet>
        <title>Add Location | job Portal HENNA</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageWrapper">
        <PageBar title="Add Location" />

        <AddLocation allState={allState}/>
      </div>
    </>
  );
}

export default AddLocationPage;
