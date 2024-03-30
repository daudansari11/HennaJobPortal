import React, { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";

import CategoryList from "../../components/category/categoryList/CategoryList";
import { Helmet } from "react-helmet";
import axios from "axios";

const CategoryListPage = () => {
  const [data, setData] = useState();

  const getCategoryData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/job-category`
      );
      setData(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Category List</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageWrapper">
        <PageBar title="Category" />
        <h3 className="page-title">
          Manage Category <small>Category</small>
        </h3>
        <CategoryList data={data} getCategoryData={getCategoryData} />
      </div>
    </>
  );
};

export default CategoryListPage;
