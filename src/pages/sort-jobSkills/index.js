import PageBar from "../../components/dashboard/page-bar/PageBar";
import SortjobSkills from "../../components/job-skills/sortJobSkills/SortJobSkills";

function SortjobSkillsPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sort Job Skills" />

        <SortjobSkills />
      </div>
    </>
  );
}
export default SortjobSkillsPage;
