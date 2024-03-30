import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListState from "../../components/states/list-states/ListState";

function ListStatesPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" States" />
        <h3 className="page-title">
          Manage States <small>States</small>
        </h3>
        <ListState />
      </div>
    </>
  );
}
export default ListStatesPage;
