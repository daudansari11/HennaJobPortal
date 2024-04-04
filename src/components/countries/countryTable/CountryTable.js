import { Button, Popconfirm } from "antd";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";

const CountryTable = ({ data, getCountryData }) => {
  const handleDelete = async (id) => {
    try {
      const delet = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/countries/delete/${id}`
      );
      getCountryData();
    } catch (error) {}
  };
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
              <td rowSpan={1} colSpan={1}>
                <select id="lang" className="form-control" name="lang">
                  <option value>Select Language</option>
                  <option value="ar">عربى</option>
                  <option value="en" selected="selected">
                    English
                  </option>
                  <option value="es">Español</option>
                  <option value="ur">اردو</option>
                </select>
              </td>
              <td rowSpan={1} colSpan={1}>
                <input
                  type="text"
                  className="form-control"
                  name="language_level"
                  id="language_level"
                  autoComplete="off"
                  placeholder="Country"
                />
              </td>
              <td rowSpan={1} colSpan={1}>
                <select
                  name="is_active"
                  id="is_active"
                  className="form-control"
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
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((item) => {
                return (
                  <tr role="row" className="odd" key={item._id}>
                    <td className="sorting_1">{item?.language_id?.lang}</td>
                    <td>
                      <span dir="ltr">{item?.country}</span>
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
                            <Link
                              className="dropdown-item"
                              to={`/admin/edit-country/${item._id}`}
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Popconfirm
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
                            </Popconfirm>
                            {/* <a className="dropdown-item" href="#">
                              Delete
                            </a> */}
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

export default CountryTable;
