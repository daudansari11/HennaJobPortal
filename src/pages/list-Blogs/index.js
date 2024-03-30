import ListBlogs from "../../components/manageBlogs/listBlogs/ListBlogs";

function ListBlogsPage() {
  return (
    <>
      <div className="pageWrapper">
        <h3 className="page-title">
          Manage Blogs <small>Blog</small>
        </h3>
        <ListBlogs />
      </div>
    </>
  );
}
export default ListBlogsPage;
