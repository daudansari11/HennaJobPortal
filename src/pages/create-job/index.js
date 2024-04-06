import React, { useEffect, useState } from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import CreateJob from '../../components/jobs/create-job/CreateJob'
import axios from 'axios'

const CreateJobPage = () => {
  const [allState, setAllState] = useState({
    skills_id: '',
    country_id: '',
    states_id: '',
    city_id: '',
    currency_id: '',
    salery_periods_id: '',
    carrier_level_id: '',
    functional_area_id: '',
    job_type_id: '',
    job_shift_id: '',
    positions: '',
    gender_id: '',
    degree_level_id: '',
    job_experience: '',
  })

  const getAllData = async () => {
    const skill = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/job-skills`
    );

    const resCountryData = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/countries`
    );

    const state = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/states`
    );

    const citie = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/cities`
    );

    const resCareerData = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/carrier/`
    );

    const salary = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/salary-period`
    );

    const functional = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/functional-area`
    );

    const jobtype = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/job-type`
    );

    const jobshift = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/job-shift`
    );

    const gender = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/gender`
    );

    const position = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/position/`
    );

    const degreLevel = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/degree-level`
    );

    const jobExp = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/job-experience`
    );
    const currenc = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/currency/`
    );
    const company = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/company`
    );

    setAllState({
      ...allState,
      skills_id: skill.data,
      country_id: resCountryData.data,
      states_id: state.data.data,
      city_id: citie.data,
      salery_periods_id:salary.data,
      carrier_level_id:resCareerData.data,
      functional_area_id:functional.data,
      job_type_id:jobtype.data,
      job_shift_id:jobshift.data,
      gender_id:gender.data,
      positions:position.data,
      degree_level_id:degreLevel.data,
      job_experience:jobExp.data,
      currency_id:currenc.data,
      company_id:company.data?.data,
    });
  }
  useEffect(() => {
    getAllData()
  }, [])
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Add Job" />
        <CreateJob allState={allState} />
      </div>
    </>
  )
}

export default CreateJobPage