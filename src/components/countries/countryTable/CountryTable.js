
import React from 'react'
import { Link } from 'react-router-dom'

const CountryTable = () => {
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
                  <td rowSpan={1} colSpan={1}>
                    <select id="lang" className="form-control" name="lang">
                      <option value>Select Language</option>
                      <option value="ar">عربى</option>
                      <option value="en" selected="selected">
                        English
                      </option>
                      <option value="es">Español</option>
                      <option value="ur">اردو</option>
                    </select>
                  </td>
                  <td rowSpan={1} colSpan={1}>
                    <input
                      type="text"
                      className="form-control"
                      name="language_level"
                      id="language_level"
                      autoComplete="off"
                      placeholder="Country"
                    />
                  </td>
                  <td rowSpan={1} colSpan={1}>
                    <select
                      name="is_active"
                      id="is_active"
                      className="form-control"
                    >
                      <option value={-1}>Is Active?</option>
                      <option value={1} selected="selected">
                        Active
                      </option>
                      <option value={0}>In Active</option>
                    </select>
                  </td>
                </tr>
                <tr role="row" className="heading">
                  <th>
                    Language
                  </th>
                  <th>
                    Country
                  </th>
                  <th>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td className="sorting_1">en</td>
                  <td>
                    <span dir="ltr">Afghanistan</span>
                  </td>
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
                      <ul
                        className="dropdown-menu"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
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
                  <td className="sorting_1">en</td>
                  <td>
                    <span dir="ltr">Albania</span>
                  </td>
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
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                            <Link className="dropdown-item" to="/admin/edit-language-level">
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
                  <td className="sorting_1">en</td>
                  <td>
                    <span dir="ltr">Algeria</span>
                  </td>
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
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                          <Link className="dropdown-item" to="/admin/edit-language-level">
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
                </tr>
              </tbody>
            </table>
        </div>
    </>
  )
}

export default CountryTable