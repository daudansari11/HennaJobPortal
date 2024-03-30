import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import SortSalaryPeriods from '../../components/salary-periods/sort-salary-periods/SortSalaryPeriods'

const SortSalaryPeriodsPage = () => {
  return (
    <>
        <div className="pageWrapper">
            <PageBar title="Sort Salary Periods" />
            <SortSalaryPeriods />
        </div>
    </>
  )
}

export default SortSalaryPeriodsPage