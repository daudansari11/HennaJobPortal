import React from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import Listpackages from "../../components/packages/list-packages/ListPackages";

const ListPackagespage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Packages" />
        <h3 className="page-title">
          Manage Packages <small>Packages</small>
        </h3>
        <Listpackages />
      </div>
    </>
  );
};

export default ListPackagespage;
