import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListState from "../../components/states/list-states/ListState";
import axios from "axios";

function ListStatesPage() {
  const [data, setData] = useState();
  const getStateData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/states`
      );
      setData(res.data);
    } catch (error) {
      alert("alert");
    }
  };
  useEffect(() => {
    getStateData();
  }, []);

  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" States" />
        <h3 className="page-title">
          Manage States <small>States</small>
        </h3>
        <ListState data={data} getStateData={getStateData} />
      </div>
    </>
  );
}
export default ListStatesPage;
