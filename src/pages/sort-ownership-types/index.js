import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import SortOwnershipTypes from '../../components/ownership-types/sort-ownership-types/SortOwnershipTypes'

const SortOwnershipTypesPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Sort Ownership Types" />
            <SortOwnershipTypes />
        </div>
    </>
  )
}

export default SortOwnershipTypesPage