import React from "react";
import { Link } from "react-router-dom";

const TestimonialTable = () => {
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
                <select name="is_active" id="is_active" className="form-select">
                  <option value={1} selected="selected">
                    Select Language
                  </option>
                  <option value={1}>English</option>
                  <option value={0}>Hindi</option>
                  <option value={0}>German</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Testimonial By"
                />
              </td>

              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Testimonial"
                />
              </td>

              <td>
                <select name="is_active" id="is_active" className="form-select">
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
              <th>Testimonial By</th>
              <th>Testimonial</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" className="odd">
              <td className="sorting_1">en</td>

              <td>Garry Miller Jr</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pretium nunc non justo placerat pulvina...
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
                  <ul className="dropdown-menu">
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
            <tr role="row" className="odd">
              <td className="sorting_1">en</td>
              <td>John Doe</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pretium nunc non justo placerat pulvina...
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
                  <ul className="dropdown-menu">
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
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TestimonialTable;
