import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import axios from "axios";
import IndustryTable from "./IndustriesTable";


function ListJobTypes() {
  const [data, setData] = useState();
  const getDatas = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/job-type`
      );
      setData(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getDatas();
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/job-type/delete/${id}`
      );
      getDatas()
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>JOB TYPES</h5>
          </div>
          <div className="addNew">
            <Link to="/admin/create-job-type" className="btn btn-success">
              <AiOutlinePlus /> Add New Job Types
            </Link>
          </div>
        </div>

        <div className="pageBody">
          <IndustryTable
            title="Job Types"
            placeholder="JOB Types"
            data={data}
            handleDelete={handleDelete}
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
