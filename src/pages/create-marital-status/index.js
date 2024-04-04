import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import CreateMaritalStatus from '../../components/marital-status/create-marital-status/CreateMaritalStatus'

const CreateMaritalStatusPage = () => {
  
  return (
    <>
         <div className="pageWrapper">
            <PageBar title="Add Marital Status" />
            <CreateMaritalStatus />
        </div>
    </>
  )
}

export default CreateMaritalStatusPage