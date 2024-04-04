import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CreateGender = () => {
  // const [area, setArea] = useState();
  const [language, setLanguage] = useState();

  const params = useParams();

  const [initialVal, setInitialVal] = useState({
    gender: "",
    is_default: 1,
    is_active: 1,
    sort_order: 2,
    language_id: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const clone = { ...initialVal };
    const value = e.target.value;

    const name = e.target.name;
    console.log(e.target.name);

    clone[name] = value;

    setInitialVal(clone);
  };

  const getAreaData = async () => {
    try {
      // const res = await axios.get(
      //   `https://abaris-j-p-backend.vercel.app/api/functional-area`
      // );
      const languageData = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/language`
      );
      // setArea(res.data);
      setLanguage(languageData.data);
    } catch (error) {
      alert("wrong data get functional area");
    }
  };

  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/gender/${params?.id}`
    );
    const clone = { ...res.data, language_id: res.data.language_id._id };
    setInitialVal(clone);
  };

  useEffect(() => {
    getAreaData();
    if (params?.id) {
      getById();
    }
  }, []);

  const notify = (updateMassage) => toast(updateMassage);

  const handleAdd = async () => {
    try {
      const res = await axios.post(
        `https://abaris-j-p-backend.vercel.app/api/gender/add`,
        initialVal
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-genders");
      }, 1000);
    } catch (error) {}
  };

  const updateHandle = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/gender/update/${params.id}`,
        initialVal
      );
      notify("update Successfull");
      setTimeout(() => {
        navigate("/admin/list-genders");
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
            <h5>Gender form</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              {/* <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Functional Area</strong>
                </label>
                <select className="form-select" id="lang" name="lang">
                  {area &&
                    area?.map((item) => {
                      return (
                        <option key={item._id} value={item._id}>
                          {item?.functional_area}
                        </option>
                      );
                    })}
                </select>
              </div> */}

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Language</strong>
                </label>
                <select
                  className="form-select"
                  id="lang"
                  name="language_id"
                  value={initialVal.language_id}
                  onChange={changeHandler}
                >
                  {language &&
                    language?.map((item) => {
                      return (
                        <option key={item._id} value={item._id}>
                          {item?.lang}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Gender</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Gender"
                  type="text"
                  name="gender"
                  value={initialVal?.gender}
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
                    name="is_active"
                    value={1}
                    onChange={changeHandler}
                    checked={initialVal?.is_active == 1}
                    defaultChecked
                    id="active1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check d-inline-block">
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
                <label htmlFor="is_default" className="d-block mb-1">
                  <strong>Is Active?</strong>
                </label>

                <div className="form-check d-inline-block me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                    name="is_active"
                    value={1}
                    onChange={changeHandler}
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
                    name="is_active"
                    value={0}
                    onChange={changeHandler}
                    defaultChecked
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

export default CreateGender;
