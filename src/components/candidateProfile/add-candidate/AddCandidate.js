import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import AddCandidateTable from "./AddCandidateTable";

function AddCandidate() {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader mb-4">
          <div className="pageTitle">
            <FiSettings />
            <h5>CANDIDATE FORM</h5>
          </div>
        </div>

        <div className="pageBody">
          <AddCandidateTable />
        </div>
      </div>
    </>
  );
}
export default AddCandidate;
