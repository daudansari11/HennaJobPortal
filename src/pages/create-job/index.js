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
    try {
      const skill = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/job-skills`
      );
      setAllState({ ...allState, skills_id: skill.data });
      const resCountryData = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/countries`
      );
      setAllState({ ...allState, country_id: resCountryData.data });
    } catch (error) {
      alert("Error");
    }
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