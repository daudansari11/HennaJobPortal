import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import AddCareerLevel from '../../components/career-levels/add-career-level/AddCareerLevel'

const CreateCareerLevelPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Add Career Level" />
            <AddCareerLevel />
        </div>
    </>
  ) 
}

export default CreateCareerLevelPage