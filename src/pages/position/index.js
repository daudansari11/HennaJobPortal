import React from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";

import PositionList from "../../components/position/positionList/PositionList";

function PositionPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Position" />
        <h3 className="page-title">
          Manage Position <small>Position</small>
        </h3>
        <PositionList />
      </div>
    </>
  );
}

export default PositionPage;
