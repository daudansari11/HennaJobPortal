import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import CreateResultType from '../../components/result-types/create-result-type/CreateResultType'

const CreateResultTypePage = () => {
  return (
    <>
         <div className="pageWrapper">
            <PageBar title="Add Result Type" />
            <CreateResultType />
        </div>
    </>
  )
}

export default CreateResultTypePage