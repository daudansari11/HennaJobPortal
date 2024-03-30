import React from "react";
import { Link } from "react-router-dom";

const SeoListTable = ({ title }) => {
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
                />
              </td>
              <td style={{ width: "50%" }}>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                />
              </td>
              
            </tr>
            <tr role="row" className="heading">
              <th>Id</th>
              <th>{title}</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" className="odd">
              <td className="sorting_1">1</td>
              <td>
                <span>jobs</span>
              </td>

              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
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
                        to="/admin/edit-seo/6"
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

            <tr role="row" className="even">
              <td className="sorting_1">2</td>
              <td>
                <span>contact</span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
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
                        to="/admin/edit-career-level"
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
            <tr role="row" className="even">
              <td className="sorting_1">3</td>
              <td>
                <span> faq</span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
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
                        to="/admin/edit-career-level"
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
  );
};

export default SeoListTable;
