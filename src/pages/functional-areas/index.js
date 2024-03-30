import React from 'react';
import PageBar from '../../components/dashboard/page-bar/PageBar';
import FunctionalAreas from '../../components/functional-areas/FunctionalAreas';

const FunctionalAreasPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Functional Areas" />            
            <h3 className='page-title'>Manage Functional Areas <small>Functional Areas</small></h3>
            <FunctionalAreas />
      </div>
    </>
  )
}

export default FunctionalAreasPage