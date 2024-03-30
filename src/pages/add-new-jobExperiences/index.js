import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewJobExperinces from "../../components/job-experiences/add-new-job-experiences/AddNewJobExperiences";

function AddNewJobExperiencesPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Add Job Experience" />
        
        <AddNewJobExperinces/>
      </div>
    </>
  );
}
export default AddNewJobExperiencesPage;
