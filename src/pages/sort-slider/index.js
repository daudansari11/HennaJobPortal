import PageBar from "../../components/dashboard/page-bar/PageBar";
import SortSlider from "../../components/slider/sort-slider/SortSlider";

function SortSliderPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Sort Sliders" />
        <SortSlider />
      </div>
    </>
  );
}
export default SortSliderPage;
