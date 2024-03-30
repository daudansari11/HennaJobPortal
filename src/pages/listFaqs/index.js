import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListFaqs from "../../components/faqs/list-faqs/ListFaqs";

function ListFaqsPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="FAQs" />
        <h3 className="page-title">
          Manage FAQs <small>FAQs</small>
        </h3>
        <ListFaqs />
      </div>
    </>
  );
}
export default ListFaqsPage;
