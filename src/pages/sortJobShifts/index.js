import PageBar from "../../components/dashboard/page-bar/PageBar";
import SortJobShifts from "../../components/job-shifts/sortJobShifts/SortJobShifts";

function SortJobShiftsPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sort Job Shifts" />
        <SortJobShifts />
      </div>
    </>
  );
}
export default SortJobShiftsPage;
