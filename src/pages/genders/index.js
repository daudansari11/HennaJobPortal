import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import Genders from '../../components/genders/Genders'

const GendersPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Genders" />            
            <h3 className='page-title'>Manage Genders <small>Genders</small></h3>
            <Genders />
      </div>
    </>
  )
}

export default GendersPage