import AdddNewCMS from "../../components/cms/addNew-CMS-Pages/AddNewCMS";
import PageBar from "../../components/dashboard/page-bar/PageBar";

function AddNewCMSPages() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Add C.M.S" />
        
        <AdddNewCMS />
      </div>
    </>
  );
}
export default AddNewCMSPages;
