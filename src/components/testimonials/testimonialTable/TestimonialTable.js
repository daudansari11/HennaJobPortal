import React from "react";
import { Link } from "react-router-dom";

const TestimonialTable = ({ data, handleDelete }) => {
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
            {/* <tr role="row" className="filter">
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
            </tr> */}
            <tr role="row" className="heading">
              <th>#</th>
              <th>Testimonial By</th>
              <th>Testimonial</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, i) => {
                return (
                  <tr role="row" className="odd" key={i + 1}>
                    <td>
                      <span>{i + 1}</span>
                    </td>
                    <td>
                      <span>{item?.testimonial_by}</span>
                    </td>
                    <td>
                      <span>{item.testimonial}</span>
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
                              to={`/admin/create-testimonial/${item._id}`}
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#" onClick={() => { handleDelete(item._id) }}>
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
export default TestimonialTable;
