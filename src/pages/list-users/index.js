import React from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListUsersProfile from "../../components/usersProfile/list-userProfile/ListUserProfile";

const ListUsersPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Users" />
        <h3 className="page-title">
          Manage Users <small>Users</small>
        </h3>
        <ListUsersProfile />
      </div>
    </>
  );
};

export default ListUsersPage;
