import { useParams } from "react-router-dom";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewJobType from "../../components/job-types/addNewJobType/AddnewJobType";
import axios from "axios";
import { useEffect, useState } from "react";

function AddNewJobTypesPage() {
  const param = useParams();
  const [data, setData] = useState();
  const getDatas = async () => {
    try {
      const res = await axios.get(
        `https://job-portal-wifv.vercel.app/employer/job-type/${param.id}`
      );
      // setData(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getDatas();
  }, []);
  return (
    <>
      <PageBar title=" Add Job Type" />
      <AddNewJobType />
    </>
  );
}
export default AddNewJobTypesPage;
