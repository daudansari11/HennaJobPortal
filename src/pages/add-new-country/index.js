

import AdddNewCountry from "../../components/countries/add-new-country/AddNewCountry";
import PageBar from "../../components/dashboard/page-bar/PageBar";


function AddNewCountryPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Add Country" />
        
        <AdddNewCountry />
      </div>
    </>
  );
}
export default AddNewCountryPage;
