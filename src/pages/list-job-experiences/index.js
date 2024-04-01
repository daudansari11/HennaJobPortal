import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListJobExperiences from "../../components/job-experiences/list-job-experiences/ListJobExperiences";
import axios from "axios";


function ListJobExperiencesPage() {
  const [data, setData] = useState();

  const jobExperince = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/job-experience`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    jobExperince();
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/job-experience/delete/${id}`
      );
      jobExperince()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Job Experiences" />
        <h3 className="page-title">
          Manage Job Experiences <small>Job Experiences</small>
        </h3>
        <ListJobExperiences data={data} handleDelete={handleDelete}/>
      </div>
    </>
  );
}
export default ListJobExperiencesPage;
