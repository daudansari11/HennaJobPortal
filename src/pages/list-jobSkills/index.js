import PageBar from "../../components/dashboard/page-bar/PageBar"
import ListJobSkills from "../../components/job-skills/list-jobSkills/ListJobSkills"

function ListJobSkillsPage(){
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Job Skills" />
        <h3 className="page-title">
        Manage Job Skills <small>Job Skills</small>
        </h3>
        <ListJobSkills/>
      </div>
    </>
  )
}
export default ListJobSkillsPage