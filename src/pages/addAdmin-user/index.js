import React from "react";

import AddAdminUser from "../../components/admin-users/add-admin-user/AddAdminUser";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import { useParams } from "react-router-dom";

const AddAdminUserPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div className="pageWrapper">
        <PageBar title={params.id ? "Update" : "Add New Admin User"} />
        <h3 className="page-title">
          Add New Admin User <small>Admin Users</small>
        </h3>
        <AddAdminUser />
      </div>
    </>
  );
};

export default AddAdminUserPage;
