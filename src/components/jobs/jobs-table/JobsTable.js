import React from "react";
import { Link } from "react-router-dom";

const JobsTable = () => {
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
            {/* <tr role="row" className="filter">
              <td>
                <select className="form-select">
                  <option value selected="selected">
                    Select Company
                  </option>
                  <option value={1}>Hotel Tirupati Classic</option>
                  <option value={2}>AutoSoft Dynamics</option>
                  <option value={3}>New Design Studio</option>
                  <option value={4}>Surf Wave</option>
                  <option value={5}>Power Wave</option>
                  <option value={6}>Media Wave</option>
                  <option value={7}>Connect People</option>
                  <option value={8}>Travel Advisor</option>
                  <option value={9}>Abaris Softech Pvt Ltd</option>
                  <option value={10}>Net Design</option>
                  <option value={11}>Sphere</option>
                  <option value={13}>Web Design Studio</option>
                  <option value={14}>Mayan Design Studios</option>
                  <option value={15}>Pharma Tech Inc.</option>
                  <option value={16}>Wave Media</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Job Title"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Job Description"
                />
              </td>
              <td className="cityTab">
                <select defaultValue={"Kuwait"} className="form-select">
                  <option value="Kuwait">Kuwait</option>
                  <option value="Hongkong">Hongkong</option>
                </select>
                <select defaultValue={"Al Asimah"} className="form-select">
                  <option value="Al Asimah">Al Asimah</option>
                  <option value="al-Ahmadi">al-Ahmadi</option>
                </select>
                <select defaultValue={"City"} className="form-select">
                  <option value="City">City</option>
                  <option value="City">City</option>
                </select>
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
              <th>Company</th>
              <th>Job Title</th>
              <th>Job Description</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" className="odd">
              <td className="sorting_1">Connect People</td>

              <td>Wordpress Developer</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing...</td>
              <td>ad-Dawhah(al-Kuwayt-Kuwait)</td>
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
              <td className="sorting_1">Connect People</td>

              <td>Wordpress Developer</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing...</td>
              <td>ad-Dawhah(al-Kuwayt-Kuwait)</td>
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

export default JobsTable;
