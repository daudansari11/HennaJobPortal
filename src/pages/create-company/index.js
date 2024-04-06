import React, { useEffect, useState } from 'react'
import CreateCompany from '../../components/companies/create-company/CreateCompany'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import axios from 'axios'

const CreateCompanyPage = () => {
  const [data, setData] = useState({
    industrys: [],
    owners: [],
    contry: [],
    state: [],
    city: [],
  })
  const getAllData = async () => {
    const indus = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/industry`
    );
    const owner = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/ownership-type`
    );
    const resCountryData = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/countries`
    );
    // const states = await axios.get(
    //   `https://abaris-j-p-backend.vercel.app/api/states`
    // );
    const cities = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/cities`
    );
    setData({
      ...data,
      industrys: indus.data,
      owners: owner.data,
      contry: resCountryData.data,
      // state: states.data,
      city: cities.data
    })
  }
  useEffect(() => {
    getAllData()
  }, [])
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Add Company" />
        <CreateCompany dataAll={data} />
      </div>
    </>
  )
}

export default CreateCompanyPage