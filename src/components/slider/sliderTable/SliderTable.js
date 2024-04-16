import React from "react";
import { Link } from "react-router-dom";

const SliderTable = ({data ,handleDelete}) => {
  return (
    <>
      <div className="pageTable">
        <div className="tableLength">
          
        </div>
        <table className="table table-striped table-bordered ">
          <thead>
          
            <tr role="row" className="heading">
              <th>#</th>
              <th>Slider</th>
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
                      <span>{item?.company_id?.name}</span>
                    </td>
                    <td>
                      <span>{item.job_title}</span>
                    </td>
                    <td inert>{item.position?.position}</td>
                    <td>{item.skills_id?.job_skill}</td>
                    <td>{item?.salary_from} - {item.salary_to} </td>
                    <td>{item.states_id?.state}</td>
                    <td>{item.job_experience?.job_experience}</td>
                    <td>{item.carrier_level_id?.career_level}</td>
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
                              to={`/admin/create-job/${item._id}`}
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#" onClick={()=>{handleDelete(item._id)}}>
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
export default SliderTable;
