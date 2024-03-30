import AddNewCity from "../../components/cities/add-new-city/AddNewCity";
import PageBar from "../../components/dashboard/page-bar/PageBar";

function AddNewCityPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="  Add City" />

        <AddNewCity />
      </div>
    </>
  );
}
export default AddNewCityPage;
