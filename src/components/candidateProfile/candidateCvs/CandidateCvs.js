import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

import CandidateCvsTable from "./CandidateCvsTable";

function CandidateCvs() {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader mb-4 ">
          <div className="pageTitle">
            <FiSettings />
            <h5>CANDIDATES CSV IMPORT FORM</h5>
          </div>

          <div className="form-group col-xl-3 col-lg-3">
            <input
              className="form-control"
              placeholder="Search..."
              type="text"
            />
          </div>
        </div>

        <div className="pageBody">
          <CandidateCvsTable />
        </div>

        <div className="pageFooter">
          <button className="btn btn-large btn-primary" type="button">
            Import CSV <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
}
export default CandidateCvs;
