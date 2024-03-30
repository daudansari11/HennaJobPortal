import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import IndustryTable from "../../industries/list-industries/industriesTable/IndustriesTable";
import axios from "axios";

// const tabularData = {
//   mainData: [
//     { id: "1", language: "en", industry: "Contact", action: "Action" },
//     {
//       id: "2",
//       language: "en",
//       industry: "FreeLance",
//       action: "Action",
//     },
//     {
//       id: "3",
//       language: "en",
//       industry: "Full Time/Permanent",
//       action: "Action",
//     },
//     {
//       id: "4",
//       language: "en",
//       industry: "InterShip",
//       action: "Action",
//     },
//     {
//       id: "5",
//       language: "en",
//       industry: "Part Time",
//       action: "Action",
//     },
//   ],
// };

function ListJobTypes() {
  const [data, setData] = useState();
  const getDatas = async () => {
    try {
      const res = await axios.get(
        `https://job-portal-wifv.vercel.app/employer/job-type`
      );
      setData(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>JOB TYPES</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-industry" className="btn btn-success">
              <AiOutlinePlus /> Add New Job Types
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <IndustryTable
            title="Job Types"
            placeholder="JOB Types"
            data={data}
          />
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
export default ListJobTypes;
