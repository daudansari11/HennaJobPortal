import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { Link } from "react-router-dom";
import ListCMSTable from "../list-CMS-Table/ListCMSTable";
import { useEffect, useState } from "react";

function ListCMS({ data, handleDelete,getCms2 }) {
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
            <h5>C.M.S</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-cms" className="btn btn-success">
              <AiOutlinePlus /> Add New C.M.S Pages
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <ListCMSTable title="Page Slug" data={data?.data} handleDelete={handleDelete}/>
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination" style={{margin:"18px"}}>
            {count && count?.map((val)=>{
              return <li className="page-item" onClick={()=>{getCms2(val)}}><a className="page-link" href="#">{val}</a></li>
            })}
          </ul>
        </nav>

        {/* <div className="pageFooter">
          <div className="row">
            <div className="col-md-6">
              <div className="showEntry">
                <p>Showing 1 to 2 of 2 entries</p>
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
        </div> */}
      </div>
    </>
  );
}
export default ListCMS;
