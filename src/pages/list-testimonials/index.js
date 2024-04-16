import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListTestimonials from "../../components/testimonials/list-testimonials/ListTestimonials";
import axios from "axios";

function ListTestimonialsPage() {
  const [data, setData] = useState();

  const getTestimonial = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/testimonial/all`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };
  const getTestimonial2 = async (page) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/testimonial/all?page=${page}`
      );
      setData(res.data);
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    getTestimonial(1);
  }, []);

  const handleDelete =async (id) => {
    try {
      const res = await axios.delete(
        `https://abaris-j-p-backend.vercel.app/api/testimonial/delete/${id}`
      );
      getTestimonial()
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Testimonials" />
        <h3 className="page-title">
          Manage Testimonials <small>Testimonials</small>
        </h3>
        <ListTestimonials data={data} handleDelete={handleDelete} getTestimonial2={getTestimonial2}/>
      </div>
    </>
  );
}
export default ListTestimonialsPage;
