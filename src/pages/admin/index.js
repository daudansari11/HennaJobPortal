import React, { useEffect } from "react";
import SideBar from "../../components/common/sidebar/SideBar";
import { Outlet } from "react-router-dom";

const AdminPage = ({ sidebarActive ,setSidebarActive}) => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  }, []);
  return (
    <>
      <main className={`main ${sidebarActive ? "" : "active"}`}>
        <div className="aside">
          <SideBar setSidebarActive={setSidebarActive}/>
        </div>
        <div className="content">
          <Outlet></Outlet>
        </div>
      </main>
    </>
  );
};

export default AdminPage;
