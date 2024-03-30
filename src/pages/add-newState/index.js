
import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewState from "../../components/states/add-new-states/AddNewStates";

function AddNewStatePage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Add State" />

        <AddNewState />
      </div>
    </>
  );
}
export default AddNewStatePage;
