import React from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import AdminUsersTable from "../admin-usersTable/AdminUsersTable";
import { Helmet } from "react-helmet";

const ListAllAdminUsers = ({ data,handleDelete }) => {
  return (
    <>
      <Helmet>
        <title>List Admin User | Job Portal</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>ADMIN USER(S)</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-admin-user" className="btn btn-success">
              <AiOutlinePlus /> Add New Admin User
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <AdminUsersTable data={data?.data} handleDelete={handleDelete} />
        </div>

        <div className="pageFooter">
          <div className="row">
            <div className="col-md-6">
              <div className="showEntry">
                <p>Showing 1 to 2 of 2 entries</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="paginationPart">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <BiChevronLeft />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <BiChevronRight />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAllAdminUsers;
