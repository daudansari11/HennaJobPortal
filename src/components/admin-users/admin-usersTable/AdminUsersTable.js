import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import ChartsBody from "../../charts/ChartsBody";
import { Button } from "antd";
const AdminUsersTable = ({ data }) => {
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setShow(!show);
  }
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
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
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
                      <span>{item.firstname}</span>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
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
                              to={`#`}
                              onClick={() => handleShow(true)}
                            >
                              Chart
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to={`edit/${item._id}`}
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
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

      
      <Modal show={show} size="lg">
        <Modal.Header>
          <Modal.Title>Charts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChartsBody />
          <div style={{display:"flex"}}>
            <input placeholder="Drop Your Message !" className="form-control"/>
            <button type="button" style={{padding:"0 40px"}} class="btn btn-success">Send</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleShow}>Close</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default AdminUsersTable;
