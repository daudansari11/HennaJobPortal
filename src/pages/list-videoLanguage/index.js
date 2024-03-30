import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListVideoLanguage from "../../components/home-page-video/list-video-language/ListVideoLanguage";

function ListVideoLanguagePage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Our Video" />
        <h3 className="page-title">
          Manage Video languages <small>Video languages</small>
        </h3>
        <ListVideoLanguage />
      </div>
    </>
  );
}
export default ListVideoLanguagePage;
