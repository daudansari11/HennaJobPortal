import React from 'react'

const SalaryPeriodsTable = () => {
  return (
    <>
        <div className="pageTable">
            <div className="tableLength">
              <div className="dataTables_length">
                <select
                  defaultValue={"10"}
                  className="form-select"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="record">records</span>
              </div>
            </div>
            <table className="table table-striped table-bordered ">
              <thead>
                <tr role="row" className="filter">
                  <td>
                    <select id="lang" className="form-control" defaultValue={"lang"}>
                      <option value>Select Language</option>
                      <option value="ar">عربى</option>
                      <option value="en" selected="selected">
                        English
                      </option>
                      <option value="es">Español</option>
                      <option value="ur">اردو</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Salary Periods"
                    />
                  </td>
                  <td>
                    <select
                    defaultValue={"Is Active"}
                      className="form-select"
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
                  <th>Language</th>
                  <th>Salary Periods</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td className="sorting_1">en</td>
                  <td>
                    <span>Divorced</span>
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
                      <ul
                        className="dropdown-menu"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
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
                    <span>	Married</span>
                  </td>
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
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
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

export default SalaryPeriodsTable