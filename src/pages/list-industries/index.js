import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListIndustries from "../../components/industries/list-industries/ListIndustries";
import axios from "axios";

function ListIndustriesPage() {
  const [data, setData] = useState();
  const ListIndustriesData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/industry`
      );
      setData(res.data);
    } catch (error) {
      alert("list industries data not found");
    }
  };

  useEffect(() => {
    ListIndustriesData();
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
