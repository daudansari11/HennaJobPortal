import React from 'react'
import CreateCompany from '../../components/companies/create-company/CreateCompany'
import PageBar from '../../components/dashboard/page-bar/PageBar'

const CreateCompanyPage = () => {
  return (
    <>
        <div className="pageWrapper">
        <PageBar title="Add Company" />
        <CreateCompany />
      </div>
    </>
  )
}

export default CreateCompanyPage