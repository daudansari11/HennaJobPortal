import ListCountries from "../../components/countries/list-countries/ListCountries";
import PageBar from "../../components/dashboard/page-bar/PageBar";

function ListCountriesPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Countries" />
        <h3 className="page-title">
          Manage Countries <small>Countries</small>
        </h3>
        <ListCountries />
      </div>
    </>
  );
}
export default ListCountriesPage;
