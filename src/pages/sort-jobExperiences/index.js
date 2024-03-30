import PageBar from "../../components/dashboard/page-bar/PageBar";
import SortJobExperinces from "../../components/job-experiences/sort-job-experiences/SortJobExperiences";

function SortJobExperincesPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sort Job Experiences" />

        <SortJobExperinces />
      </div>
    </>
  );
}
export default SortJobExperincesPage;
