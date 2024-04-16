import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListVideoLanguage from "../../components/home-page-video/list-video-language/ListVideoLanguage";
import axios from "axios";

function ListVideoLanguagePage() {
  const [data, setData] = useState();

  const getVidio = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/video/all`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };
  const getVidio2 = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/video/all?page=${page}`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    getVidio(1);
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/video/delete/${id}`
      );
      getVidio()
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Our Video" />
        <h3 className="page-title">
          Manage Video 
        </h3>
        <ListVideoLanguage data={data} handleDelete={handleDelete} getVidio2={getVidio2}/>
      </div>
    </>
  );
}
export default ListVideoLanguagePage;
