import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import SortGender from '../../components/genders/sort-genders/SortGender'

const SortGenderPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Sort Gender" />
            <SortGender />
      </div>
    </>
  )
}

export default SortGenderPage