import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

import CandidateTable from "./Candidatetable/CandidateTable";
import CandidateReportTable from "./candidateReport/CandidateReport";
import { useEffect, useState } from "react";

const CandidateListProfile = ({ data, getCandidatelistData, getCandidatelistData2, getCandidatelistDataFilter }) => {
  const [count, setCount] = useState([])
  const [count1, setCount1] = useState(1)
  useEffect(() => {
    if (data?.totalPages) {
      const arrr = []
      for (let i = 0; i < data.totalPages; i++) {
        arrr.push(i + 1)
      }
      setCount(arrr);
    }
  }, [data])
  
  const getCandidatelistData3 = (num)=>{
    getCandidatelistData2(num)
    setCount1(num)
  }
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
          <CandidateReportTable getCandidatelistDataFilter={getCandidatelistDataFilter} getCandidatelistData={getCandidatelistData}/>
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


        <div className="pageFooter">
          <div className="row">
            <div className="col-md-6">
              <div className="showEntry">
                <p>
                  Showing {count1} of {count?.length} entries page
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="paginationPart">

                <nav aria-label="Page navigation example">
                  <ul className="pagination" style={{ margin: "18px" }}>
                    {count && count?.map((val) => {
                      return <li className="page-item" onClick={() => { getCandidatelistData3(val) }}><a className="page-link" href="#">{val}</a></li>
                    })}
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

export default CandidateListProfile;
