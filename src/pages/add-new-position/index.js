import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddPosition from "../../components/position/add-position/AddPosition";

function AddnewPsitionPage() {
  return (
    <div className="pageWrapper">
      <PageBar title="Add Position" />
      <AddPosition />
    </div>
  );
}

export default AddnewPsitionPage;
