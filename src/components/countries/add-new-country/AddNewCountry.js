import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AddNewCountry() {
  const params = useParams();
  const [languageData, setLanguageData] = useState();

  const [initialVal, setInitialVal] = useState({
    country: "",
    nationality: "",
    is_default: null,
    is_active: null,
    language_id: "",
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
    clone[name] = value;
    setInitialVal(clone);
  };

  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/countries/${params?.id}`
    );
    const clone = { ...res.data, language_id: res.data.language_id._id };
    setInitialVal(clone);
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
        `https://abaris-j-p-backend.vercel.app/api/countries/add`,
        initialVal
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-countries");
      }, 1000);
    } catch (error) {}
  };

  const updateHandle = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/countries/update/${params.id}`,
        initialVal
      );
      notify("update Successfull");
      setTimeout(() => {
        navigate("/admin/list-countries");
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
            <h5>COUNTRY FORM</h5>
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
                  name="language_id"
                  onChange={changeHandler}
                  value={initialVal?.language_id}
                >
                  {languageData &&
                    languageData?.map((item) => {
                      return (
                        <option value={item?._id} key={item._id}>
                          {item.lang}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Country</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="Country"
                  name="country"
                  value={initialVal?.country}
                  onChange={changeHandler}
                  type="text"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Nationality</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="Nationality"
                  type="text"
                  name="nationality"
                  value={initialVal?.nationality}
                  onChange={changeHandler}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>is_default ?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name=" is_default"
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
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name=" is_default"
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

              <div className="form-group">
                <label htmlFor="is_default">
                  <strong>Active</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_active"
                    value={1}
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Active
                  </label>
                </div>
                <div className="form-check mt-1 mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_active"
                    value={0}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    inActive
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
}
export default AddNewCountry;
