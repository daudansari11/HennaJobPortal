import { useEffect, useState } from "react";
import PageBar from "../../components/dashboard/page-bar/PageBar";
import ListLanguage from "../../components/languages/list-language/ListLanguage";
import axios from "axios";

function ListLanguagePage() {
  const [data, setData] = useState();

  const getLanguageData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/language`
      );
      setData(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getLanguageData();
  }, []);

  return (
    <>
      <div className="pageWrapper">
        <PageBar title=" Languages" />
        <h3 className="page-title">
          Manage Languages <small>Languages</small>
        </h3>
        <ListLanguage data={data} getLanguageData={getLanguageData} />
      </div>
    </>
  );
}
export default ListLanguagePage;
