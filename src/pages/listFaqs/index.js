import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListFaqs from "../../components/faqs/list-faqs/ListFaqs";
import axios from "axios";

function ListFaqsPage() {
  const [data, setData] = useState();

  const getFaq = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/faqs/all`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };
  const getFaq2 = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/faqs/all?page=${page}`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    getFaq(1);
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/faqs/delete/${id}`
      );
      getFaq()
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <div className="pageWrapper">
        <PageBar title="FAQs" />
        <h3 className="page-title">
          Manage FAQs <small>FAQs</small>
        </h3>
        <ListFaqs  data={data} handleDelete={handleDelete} getFaq2={getFaq2} />
      </div>
    </>
  );
}
export default ListFaqsPage;
