import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListAllAdminUsers from "../../components/admin-users/list-all-adminUsers/ListAdminUsers";
import axios from "axios";

const ListAllAdminUsersPage = () => {
  const [data, setData] = useState();

  const getUserData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/adminuser/all`
      );
      setData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/adminuser/delete/${id}`
      );
      getUserData()
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Admin Users List" />
        <h3 className="page-title">
          Manage Admin Users <small>Admin Users</small>
        </h3>
        <ListAllAdminUsers data={data} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default ListAllAdminUsersPage;
