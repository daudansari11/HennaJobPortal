import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import CreateFunctionalArea from '../../components/functional-areas/create-functional-area/CreateFunctionalArea'

const CreateFunctionAreaPage = () => {
  return (
    <>
        
        <div className="pageWrapper">
            <PageBar title="Add Functional Area" />
            <CreateFunctionalArea />
        </div>
    </>
  )
}

export default CreateFunctionAreaPage