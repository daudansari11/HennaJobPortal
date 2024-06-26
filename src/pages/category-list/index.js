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
        `https://abaris-j-p-backend.vercel.app/api/job-category/all`
      );
      setData(res?.data);
    } catch (error) {}
  };
  const getCategoryData2 = async (num) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/job-category/all?page=${num}`
      );
      setData(res?.data);
    } catch (error) {}
  };
  const searchData = async (val) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/job-category/search/${val}`
      );
      setData(res);
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
        <CategoryList getCategoryData2={getCategoryData2} data={data} getCategoryData={getCategoryData} searchData={searchData}/>
      </div>
    </>
  );
};

export default CategoryListPage;
