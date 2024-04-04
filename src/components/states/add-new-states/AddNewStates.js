import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function AddNewState() {
  const params = useParams();
  const [languageData, setLanguageData] = useState();
  const [country, setCountry] = useState();

  const [initialVal, setInitialVal] = useState({
    state: "",
    is_default: 1,
    is_active: 1,
    sort_order: 0,

    country_id: "",
    language_id: "",
  });
  console.log(initialVal);
  const navigate = useNavigate();

  const getLanguageData = async () => {
    try {
      const resLang = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/language`
      );
      setLanguageData(resLang.data);

      const resCountry = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/countries`
      );
      setCountry(resCountry.data);
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
      `https://abaris-j-p-backend.vercel.app/api/states/${params?.id}`
    );
    const clone = {
      ...res.data,
      country_id: res.data.country_id._id,
    };
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
        `https://abaris-j-p-backend.vercel.app/api/states/add`,
        initialVal
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-states");
      }, 1000);
    } catch (error) {}
  };

  const updateHandle = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/states/update/${params.id}`,
        initialVal
      );
      notify("update Successfull");
      setTimeout(() => {
        navigate("/admin/list-states");
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
            <h5>State form</h5>
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
                  name="language_id"
                  onChange={changeHandler}
                  value={initialVal?.language_id?._id}
                >
                  {languageData &&
                    languageData?.map((item) => {
                      return <option value={item._id}>{item?.lang}</option>;
                    })}
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Country</strong>
                </label>
                <select
                  className="form-select"
                  onChange={changeHandler}
                  name="country_id"
                  value={initialVal?.country_id}
                >
                  {country &&
                    country?.map((item) => {
                      return <option value={item?._id}>{item?.country}</option>;
                    })}
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>State</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="State"
                  type="text"
                  name="state"
                  value={initialVal?.state}
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
                    checked={initialVal?.is_default == 1}
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
                    checked={initialVal?.is_default == 0}
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
                    checked={initialVal?.is_active == 1}
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                    id="active"
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
                    checked={initialVal?.is_active == 0}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                    id="active"
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
export default AddNewState;
