import ListTranslated from "../../components/cms/list-translated-pages/ListTranslated"
import PageBar from "../../components/dashboard/page-bar/PageBar"

function ListTranslatedPage(){
  return (
    <>
      
      <div className="pageWrapper">
        <PageBar title="C.M.S Content"/>
        <h3 className="page-title ">Manage C.M.S Content <small>C.M.S Content</small></h3>
        <ListTranslated/>
      </div>
    </>
  )
}
export default ListTranslatedPage
