import { useEffect, useState } from "react";
import ListCity from "../../components/cities/list-cities/ListCities";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListState from "../../components/states/list-states/ListState";
import axios from "axios";

function ListCitiesPage() {
  const [data, setData] = useState();

  const getCitiesData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/cities/all`
      );
      setData(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getCitiesData();
  }, []);

  const getCitiesData2 = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/cities/all?page=${page}`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/cities/delete/${id}`
      );
      getCitiesData()
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Cities" />
        <h3 className="page-title">
          Manage Cities <small>Cities</small>
        </h3>
        <ListCity data={data} handleDelete={handleDelete} getCitiesData2={getCitiesData2} />
      </div>
    </>
  );
}
export default ListCitiesPage;
