
import React from "react";
import { Link } from "react-router-dom";

const ListCMSTable = ({title,data, handleDelete }) => {
  return (
    <>
      <div className="pageTable">
        <div className="tableLength">
         
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
             
            </tr> */}
            <tr role="row" className="heading">
              <th>#</th>
              <th>Page Slug</th>
              <th>Seo Title</th>
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
                      <span>{item?.page_slug}</span>
                    </td>
                    <td>
                      <span>{item.seo_title}</span>
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
                              to={`/admin/create-cms/${item._id}`}
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#" onClick={() => { handleDelete(item._id) }}>
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

export default ListCMSTable;
