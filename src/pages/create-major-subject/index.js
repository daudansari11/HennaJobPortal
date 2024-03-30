import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import CreateMajorSubjects from '../../components/major-subjects/create-major-subjects/CreateMajorSubjects'

const CreateMajorSubjectsPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Add Major Subject" />
            <CreateMajorSubjects />
        </div>
    </>
  )
}

export default CreateMajorSubjectsPage