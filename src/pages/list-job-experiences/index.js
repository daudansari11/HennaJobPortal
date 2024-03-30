import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListJobExperiences from "../../components/job-experiences/list-job-experiences/ListJobExperiences";


function ListJobExperiencesPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Job Experiences" />
        <h3 className="page-title">
          Manage Job Experiences <small>Job Experiences</small>
        </h3>
        <ListJobExperiences/>
      </div>
    </>
  );
}
export default ListJobExperiencesPage;
