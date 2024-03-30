import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListJobTypes from "../../components/job-types/listJobTypes/ListJobType";

function ListJobTypesPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Job Types" />
        <h3 className="page-title">
          Manage Job Types <small>Job Types</small>
        </h3>
        <ListJobTypes />
      </div>
    </>
  );
}
export default ListJobTypesPage;
