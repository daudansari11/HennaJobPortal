import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheck2Square } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { Link } from "react-router-dom";

const CompanyTable = ({data, handleDelete}) => {
  
  return (
    <>
      <div className="pageTable">
        <div className="tableLength">
          {/* <div className="dataTables_length">
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
          </div> */}
        </div>
        <table className="table table-striped table-bordered ">
          <thead>
            
            <tr role="row" className="heading">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Is Active</th>
              <th>Is Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {data &&
              data?.data?.map((item,i) => {
                return (
                  <tr key={item.id} role="row" className="odd">
                    <td className="sorting_1">{i +  1}</td>
                    <td className="sorting_1">{item?.name}</td>
                    <td>
                      <span dir="ltr">{item.email}</span>
                    </td>
                    <td>{item.is_active == 1 ? 'Yes' : 'No'}</td>
                    <td>{item.is_featured == 1 ? 'Yes' : 'No'}</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {/* {item.action} */}
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item"
                              to={`/admin/create-company/${item._id}`}
                            >
                              <CiEdit className="action_icons" />
                              Edit
                            </Link>
                          </li>
                          {/* <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={()=>{handleDelete(item._id)}}
                            >
                              <AiOutlineDelete className="action_icons" />
                              Delete
                            </a>
                          </li> */}
                          <li>
                            <a className="dropdown-item" href="#">
                              <BsCheck2Square className="action_icons" />
                              Mark in Active
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CompanyTable