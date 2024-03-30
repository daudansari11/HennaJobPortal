import BlogCategories from "../../components/manageBlogs/categories/BlogCategories";

function BlogCategoriesPage() {
  return (
    <>
      <div className="pageWrapper">
        <h3 className="page-title">
          Manage Categories <small>Categories</small>
        </h3>
        <BlogCategories />
      </div>
    </>
  );
}
export default BlogCategoriesPage;
