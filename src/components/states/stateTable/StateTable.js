import { Button, Popconfirm } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const StateTable = ({ data, getStateData }) => {
  const handleDelete = async (id) => {
    try {
      const delet = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/states/delete/${id}`
      );
      getStateData();
    } catch (error) {}
  };
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
            <tr role="row" className="filter">
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
                    Select Country
                  </option>
                  <option value={1}>India</option>
                  <option value={2}> German</option>
                  <option value={3}>Latin</option>
                  <option value={4}>French</option>
                  <option value={5}>Mengala</option>
                  <option value={6}>Pakistan</option>
                  <option value={7}>Zimbabe</option>
                </select>
              </td>

              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="State"
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
              <th>Country</th>

              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((item) => {
                return (
                  <tr role="row" className="odd">
                    <td className="sorting_1">{item?.country_id?.lang}</td>
                    <td className="sorting_1"> {item?.country_id?.country}</td>
                    <td className="sorting_1">{item?.state}</td>
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
                            <Link
                              className="dropdown-item"
                              to={`/admin/edit-state/${item._id}`}
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Popconfirm
                              title="Delete the task"
                              description="Are you sure to delete this State?"
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
                            </Popconfirm>
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StateTable;
