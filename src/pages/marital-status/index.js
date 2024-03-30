import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import MaritalStatus from '../../components/marital-status/MaritalStatus'

const MaritalStatusPage = () => {
  return (
    <>
      <div className="pageWrapper">
            <PageBar title="Marital Status" />            
            <h3 className='page-title'>Manage Marital Status <small>Marital Status</small></h3>
            <MaritalStatus />
      </div>
       
    </>
  )
}

export default MaritalStatusPage