import React from 'react'

const DegreeTypesTable = () => {
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
                  <select id="degree_level_id" className="form-select" name="degree_level_id"><option value selected="selected">Select Degree Level</option><option value={1}>Non-Matriculation</option><option value={2}>Matriculation/O-Level</option><option value={3}>Intermediate/A-Level</option><option value={4}>Bachelors</option><option value={5}>Masters</option><option value={6}>MPhil/MS</option><option value={7}>PHD/Doctorate</option><option value={8}>Certification</option><option value={9}>Diploma</option><option value={10}>Short Course</option></select>

                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Degree Level"
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
                  <th>Degree Level</th>
                  <th>Degree Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td className="sorting_1">en</td>
                  <td>
                    <span>Non-Matriculation</span>
                  </td>
                  <td>
                    <span>Matric in Arts</span>
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
                <tr role="row" className="even">
                  <td className="sorting_1">en</td>
                  <td>
                    <span>Matriculation/O-Level	</span>
                  </td>
                  <td>
                    <span>A-Levels</span>
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

export default DegreeTypesTable