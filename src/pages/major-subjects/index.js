import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import MajorSubjects from '../../components/major-subjects/MajorSubjects'

const MajorSubjectsPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Major Subjects" />            
            <h3 className='page-title'>Manage Major Subjects <small>Major Subjects</small></h3>
            <MajorSubjects />
      </div>
    </>
  )
}

export default MajorSubjectsPage