import PageBar from "../../components/dashboard/page-bar/PageBar";
import SortTestimonials from "../../components/testimonials/sort-testimonial/SortTestimonial";

function SortTestimonialPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sort Testimonials" />
        <SortTestimonials />
      </div>
    </>
  );
}
export default SortTestimonialPage;
