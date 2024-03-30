import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddNewUserProfile from "../../components/usersProfile/add-newUserProfile/AddNewUserProfile";

function AddNewUserProfilePage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Add User" />

        <AddNewUserProfile />
      </div>
    </>
  );
}
export default AddNewUserProfilePage;
