import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";
import { Link } from "react-router-dom";

function IndustryTable({ title, placeholder, data }) {
  const handleDelete = () => {
    alert("Are you want to sure to delete this item");
  };
  return (
    <>
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
            <tr role="row" className="filter">
              <td rowSpan={1} colSpan={1}>
                <select id="lang" className="form-control" name="lang">
                  <option value>Select Language</option>
                  <option value="ar">عربى</option>
                  <option value="en" selected="selected">
                    English
                  </option>
                  <option value="es">Español</option>
                  <option value="ur">اردو</option>
                </select>
              </td>
              <td rowSpan={1} colSpan={1}>
                <input
                  type="text"
                  className="form-control"
                  name="language_level"
                  id="language_level"
                  autoComplete="off"
                  placeholder={placeholder}
                />
              </td>
              <td rowSpan={1} colSpan={1}>
                <select
                  name="is_active"
                  id="is_active"
                  className="form-control"
                >
                  <option value={-1}>Is Active?</option>
                  <option value={1} selected="selected">
                    Active
                  </option>
                  <option value={0}>In Active</option>
                </select>
              </td>
            </tr>
            <tr role="row" className="heading">
              <th>Language</th>
              <th>{title}</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <tr key={item.id} role="row" className="odd">
                    <td className="sorting_1">{item.lang}</td>
                    <td>
                      <span dir="ltr">{item.job_type}</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {/* {item.action} */}
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item"
                              to={`/admin/create-job-type/${item._id}`}
                            >
                              <CiEdit className="action_icons" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={handleDelete}
                            >
                              <AiOutlineDelete className="action_icons" />
                              Delete
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <BsCheck2Square className="action_icons" />
                              Mark in Active
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default IndustryTable;
