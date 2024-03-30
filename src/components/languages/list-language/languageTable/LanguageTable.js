import { Button, Popconfirm } from "antd";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";

function LanguageTable({ data, getLanguageData }) {
  const handleLanguageDelete = async (id) => {
    try {
      const delet = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/language/delete/${id}`
      );
      console.log(delet);
      getLanguageData();
    } catch (error) {}
  };

  https: return (
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
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Language"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Native"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  placeholder="ISO Code"
                />
              </td>
              <td className="cityTab">
                <select defaultValue={"is RTL"} className="form-select">
                  <option value="is RTL">is RTL</option>
                  <option value="RTL">RTL</option>
                  <option value="LTR">LTR</option>
                </select>
              </td>
              <td className="cityTab">
                <select defaultValue={"is Default"} className="form-select">
                  <option value="is Default">is Default</option>
                  <option value="Hongkong">Default</option>
                  <option value="Hongkong">Not Default</option>
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
              <th>Language</th>
              <th>Native</th>
              <th>ISO Code</th>
              <th>is RTL</th>
              <th>is Default </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((item) => {
                return (
                  <tr role="row" className="odd" key={item._id}>
                    <td className="sorting_1">{item?.lang}</td>

                    <td>{item?.native}</td>
                    <td>{item?.iso_code}</td>
                    <td>{item?.is_rtl}</td>
                    <td>{item?.is_default}</td>
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
                              to={`/admin/edit-language/${item._id}`}
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Popconfirm
                              title="Delete the task"
                              description="Are you sure to delete this Candidate?"
                              onConfirm={() => handleLanguageDelete(item?._id)}
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
}
export default LanguageTable;
