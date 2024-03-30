import PageBar from "../../components/dashboard/page-bar/PageBar"
import AddNewJobSkills from "../../components/job-skills/add-new-jobSkills/AddNewJobSkills"




function AddNewJobSkillsPage(){
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Add Job Skill" />
        <AddNewJobSkills/>
      </div>
    </>
  )
}
export default AddNewJobSkillsPage