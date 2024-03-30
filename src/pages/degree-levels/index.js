import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import DegreeLevels from '../../components/degree-levels/DegreeLevels'

const DegreeLevelsPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Degree Levels" />            
            <h3 className='page-title'>Manage Degree Levels <small>Degree Levels</small></h3>
            <DegreeLevels />
      </div>
    </>
  )
}

export default DegreeLevelsPage