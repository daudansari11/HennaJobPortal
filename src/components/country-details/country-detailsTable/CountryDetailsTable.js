import React from "react";
import { Link } from "react-router-dom";

const CountryDetailsTable = () => {
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
              <th>Country</th>
              <th>Sort Name</th>
              <th>Phone Code</th>
              <th>Currency</th>
              <th> Code</th>
              <th>Symbole</th>
              <th>Thousand Separator</th>
              <th>Decimal Separator</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" className="odd">
              <td>
                <span dir="ltr">Afghanistan</span>
              </td>
              <td className="sorting_1">AF</td>
              <td className="sorting_1">93</td>
              <td>
                <span dir="ltr">Afghanis</span>
              </td>
              <td className="sorting_1">AF</td>
              <td className="sorting_1">؋</td>
              <td className="sorting_1">,</td>
              <td className="sorting_1">.</td>
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
              <td>
                <span dir="ltr">Albania</span>
              </td>
              <td className="sorting_1">AL</td>
              <td className="sorting_1">355</td>
              <td>
                <span dir="ltr">Leke</span>
              </td>
              <td className="sorting_1">ALL</td>
              <td className="sorting_1">LeK</td>
              <td className="sorting_1">,</td>
              <td className="sorting_1">.</td>
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

export default CountryDetailsTable;
