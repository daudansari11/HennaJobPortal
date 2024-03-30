
import React from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import IndustryTable from "../../industries/list-industries/industriesTable/IndustriesTable";


const tabularData = {
  mainData: [
    { id: "1", language: "en", industry: "Fresh", action: "Action" },
    {
      id: "2",
      language: "en",
      industry: "Less than 1 Year",
      action: "Action",
    },
    { id: "3", language: "en", industry: "1 Year", action: "Action" },
    {
      id: "4",
      language: "en",
      industry: "2 Years",
      action: "Action",
    },
    {
      id: "5",
      language: "en",
      industry: "3 Years",
      action: "Action",
    },
    { id: "6", language: "en", industry: "4 Years", action: "Action" },
    { id: "7", language: "en", industry: "5 Years", action: "Action" },
    {
      id: "8",
      language: "en",
      industry: "6 Years",
      action: "Action",
    },
    { id: "9", language: "en", industry: "	7 Years", action: "Action" },
    { id: "10", language: "en", industry: "8 Years", action: "Action" },
    
  ],
};

function ListJobSkills(){
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>JOB SKILLS</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-industry" className="btn btn-success">
              <AiOutlinePlus /> Add New Job Skills
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <IndustryTable title="Job Skill" placeholder="Job Skills" data={tabularData}/>
        </div>

        <div className="pageFooter">
          <div className="row">
            <div className="col-md-6">
              <div className="showEntry">
                <p>
                  Showing 1 to 10 of 12 entries (filtered from 48 total entries)
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
                        2
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
  )
}
export default ListJobSkills