import React from "react";
import { Link } from "react-router-dom";

const CityTable = ({ data ,handleDelete}) => {
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
            {/* <tr role="row" className="filter">
              <td>
                <select className="form-select">
                  <option value selected="selected">
                    Select Language
                  </option>
                  <option value={1}>عربى</option>
                  <option value={2}>English</option>
                  <option value={3}>Español</option>
                  <option value={4}>اردو</option>
                </select>
              </td>
              <td>
                <select className="form-select">
                  <option value selected="selected">
                    Select State
                  </option>
                  <option value={1}>Al Asimah</option>
                  <option value={2}> Al Ahmadi</option>
                  <option value={3}>Hawalli</option>
                  <option value={4}>Mishref</option>
                  <option value={5}>Qadesiya</option>
                  <option value={6}>Safat</option>
                  <option value={7}>Salmiya</option>
                </select>
              </td>

              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="City "
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
              <th>Country</th>

              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((item,i) => {
                return (
                  <tr role="row" className="odd">
                    <td className="sorting_1">{i+1}</td>
                    <td className="sorting_1">{item?.country_id?.country}</td>
                    <td className="sorting_1">{item?.city}</td>
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
                            <Link className="dropdown-item"  to={`/admin/create-city/${item._id}`}>
                              Edit
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#"  onClick={()=>{handleDelete(item._id)}}>
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
                );
              })}

            {/* <tr role="row" className="odd">
              <td className="sorting_1">en</td>
              <td className="sorting_1"> al-Farwaniyah - Kuwait</td>
              <td className="sorting_1">'Umayriyah</td>
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
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CityTable;
