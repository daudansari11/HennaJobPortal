import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import CareerLevels from '../../components/career-levels/CareerLevels'

const CareerLevelsPage = () => {
  return (
    <>
      <div className="pageWrapper">
            <PageBar title="Career Levels" />            
            <h3 className='page-title'>Manage Career Levels <small>Career Levels</small></h3>
            <CareerLevels />
      </div>
    </>
  )
}

export default CareerLevelsPage