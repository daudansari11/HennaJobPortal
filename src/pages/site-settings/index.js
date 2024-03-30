import PageBar from "../../components/dashboard/page-bar/PageBar"
import SiteSettings from "../../components/site-settings/SiteSettings"

function SiteSettingsPage(){
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Edit Site Setting" />
        
        <SiteSettings />
      </div>
    </>
  )
}
export default SiteSettingsPage