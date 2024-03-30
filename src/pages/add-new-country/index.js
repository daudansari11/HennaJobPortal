import { useParams } from "react-router-dom";
import AddNewCountry from "../../components/countries/add-new-country/AddNewCountry";
import PageBar from "../../components/dashboard/page-bar/PageBar";

function AddNewCountryPage() {
  const params = useParams();
  return (
    <>
      <div className="pageWrapper">
        <PageBar title={params.id ? "Update Country" : " Add Country"} />

        <AddNewCountry />
      </div>
    </>
  );
}
export default AddNewCountryPage;
