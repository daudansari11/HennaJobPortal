import ListPage from "../../components/SEO/list-page/ListPage";
import PageBar from "../../components/dashboard/page-bar/PageBar";


function SeoListPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="S.E.O" />
        <h3 className="page-title">
          Manage S.E.O <small>S.E.O</small>
        </h3>
        <ListPage />
      </div>
    </>
  );
}
export default SeoListPage;
