import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import SortMajorSubject from '../../components/major-subjects/sort-major-subject/SortMajorSubject'

const SortMajorSubjectsPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Sort Major Subject" />
            <SortMajorSubject />
      </div>
    </>
  )
}

export default SortMajorSubjectsPage