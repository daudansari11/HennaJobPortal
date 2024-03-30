import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListTestimonials from "../../components/testimonials/list-testimonials/ListTestimonials";

function ListTestimonialsPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Testimonials" />
        <h3 className="page-title">
          Manage Testimonials <small>Testimonials</small>
        </h3>
        <ListTestimonials />
      </div>
    </>
  );
}
export default ListTestimonialsPage;
