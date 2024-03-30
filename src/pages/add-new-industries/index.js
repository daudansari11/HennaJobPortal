import { useParams } from "react-router-dom";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import AdddNewindustry from "../../components/industries/add-new-industries/AddNewIndustries";

function AddNewIndustryPage() {
  const param = useParams();
  console.log(param);
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Add Industries" />
        <AdddNewindustry />
      </div>
    </>
  );
}
export default AddNewIndustryPage;
