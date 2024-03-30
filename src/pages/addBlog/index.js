import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddBlog from "../../components/manageBlogs/addBlog/AddBlog";

function AddBlogPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Blog" />
        <h3 className="page-title">Add New Post</h3>
        <AddBlog />
      </div>
    </>
  );
}
export default AddBlogPage;
