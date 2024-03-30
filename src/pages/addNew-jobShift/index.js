import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewJobShift from "../../components/job-shifts/addNew-jobShift/AddNewJobShift";

function AddNewJobShiftsPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Add Job Shift" />
        <AddNewJobShift />
      </div>
    </>
  );
}
export default AddNewJobShiftsPage;
