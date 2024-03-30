import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListSlider from "../../components/slider/list-slider/ListSlider";

function ListSliderPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sliders" />
        <h3 className="page-title">
          Manage Sliders <small>Sliders</small>
        </h3>
        <ListSlider />
      </div>
    </>
  );
}
export default ListSliderPage;
