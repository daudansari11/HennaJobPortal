import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

function BlogCategories() {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5> Manage Categories</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <div className="tableLength">
              <div className="dataTables_length">
                <select
                  name="languageLevelDatatableAjax_length"
                  className="form-select "
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>{" "}
                <span className="record">records</span>
              </div>
            </div>
            <table className="table table-striped table-bordered ">
              <thead>
                <tr role="row" className="heading">
                  <th>Title</th>
                  <th>Last updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td className="sorting_1">Jobseekers</td>
                  
                  <td> 3 years ago</td>

                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/admin/edit-career-level"
                          >
                            Edit
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogCategories;
