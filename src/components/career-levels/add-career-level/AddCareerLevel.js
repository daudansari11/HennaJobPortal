import React, { useEffect, useState } from "react";

import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddCareerLevel = () => {
  const params = useParams();
  const [languageData, setLanguageData] = useState();

  const [initialVal, setInitialVal] = useState({
    career_level: "",
    lang: "",
    is_default: null,
    is_active: null,
  });
  const navigate = useNavigate();

  const getLanguageData = async () => {
    try {
      const resLang = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/language`
      );
      setLanguageData(resLang.data);
    } catch (error) {
      alert("wrog");
    }
  };

  const changeHandler = (e) => {
    const clone = { ...initialVal };
    const value = e.target.value;

    const name = e.target.name;
    console.log(e.target.name);

    clone[name] = value;

    setInitialVal(clone);
  };

  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/carrier/${params?.id}`
    );
    setInitialVal(res?.data);
  };

  useEffect(() => {
    getLanguageData();
    if (params?.id) {
      getById();
    }
  }, []);

  const notify = (updateMassage) => toast(updateMassage);

  const handleAdd = async () => {
    try {
      const res = await axios.post(
        `https://abaris-j-p-backend.vercel.app/api/carrier/add`,
        initialVal
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-career-levels");
      }, 1000);
    } catch (error) {}
  };

  const updateHandle = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/carrier/update/${params.id}`,
        initialVal
      );
      notify("update Successfull");
      setTimeout(() => {
        navigate("/admin/list-career-levels");
      }, 1000);
    } catch (error) {}
  };

  return (
    <>
      <div className="pageTableWrapper">
        <ToastContainer />
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Career Levels form</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Language</strong>
                </label>
                <select
                  className="form-select"
                  id="lang"
                  name="lang"
                  onChange={changeHandler}
                >
                  {languageData &&
                    languageData?.map((item) => {
                      // console.log(item);
                      return <option value={item.lang}>{item.lang}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Career Level</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Career Level"
                  type="text"
                  name="career_level"
                  value={initialVal?.career_level}
                  onChange={changeHandler}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default" className="d-block mb-1">
                  <strong>Is Default?</strong>
                </label>

                <div className="form-check d-inline-block me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_default"
                    value={1}
                    onChange={changeHandler}
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check d-inline-block">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_default"
                    value={0}
                    onChange={changeHandler}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="is_default" className="d-block mb-1">
                  <strong>Is Active?</strong>
                </label>

                <div className="form-check d-inline-block me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name=" is_active"
                    value={1}
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check d-inline-block">
                  <input
                    className="form-check-input"
                    type="radio"
                    name=" is_active"
                    value={0}
                  />
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
          <button
            className="btn btn-large btn-primary"
            type="button"
            onClick={params.id ? updateHandle : handleAdd}
          >
            Update <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCareerLevel;
