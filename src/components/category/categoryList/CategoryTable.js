import { Button, Popconfirm } from "antd";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";

const CategoryTable = ({ data, getCategoryData }) => {
  // console.log(data);

  const handleCandidateDelete = async (id) => {
    try {
      const delet = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/job-category/delete/${id}`
      );
      getCategoryData();
    } catch (error) { }
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
            <tr role="row" className="heading">
              <th>S.No</th>

              <th>Category Code</th>
              <th>Category Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.length ? data?.map((item, i) => {
              return (
                <tr role="row" className="odd" key={i}>
                  <td className="sorting_1">{i + 1}</td>
                  <td>
                    <span>{item?.category_code}</span>
                  </td>
                  <td>{item?.category_name}</td>
                  <td>
                    <span>{item?.is_active === 0 ? "Inactive" : "Active"}</span>
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
                            to={`/admin/edit-category/${item._id}`}
                          >
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this Candidate?"
                            onConfirm={() => handleCandidateDelete(item?._id)}
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
            }) : <tr><td>"No Data"</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryTable;
