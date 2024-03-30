import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import CreateJob from '../../components/jobs/create-job/CreateJob'

const CreateJobPage = () => {
  return (
    <>
        <div className="pageWrapper">
        <PageBar title="Add Job" />
        <CreateJob />
      </div>
    </>
  )
}

export default CreateJobPage