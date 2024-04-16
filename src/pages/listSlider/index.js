import axios from "axios";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListSlider from "../../components/slider/list-slider/ListSlider";
import { useEffect, useState } from "react";

function ListSliderPage() {
  const [data, setData] = useState();

  const getSlider = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/slider/all`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };
  const getSlider2 = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/slider/all?page=${page}`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    getSlider(1);
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/slider/delete/${id}`
      );
      getSlider()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sliders" />
        <h3 className="page-title">
          Manage Sliders <small>Sliders</small>
        </h3>
        <ListSlider data={data} handleDelete={handleDelete} getSlider2={getSlider2}/>
      </div>
    </>
  );
}
export default ListSliderPage;
