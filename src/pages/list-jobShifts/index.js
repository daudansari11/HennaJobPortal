// import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListJobShifts from "../../components/job-shifts/list-jobShifts/ListJobShifts";
// import axios from "axios";

function ListJobShiftsPage() {
  // const [data, setData] = useState();

  // const jobShiftData = async () => {
  //   try {
  //     const res = axios.get(
  //       `https://job-portal-wifv.vercel.app/user/employer/shift`
  //     );
  //     setData(res.data);
  //   } catch (error) {
  //     alert("Error");
  //   }
  // };

  // useEffect(() => {
  //   jobShiftData();
  // }, []);

  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Job Shifts" />
        <h3 className="page-title">
          Manage Job Shifts<small>Job Shifts</small>
        </h3>
        <ListJobShifts />
      </div>
    </>
  );
}
export default ListJobShiftsPage;
