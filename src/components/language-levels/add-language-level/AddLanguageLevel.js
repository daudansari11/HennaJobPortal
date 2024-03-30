import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";

const AddLanguageLevel = () => {
  const [languageData, setLanguageData] = useState();

  const getData = async () => {
    try {
      const resLanguage = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/language`
      );
      setLanguageData(resLanguage.data);

      // const reslocation = await axios.get(
      //   `https://abaris-j-p-backend.vercel.app/api/cities`
      // );
      // setLocationdata(reslocation.data);
    } catch (error) {
      alert("wrog");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(languageData);
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Language Levels form</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Language</strong>
                </label>
                <select className="form-select" id="lang" name="lang">
                  {languageData &&
                    languageData?.map((item) => {
                      return <option value>{item.lang}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Language Level</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="Language Level"
                  dir="ltr"
                  name="language_level"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is Default?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="is_default">
                  <strong>Is Active?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="pageFooter">
          <button className="btn btn-large btn-primary" type="button">
            Update <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddLanguageLevel;
