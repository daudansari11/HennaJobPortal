import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewSlider from "../../components/slider/add-new-slider/AddNewSlider";

function AddNewSliderPage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Add Slider" />

        <AddNewSlider />
      </div>
    </>
  );
}
export default AddNewSliderPage;
