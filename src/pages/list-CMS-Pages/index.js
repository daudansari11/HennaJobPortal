import { useEffect, useState } from "react";
import ListCMS from "../../components/cms/list-CMS-Pages/ListCMS";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import axios from "axios";
import { Loaders } from "../Loaders";

function ListCMSPages() {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false)
  const getCms = async (page) => {
    setLoader(true)
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/cms/all`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
    setLoader(false)
  };
  const getCms2 = async (page) => {
    setLoader(true)
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/cms/all?page=${page}`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
    setLoader(false)
  };

  useEffect(() => {
    getCms(1);
  }, []);

  const handleDelete =async (id) => {
    setLoader(true)
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/cms/delete/${id}`
      );
      getCms()
    } catch (error) {
      alert("Error");
    }
    setLoader(false)
  };

  return (
    <>{loader && <Loaders />}
      <div className="pageWrapper">
        <PageBar title="C.M.S" />
        <h3 className="page-title">
          Manage C.M.S <small>C.M.S</small>
        </h3>
        <ListCMS data={data} handleDelete={handleDelete} getCms2={getCms2}/>
      </div>
    </>
  );
}
export default ListCMSPages;
