import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import CurrencyTable from "./currencyTable/CurrencyTable";

function CurrencyList() {
  return (
    <div className="pageTableWrapper">
      <div className="pageHeader">
        <div className="pageTitle">
          <FiSettings />
          <h5>Currency Types</h5>
        </div>
        <div className="addNew">
          <Link to="/admin/create-currency" className="btn btn-success">
            <GoPlus /> Add New Currency Types
          </Link>
        </div>
      </div>

      <div className="pageBody">
        <CurrencyTable />
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
  );
}

export default CurrencyList;
