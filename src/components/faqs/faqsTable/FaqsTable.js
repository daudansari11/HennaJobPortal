

import React from "react";
import { Link } from "react-router-dom";

const Faqstable = ({title,title2,data ,handleDelete}) => {
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
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                />
              </td>
              <td style={{width:"50%"}}>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                />
              </td>
              <td></td>
            </tr> */}
            <tr role="row" className="heading">
              <th>#</th>
              <th>{title}</th>
              <th>{title2}</th>
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
                      <span>{item.faq_question}</span>
                    </td>
                    <td inert>{item.faq_answer}</td>
                   
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
                              to={`/admin/create-faq/${item._id}`}
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

export default Faqstable;
