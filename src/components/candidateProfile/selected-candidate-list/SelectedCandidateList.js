import { AiOutlinePlus } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
// import CandidateReportTable from "../candidate-listProfile/candidateReport/CandidateReport";

import SelectedCandidateTable from "./selectedCandidateTable/SelectedCandidateTable";

function SelectedCandidateList() {
  return (
    <>
      <div className="pageTableWrappe">
        <div className="pageTableWrapper">
          <div className="pageHeader">
            <div className="pageTitle">
              <FiSettings />
              <h5>Selected Candidate List</h5>
            </div>
            <div className="addNew">
              <Link to="#" className="btn btn-success">
                <AiOutlinePlus /> Add New Selected Candidate
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="report_table mt-5 mb-5">
          <CandidateReportTable />
        </div> */}
        <div className="pageTableWrapper">
          <div className="pageBody">
            <SelectedCandidateTable />
          </div>
        </div>

        <div className="pageTableWrapper">
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
      </div>
    </>
  );
}

export default SelectedCandidateList;
