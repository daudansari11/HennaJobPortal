import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListJobShifts from "../../components/job-shifts/list-jobShifts/ListJobShifts";
import axios from "axios";

function ListJobShiftsPage() {
  const [data, setData] = useState();

  const jobShiftData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/job-shift`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    jobShiftData();
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/job-shift/delete/${id}`
      );
      jobShiftData()
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Job Shifts" />
        <h3 className="page-title">
          Manage Job Shifts<small>Job Shifts</small>
        </h3>
        <ListJobShifts data={data} handleDelete={handleDelete}/>
      </div>
    </>
  );
}
export default ListJobShiftsPage;
