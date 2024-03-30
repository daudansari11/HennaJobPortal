import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import CreateDegreeType from '../../components/create-degree-type/CreateDegreeType'

const CreateDegreeTypePage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Add Degree Type" />
            <CreateDegreeType />
        </div>
    </>
  )
}

export default CreateDegreeTypePage