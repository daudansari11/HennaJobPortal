import ListCMS from "../../components/cms/list-CMS-Pages/ListCMS";
import PageBar from "../../components/dashboard/page-bar/PageBar";

function ListCMSPages() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="C.M.S" />
        <h3 className="page-title">
          Manage C.M.S <small>C.M.S</small>
        </h3>
        <ListCMS />
      </div>
    </>
  );
}
export default ListCMSPages;
