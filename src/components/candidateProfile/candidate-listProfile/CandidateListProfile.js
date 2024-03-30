import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

import CandidateTable from "./Candidatetable/CandidateTable";
import CandidateReportTable from "./candidateReport/CandidateReport";

const CandidateListProfile = ({ data, getCandidatelistData }) => {
  return (
    <>
      <div className="pageTableWrappe">
        <div className="pageTableWrapper">
          <div className="pageHeader">
            <div className="pageTitle">
              <FiSettings />
              <h5>Candidate</h5>
            </div>
            <div className="addNew">
              <Link to="/admin/add-candidate" className="btn btn-success">
                <AiOutlinePlus /> Add New Candidate
              </Link>
            </div>
          </div>
        </div>
        <div className="report_table mt-5 mb-5">
          <CandidateReportTable />
        </div>
        <div className="pageTableWrapper">
          <div className="pageBody">
            <CandidateTable
              data={data}
              getCandidatelistData={getCandidatelistData}
            />
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
};

export default CandidateListProfile;
