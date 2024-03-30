import { Helmet } from "react-helmet";
import AddCategory from "../../components/category/addCategory/AddCategory";
import PageBar from "../../components/dashboard/page-bar/PageBar";

function AddCategoryPage() {
  return (
    <>
      <Helmet>
        <title>Add Category | job Portal</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageWrapper">
        <PageBar title="Add Category" />

        <AddCategory />
      </div>
    </>
  );
}
export default AddCategoryPage;
