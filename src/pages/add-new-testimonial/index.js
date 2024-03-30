import React from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewTestimonial from "../../components/testimonials/add-new-testimonial/AddNewTestimonial";

const AddNewTestimonialPage = () => {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Add Testimonial" />
        <AddNewTestimonial />
      </div>
    </>
  );
};

export default AddNewTestimonialPage;
