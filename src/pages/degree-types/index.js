import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import DegreeTypes from '../../components/degree-types/DegreeTypes'

const DegreeTypesPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Degree Types" />            
            <h3 className='page-title'>Manage Degree Types <small>Degree Types</small></h3>
            <DegreeTypes />
      </div>
    </>
  )
}

export default DegreeTypesPage