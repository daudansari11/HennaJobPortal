import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar"
import ListJobSkills from "../../components/job-skills/list-jobSkills/ListJobSkills"
import axios from "axios";

function ListJobSkillsPage() {
  const [data, setData] = useState();

  const jobSkillData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/job-skills`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    jobSkillData();
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/job-skills/delete/${id}`
      );
      jobSkillData()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Job Skills" />
        <h3 className="page-title">
          Manage Job Skills <small>Job Skills</small>
        </h3>
        <ListJobSkills data={data} handleDelete={handleDelete}/>
      </div>
    </>
  )
}
export default ListJobSkillsPage