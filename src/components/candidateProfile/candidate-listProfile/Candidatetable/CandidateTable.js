import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
const CandidateTable = ({ data, getCandidatelistData,count }) => {
  const handleCandidateDelete = async (id) => {
    try {
      const delet = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/candidate/delete_candidate/${id}`
      );

      getCandidatelistData(count);
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
            <tr role="row" className="heading">
              <th className="candidate_name_heading">Name</th>
              <th>Job category</th>
              <th>Mobile</th>
              <th>Mobile 2</th>

              <th>Email</th>
              <th>Email 2</th>

              <th>Location</th>
              <th>Docs</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((item, i) => {
                return (
                  <tr role="row" className="odd" key={i}>
                    <td>
                      <span>{item?.name}</span>
                    </td>
                    <td>{item?.job_category?.category_name}</td>
                    <td>{item?.mobile}</td>
                    <td>{item?.mobile2}</td>
                    <td>{item?.email}</td>
                    <td>{item?.email2}</td>

                    <td>{item?.location?.location_name}</td>
                    <td>
                      <button
                        className="btn btn-success "
                        type="button"
                        style={{ fontSize: "12px" }}
                      >
                        <MdOutlineFileDownload /> Download Docs
                      </button>
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
                              to={`edit/${item?._id}`}
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
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CandidateTable;
