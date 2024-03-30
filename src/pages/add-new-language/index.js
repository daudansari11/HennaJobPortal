import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewLanguage from "../../components/languages/add-newLanguage/AddNewLanguage";

function AddNewLanguagePage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Add Language" />
        <AddNewLanguage />
      </div>
    </>
  );
}
export default AddNewLanguagePage;
