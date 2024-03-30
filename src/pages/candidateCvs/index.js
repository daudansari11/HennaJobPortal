import { Helmet } from "react-helmet";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import AddCandidate from "../../components/candidateProfile/add-candidate/AddCandidate";
import CandidateCvs from "../../components/candidateProfile/candidateCvs/CandidateCvs";

function CandidateCvsPage() {
  return (
    <>
      <Helmet>
        <title>Candidate CSV Import | job portal HENNA</title>
        <meta name="keyword" content="Jobs, Find Job, Give " />
        <meta name="description" content="" />
      </Helmet>
      <div className="pageWrapper">
        <PageBar title="Candidate CSV Import" />

        <CandidateCvs />
      </div>
    </>
  );
}
export default CandidateCvsPage;
