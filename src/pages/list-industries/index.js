import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListIndustries from "../../components/industries/list-industries/ListIndustries";
import axios from "axios";

function ListIndustriesPage() {
  const [data, setData] = useState();

  const getIndustriesData = async () => {
    try {
      const res = await axios.get(
        `https://job-portal-wifv.vercel.app/api/user/employer/industries`
      );
      setData(res.data);
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    getIndustriesData();
  }, []);

  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Industries" />
        <h3 className="page-title">
          Manage Industries <small>Industries</small>
        </h3>
        <ListIndustries data={data} />
      </div>
    </>
  );
}
export default ListIndustriesPage;
