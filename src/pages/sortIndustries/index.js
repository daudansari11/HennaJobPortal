import PageBar from "../../components/dashboard/page-bar/PageBar";
import SortIndustries from "../../components/industries/sortIndustries/SortIndustries";

function SortIndustriesPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sort Industries" />
        
        <SortIndustries />
      </div>
    </>
  );
}
export default SortIndustriesPage;
