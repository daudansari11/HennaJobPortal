import React from "react";
import { FiSettings } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import DegreeTypesTable from "./degree-types-table/DegreeTypesTable";

const DegreeTypes = () => {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>degree types</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-degree-type" className="btn btn-success">
              <GoPlus /> Add New degree type
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <DegreeTypesTable />
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

export default DegreeTypes;
