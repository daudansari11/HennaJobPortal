import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import CreateOwnershipTypes from '../../components/ownership-types/create-ownership-types/CreateOwnershipTypes'
import CreateSalaryPeriod from '../../components/salary-periods/create-salary-period/CreateSalaryPeriod'

const CreateSalaryPeriodPage = () => {
  return (
    <>
         <div className="pageWrapper">
            <PageBar title="Add Salary Period" />
            <CreateSalaryPeriod />
        </div>
    </>
  )
}

export default CreateSalaryPeriodPage