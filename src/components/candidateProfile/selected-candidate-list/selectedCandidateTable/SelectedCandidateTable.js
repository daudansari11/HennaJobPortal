import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

function SelectedCandidateTable() {
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
            <tr role="row" className="heading">
              <th className="candidate_name_heading">Name</th>
              <th>category</th>
              <th>Comp.Name</th>
              <th>Mobile</th>
              <th>Mofa No</th>
              <th>Visa No</th>
              <th>Passport No</th>
              <th>Flight Date</th>
              <th>Madical Status</th>
              <th>Employee Name</th>
              <th>Service Charge</th>
              <th>Passport Photo</th>
              <th>Agreement</th>

              <th>Video</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" className="odd">
              <td>
                <span>fsfsf</span>
              </td>
              <td>ksjfksj</td>
              <td>ksjfksj</td>
              <td>ksjfksj</td>
              <td>ksjfksj</td>
              <td>ksjfksj</td>
              <td>kfksjfksj</td>
              <td>ksjfksj</td>
              <td>ffsdgds</td>
              <td>fdsgsdg</td>
              <td>gdfbgdfb</td>
              <td>ghjg</td>

              <td>lgjlgjhl</td>
              <td>
                <button
                  className="btn btn-success "
                  type="button"
                  style={{ fontSize: "12px" }}
                >
                  <MdOutlineFileDownload /> Download
                </button>
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
                      <Link className="dropdown-item">Edit</Link>
                    </li>
                    <li>
                      {/* <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this Candidate?"
                        onConfirm={() => handleCandidateDelete(item?._id)}
                        icon={
                          <QuestionCircleOutlined
                            style={{
                              color: "red",
                            }}
                          />
                        }
                      >
                        <Button danger>Delete</Button>
                      </Popconfirm> */}

                      <Link>Delete</Link>
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
}

export default SelectedCandidateTable;
