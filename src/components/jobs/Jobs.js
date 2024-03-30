import React from 'react';
import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import JobsTable from './jobs-table/JobsTable';

const Jobs = () => {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Jobs</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-job" className="btn btn-success">                
              <AiOutlinePlus /> Add New Jobs
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <JobsTable />
        </div>

        <div className="pageFooter">
          <div className="row">
            <div className="col-md-6">
              <div className="showEntry">
                <p>
                  Showing 1 to 3 of 3 entries (filtered from 12 total entries)
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="paginationPart">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link-next" href="#">
                        <BiChevronLeft />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link-next" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link-next" href="#">
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
  )
}

export default Jobs