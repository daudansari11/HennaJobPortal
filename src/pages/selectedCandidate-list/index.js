import { Helmet } from "react-helmet";
import SelectedCandidateList from "../../components/candidateProfile/selected-candidate-list/SelectedCandidateList";
import PageBar from "../../components/dashboard/page-bar/PageBar";

function SelectedCandidateListPage() {
  return (
    <>
      <Helmet>
        <title>Selected Candidate List | job portal HENNA</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageWrapper">
        <PageBar title="Selected Candidate List" />
        <h3 className="page-title">
          Selected Candidate List<small>Selected Candidate</small>
        </h3>

        <SelectedCandidateList />
      </div>
    </>
  );
}

export default SelectedCandidateListPage;
