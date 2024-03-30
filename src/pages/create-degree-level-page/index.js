import React from 'react'
import CreateDegreeLevel from '../../components/degree-levels/create-degree-level/CreateDegreeLevel'
import PageBar from '../../components/dashboard/page-bar/PageBar'

const CreateDegreeLevelPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Add Degree Level" />
            <CreateDegreeLevel />
        </div>
    </>
  )
}

export default CreateDegreeLevelPage