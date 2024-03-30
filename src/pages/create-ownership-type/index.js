import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import CreateOwnershipTypes from '../../components/ownership-types/create-ownership-types/CreateOwnershipTypes'

const CreateOwnershipTypePage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Add Ownership Types" />
            <CreateOwnershipTypes />
        </div>
    </>
  )
}

export default CreateOwnershipTypePage