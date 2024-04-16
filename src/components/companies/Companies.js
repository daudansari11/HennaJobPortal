import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import CompanyTable from "./company-table/CompanyTable";

const Companies = ({data, handleDelete,getCompanys}) => {
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
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Company</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-company" className="btn btn-success">
              <AiOutlinePlus /> Add New Company
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <CompanyTable data={data} handleDelete={handleDelete}/>
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination" style={{ margin: "18px" }}>
            {count && count?.map((val) => {
              return <li className="page-item" onClick={() => { getCompanys(val) }}><a className="page-link" href="#">{val}</a></li>
            })}
          </ul>
        </nav>

      </div>
    </>
  );
};

export default Companies;
