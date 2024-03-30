import React from "react";
import PageBar from "./page-bar/PageBar";
import DashboardStats from "./dashboard-stats/DashboardStats";
import RecentRegisterJobs from "./recent-register-jobs/RecentRegisterJobs";
import RecentRegisterUsers from "./recent-register-users/RecentRegisterUsers";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="HENNA International Recruiting Your Requirements Admin Panel" />
        <h3 className="page-title">
          HENNA International Recruiting Your Requirements Admin Panel{" "}
          <small>HENNA International Recruiting Your RequirementsPanel</small>{" "}
        </h3>
        <DashboardStats />
        <div className="recentDash">
          <div className="row">
            <div className="col-md-6">
              <RecentRegisterUsers />
            </div>
            <div className="col-md-6">
              <RecentRegisterJobs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
