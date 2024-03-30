import React from "react";

const DashboardStats = () => {
  return (
    <>
      <div className="dashboardStats ">
        <div className="dashboardStat green">
          <h4 className="number">0</h4>
          <p className="desc"> Todays Users </p>
        </div>
        <div className="dashboardStat red">
          <h4 className="number">4</h4>
          <p className="desc"> Active Users </p>
        </div>
        <div className="dashboardStat blue">
          <h4 className="number">0</h4>
          <p className="desc"> Verified Users </p>
        </div>
        <div className="dashboardStat green">
          <h4 className="number">0</h4>
          <p className="desc"> Todays Jobs </p>
        </div>
        <div className="dashboardStat red">
          <h4 className="number">0</h4>
          <p className="desc"> Active Jobs </p>
        </div>
        <div className="dashboardStat blue">
          <h4 className="number">0</h4>
          <p className="desc"> Featured Jobs </p>
        </div>
      </div>
    </>
  );
};

export default DashboardStats;
