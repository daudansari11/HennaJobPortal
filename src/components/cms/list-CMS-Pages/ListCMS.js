import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { Link } from "react-router-dom";
import ListCMSTable from "../list-CMS-Table/ListCMSTable";

function ListCMS() {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>C.M.S</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-industry" className="btn btn-success">
              <AiOutlinePlus /> Add New C.M.S Pages
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <ListCMSTable title="Page Slug"/>
        </div>

        <div className="pageFooter">
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
        </div>
      </div>
    </>
  );
}
export default ListCMS;
