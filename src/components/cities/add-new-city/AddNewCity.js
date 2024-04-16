
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function AddNewCity() {
  const [languageData, setLanguageData] = useState();
  const [states, setstates] = useState();
  const [sata, setsata] = useState();

  // const getData = async () => {
  //   try {
  //     const resLanguage = await axios.get(
  //       'https://abaris-j-p-backend.vercel.app/api/language'
  //     );
  //     setLanguageData(resLanguage.data);
  //   } catch (error) {
  //     alert("wrog");
  //   }
  // };

  const getData2 = async () => {
    try {
      const resLanguage = await axios.get(
        'https://abaris-j-p-backend.vercel.app/api/countries/all'
      );
      setstates(resLanguage.data.data);
    } catch (error) {
      alert("wrog");
    }
  };
  const getData3 = async () => {
    try {
      const resLanguage = await axios.get(
        'https://abaris-j-p-backend.vercel.app/api/states/all'
      );
      setsata(resLanguage.data.data);
    } catch (error) {
      alert("wrog");
    }
  };
  useEffect(() => {
    // getData();
    getData2();
    getData3();
  }, []);

  const [data, setData] = useState({
    state_id: "",
    city: "",
    country_id: "",
    is_default: 1,
    is_active: 1,
    sort_order: 0,
    language_id: "en",
  })

  const params = useParams()
  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/cities/get/${params?.id}`
    );
    setData(res?.data);
  };

  useEffect(() => {
    if (params?.id) {
      getById();
    }
  }, []);

  const onchangeHandle = (e) => {
    const clone = { ...data }
    clone[e.target.name] = e.target.value
    setData(clone)
  }
  const navigate = useNavigate()
  const notify = (updateMassage) => toast(updateMassage);
  const submitData = async () => {
    try {
      const res = await axios.post(
        `https://abaris-j-p-backend.vercel.app/api/cities/add`,
        data
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-cities");
      }, 1000);
    } catch (error) { }
  }
  const submitDataUpdate = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/cities/update/${params.id}`,
        data
      );
      notify("Update Successfull");
      setTimeout(() => {
        navigate("/admin/list-cities");
      }, 1000);
    } catch (error) { }
  }
  return (
    <><ToastContainer />
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>City Form</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              {/* <div className="form-group mb-3">
                <label htmlFor="language_id" className="mb-1">
                  <strong>Language</strong>
                </label>
                <select className="form-select" id="language_id" value={data?.language_id} name="language_id" onChange={onchangeHandle}>
                  <option value>Select Language</option>
                  {languageData &&
                    languageData?.map((item) => {
                      return <option key={item._id} value={item.lang}>{item.lang}</option>;
                    })}
                </select>
              </div> */}
              <div className="form-group mb-3">
                <label htmlFor="state" className="mb-1">
                  <strong>Country</strong>
                </label>
                <select className="form-select" id="state" value={data?.country_id} name="country_id" onChange={onchangeHandle}>
                  <option value>Select Language</option>
                  {states &&
                    states?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.country}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>City </strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  dir="ltr"
                  name="city"
                  onChange={onchangeHandle}
                  value={data?.city}
                  type="text"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>State</strong>
                </label>
                <select className="form-select" id="state" value={data?.state_id} name="state_id" onChange={onchangeHandle}>
                  <option value>Select State</option>
                  {sata &&
                    sata?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.state}</option>;
                    })}
                </select>
              </div>
{/* 
              <div className="form-group mb-3">
                <label htmlFor="job_shift">
                  <strong>Sort Order</strong>
                </label>
                <input
                  className="form-control"
                  id="sort_order"
                  placeholder="Sort Order"
                  dir="ltr"
                  name="sort_order"
                  value={data?.sort_order}
                  type="text"
                  onChange={onchangeHandle}
                />
              </div> */}

              {/* <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is Default?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                    onChange={onchangeHandle}
                    value={1}
                    name="is_default"
                    checked={data?.is_default == 1}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio"  onChange={onchangeHandle}
                    value={0}
                    checked={data?.is_default == 0}
                    name="is_default"/>
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div> */}

              <div className="form-group">
                <label htmlFor="is_default">
                  <strong>Is Active?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                    onChange={onchangeHandle}
                    value={1}
                    checked={data?.is_active == 1}
                    name="is_active"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" checked={data?.is_active == 0} onChange={onchangeHandle}
                    value={0}
                    name="is_active"/>
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
          <button className="btn btn-large btn-primary" type="button" onClick={params?.id ? submitDataUpdate : submitData}>
          {params?.id ? 'Update' : 'Save'} <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
}
export default AddNewCity;
