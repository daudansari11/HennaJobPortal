import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewFaq from "../../components/faqs/add-new-faq/AddNewFaq";

function AddNewFaqPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Add FAQ" />
        
        <AddNewFaq />
      </div>
    </>
  );
}
export default AddNewFaqPage;
