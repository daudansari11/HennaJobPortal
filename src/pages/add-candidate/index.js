import { Helmet } from "react-helmet";
import AddCandidate from "../../components/candidateProfile/add-candidate/AddCandidate";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import { useParams } from "react-router-dom";

function AddCandidatePage() {
  const params = useParams();

  return (
    <>
      <Helmet>
        <title>Add Candidate | job portal</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageWrapper">
        <PageBar title={params.id ? "Update" : "Add"} />

        <AddCandidate />
      </div>
    </>
  );
}
export default AddCandidatePage;
