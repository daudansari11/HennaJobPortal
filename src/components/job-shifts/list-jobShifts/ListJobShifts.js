import React from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import IndustryTable from "./IndustriesTable";

const tabularData = {
  mainData: [
    { id: "1", language: "en", industry: "First Shift(Day)", action: "Action" },
    {
      id: "2",
      language: "en",
      industry: "Second Shift (Afternoon)",
      action: "Action",
    },
    {
      id: "3",
      language: "en",
      industry: "Third Shift(Night)",
      action: "Action",
    },
    {
      id: "4",
      language: "en",
      industry: "Rotating",
      action: "Action",
    },
  ],
};

function ListJobShifts({data,handleDelete}) {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>JOB SHIFTS</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-job-shift" className="btn btn-success">
              <AiOutlinePlus /> Add New Job Shifts
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <IndustryTable
            title=" Job Shifts"
            placeholder=" Job Shifts"
            data={data}
            handleDelete={handleDelete}
          />
        </div>

        <div className="pageFooter">
          <div className="row">
            <div className="col-md-6">
              <div className="showEntry">
                <p>
                  Showing 1 to 10 of 12 entries (filtered from 16 total entries)
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
}
export default ListJobShifts;
