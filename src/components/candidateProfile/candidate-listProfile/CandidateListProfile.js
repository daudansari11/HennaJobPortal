import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

import CandidateTable from "./Candidatetable/CandidateTable";
import CandidateReportTable from "./candidateReport/CandidateReport";
import { useEffect, useState } from "react";

const CandidateListProfile = ({ data, getCandidatelistData ,getCandidatelistData2,getCandidatelistDataFilter }) => {
  const [count, setCount] = useState([])
  useEffect(() => {
    if (data?.totalPages) {
      const arrr = []
      for (let i = 0; i < data.totalPages; i++) {
        arrr.push(i +1)
      }
      setCount(arrr);
    }
  }, [data])
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
          <CandidateReportTable getCandidatelistDataFilter={getCandidatelistDataFilter}/>
        </div>
        <div className="pageTableWrapper">
          <div className="pageBody">
            <CandidateTable
              data={data?.data}
              count={count}
              getCandidatelistData={getCandidatelistData}
            />
          </div>
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination" style={{ margin: "18px" }}>
            {count && count?.map((val) => {
              return <li className="page-item" onClick={() => { getCandidatelistData2(val) }}><a className="page-link" href="#">{val}</a></li>
            })}
          </ul>
        </nav>

      </div>
    </>
  );
};

export default CandidateListProfile;
