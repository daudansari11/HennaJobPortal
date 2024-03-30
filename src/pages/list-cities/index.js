import ListCity from "../../components/cities/list-cities/ListCities";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListState from "../../components/states/list-states/ListState";

function ListCitiesPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Cities" />
        <h3 className="page-title">
          Manage Cities <small>Cities</small>
        </h3>
        <ListCity />
      </div>
    </>
  );
}
export default ListCitiesPage;
