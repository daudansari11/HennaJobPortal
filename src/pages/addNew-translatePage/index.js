import AddNewTranslate from "../../components/cms/addNew-translatePage/AddNewTranslate"
import PageBar from "../../components/dashboard/page-bar/PageBar"

function AddNewTranslatePage(){
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Add C.M.S Content" />
        
        <AddNewTranslate />
      </div>
    </>
  )
}
export default AddNewTranslatePage