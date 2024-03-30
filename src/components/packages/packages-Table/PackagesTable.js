

import React from 'react';
import { Link } from "react-router-dom";

const PackagesTable = () => {
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
                  placeholder="Package Title"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Package price"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Package Num Days"
                />
              </td>

              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Package Num Listings"
                />
              </td>
             
              
              <td>
                <select
                  name="is_active"
                  className="form-select"
                >
                  <option value={1} selected="selected">Is Featured?</option>
                  <option value={2} >  Job Seeker</option>
                  <option value={3}>Employer</option>
                </select>
              </td>
              <td></td>
            </tr>
            <tr role="row" className="heading">
              <th>Title</th>
              <th>Price</th>
              <th>Num Days</th>
              <th>Num Listings</th>
              <th>For</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" className="odd">
              <td className="sorting_1">Basic</td>
             
              <td>9.99</td>
              <td>	30</td>
              <td>10</td>
              <td>job_seeker</td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                      >
                        Edit
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mark in Active
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr role="row" className="odd">
              <td className="sorting_1">Premium</td>
             
              <td>19.99</td>
              <td>	90</td>
              <td>30</td>
              <td>job_seeker</td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                      >
                        Edit
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mark in Active
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PackagesTable