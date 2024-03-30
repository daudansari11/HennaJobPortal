import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import OwnershipTypes from '../../components/ownership-types/OwnershipTypes'

const OwnershipTypesPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Ownership Types" />            
            <h3 className='page-title'>Manage Ownership Types <small>Ownership Types</small></h3>
            <OwnershipTypes />
      </div>
    </>
  )
}

export default OwnershipTypesPage