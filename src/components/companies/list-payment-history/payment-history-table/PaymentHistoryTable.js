import React from 'react'
import { Link } from 'react-router-dom'

const PaymentHistoryTable = () => {
  return (
    <>
        <div className="pageTable">
        <div className="tableLength">
          <div className="dataTables_length">
            <select
              name="languageLevelDatatableAjax_length"
              className="form-select "
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>{" "}
            <span className="record">records</span>
          </div>
        </div>
        <table className="table table-striped table-bordered ">
          <thead>
            <tr role="row" className="filter">
              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Company Name"
                />
              </td>
              
             
              <td>
                <select
                  name="is_active"
                  className="form-select"
                >
                  <option value={1} selected="selected">Select Package</option>
                  <option value={1}>Basic</option>
                  <option value={0}>Premium</option>
                  <option value={0}>Free Package</option>
                </select>
              </td>
              
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr role="row" className="heading">
              <th>Name</th>
              <th>Package Title</th>
              <th>Payment Method</th>
              <th>Packaging Start Date</th>
              <th>Packaging End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" className="odd">
              <td className="sorting_1">Abaris Softech Pvt Ltd</td>
             
              <td>	Free package</td>
              <td>	Paypal</td>
              <td>	31-03-2023</td>
              <td>	10-04-2023</td>
              
            </tr>
           
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PaymentHistoryTable