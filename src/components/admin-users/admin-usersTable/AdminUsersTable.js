import React from "react";
import { Link } from "react-router-dom";

const AdminUsersTable = ({ data }) => {
  return (
    <>
      <div className="pageTable">
        <div className="tableLength d-flex form-search">
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

          <div className="dataTables_length">
            <input
              type="text"
              className="form-control"
              name="language_level"
              id="language_level"
              autoComplete="off"
              placeholder="search..."
            />
          </div>
        </div>
        <table className="table table-striped table-bordered ">
          <thead>
            <tr role="row" className="heading">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, i) => {
                console.log(item);
                return (
                  <tr role="row" className="odd" key={i + 1}>
                    <td>
                      <span>{i + 1}</span>
                    </td>
                    <td>
                      <span>{item.firstname}</span>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
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
                              to={`edit/${item._id}`}
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Delete
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
  );
};

export default AdminUsersTable;
