import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import ResultTypes from '../../components/result-types/ResultTypes'

const ResultTypesPage = () => {
  return (
    <>
        <div className="pageWrapper">
          <PageBar title="Result Types" />            
          <h3 className='page-title'>Manage Result Types <small>Result Types</small></h3>
          <ResultTypes />
      </div>
    </>
  )
}

export default ResultTypesPage