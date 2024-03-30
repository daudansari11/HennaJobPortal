import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import SortMaritalStatus from '../../components/marital-status/sort-marital-status/SortMaritalStatus'

const SortMaritalStatusPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Sort Marital Status" />
            <SortMaritalStatus />
        </div>
    </>
  )
}

export default SortMaritalStatusPage