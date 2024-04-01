import { useParams } from "react-router-dom";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewState from "../../components/states/add-new-states/AddNewStates";

function AddNewStatePage() {
  const params = useParams();
  return (
    <>
      <div className="pageWrapper">
        <PageBar title={params.id ? "Update State" : " Add State"} />

        <AddNewState />
      </div>
    </>
  );
}
export default AddNewStatePage;
