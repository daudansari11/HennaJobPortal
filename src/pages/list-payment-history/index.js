import React from 'react'
import PageBar from '../../components/dashboard/page-bar/PageBar'
import ListPaymentHistory from '../../components/companies/list-payment-history/ListPaymentHistory'

const ListPaymentHistoryPage = () => {
  return (
    <>
        <div className="pageWrapper">
        <PageBar title="List Payment History" />
        <h3 className="page-title">
          Manage Payment History <small>Payment History</small>
        </h3>
        <ListPaymentHistory />
      </div>
    </>
  )
}

export default ListPaymentHistoryPage