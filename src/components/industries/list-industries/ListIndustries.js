import React from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import IndustryTable from "./industriesTable/IndustriesTable";


const tabularData = {
  mainData: [
    { id: "1", language: "en", industry: "Advertising/PR", action: "Action" },
    {
      id: "2",
      language: "en",
      industry: "Agriculture/Fertilizer/Pesticide",
      action: "Action",
    },
    { id: "3", language: "en", industry: "Apparel/Clothing", action: "Action" },
    {
      id: "4",
      language: "en",
      industry: "Architecture/Interior Design",
      action: "Action",
    },
    {
      id: "5",
      language: "en",
      industry: "Arts / Entertainment",
      action: "Action",
    },
    { id: "6", language: "en", industry: "AutoMobile", action: "Action" },
    { id: "7", language: "en", industry: "Aviation", action: "Action" },
    {
      id: "8",
      language: "en",
      industry: "Banking/Financial Services",
      action: "Action",
    },
    { id: "9", language: "en", industry: "	BPO", action: "Action" },
    { id: "10", language: "en", industry: "Broadcasting", action: "Action" },
    {
      id: "11",
      language: "en",
      industry: "Business Development",
      action: "Action",
    },
  ],
};

function ListIndustries({data}) {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>INDUSTRIES</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-industry" className="btn btn-success">
              <AiOutlinePlus /> Add New Industry
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <IndustryTable title="Industry" placeholder="Industry" data={data}/>
        </div>

        <div className="pageFooter">
          <div className="row">
            <div className="col-md-6">
              <div className="showEntry">
                <p>
                  Showing 1 to 10 of 56 entries (filtered from 228 total
                  entries)
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
                        3
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
export default ListIndustries;
