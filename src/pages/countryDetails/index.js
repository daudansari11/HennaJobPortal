import ListCountryDetails from "../../components/country-details/list-country-details/ListCountryDetails";
import PageBar from "../../components/dashboard/page-bar/PageBar";

function CountryDetailsPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Country Details" />
        <h3 className="page-title">
          Manage Country Details <small>Country Details</small>
        </h3>
        <ListCountryDetails />
      </div>
    </>
  );
}
export default CountryDetailsPage;
