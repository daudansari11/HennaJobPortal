import { useEffect, useState } from "react";
import ListCountries from "../../components/countries/list-countries/ListCountries";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import axios from "axios";

function ListCountriesPage() {
  const [data, setData] = useState();

  const getCountryData = async () => {
    try {
      const resCountryData = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/countries`
      );
      setData(resCountryData.data);
    } catch (error) {
      alert("error");
    }
  };
  useEffect(() => {
    getCountryData();
  }, []);

  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Countries" />
        <h3 className="page-title">
          Manage Countries <small>Countries</small>
        </h3>
        <ListCountries data={data} getCountryData={getCountryData} />
      </div>
    </>
  );
}
export default ListCountriesPage;
