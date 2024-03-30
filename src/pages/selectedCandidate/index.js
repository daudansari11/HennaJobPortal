import { Helmet } from "react-helmet";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import SelectedCandidate from "../../components/candidateProfile/selectedCandidates/SelectedCandidates";

function SelectedCandidatePage() {
  return (
    <>
      <Helmet>
        <title>Selected Candidates | job portal HENNA</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageWrapper">
        <PageBar title="Selected Candidate" />

        <SelectedCandidate />
      </div>
    </>
  );
}
export default SelectedCandidatePage;
