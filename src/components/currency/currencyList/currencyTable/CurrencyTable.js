import React from "react";
import { Link } from "react-router-dom";

function CurrencyTable() {
  return (
    <div className="pageTable">
      <div className="tableLength">
        <div className="dataTables_length">
          <select className="form-select">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span className="record">records</span>
        </div>
      </div>
      <table className="table table-striped table-bordered ">
        <thead>
          <tr role="row" className="filter">
            <td>
              <select id="lang" className="form-control">
                <option>Select Language</option>
                <option>عربى</option>
                <option>English</option>
                <option>Español</option>
                <option>اردو</option>
              </select>
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                placeholder="Position Type"
              />
            </td>
            <td>
              <select className="form-select">
                <option>Is Active?</option>
                <option>Active</option>
                <option>In Active</option>
              </select>
            </td>
          </tr>
          <tr role="row" className="heading">
            <th>Language</th>
            <th>Currency Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr role="row" className="odd">
            <td className="sorting_1">hidi</td>
            <td>
              <span>Rupee</span>
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
                      // to={`/admin/edit-result/${item._id}`}
                      to="#"
                    >
                      Edit
                    </Link>
                  </li>
                  <li>
                    {/* <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this Candidate?"
                            onConfirm={() => handleDelete(item?._id)}
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
                    <Link
                      className="dropdown-item"
                      // to={`/admin/edit-result/${item._id}`}
                      to="#"
                    >
                      delete
                    </Link>
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
  );
}

export default CurrencyTable;
