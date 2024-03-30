import PageBar from "../../components/dashboard/page-bar/PageBar";
import SortFaqs from "../../components/faqs/sort-faqs/SortFaqs";

function SortFaqsPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Sort Faqs" />
        <SortFaqs />
      </div>
    </>
  );
}
export default SortFaqsPage;
