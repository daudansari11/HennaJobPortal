import React from 'react';
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
const CreateMaritalStatus = () => {
  const [languageData, setLanguageData] = useState();

  const getData = async () => {
    try {
      const resLanguage = await axios.get(
        'https://abaris-j-p-backend.vercel.app/api/language'
      );
      setLanguageData(resLanguage.data);
    } catch (error) {
      alert("wrog");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState({
    marital_status: "",
    is_default: 1,
    is_active: 1,
    language_id: "en",
  })

  const params = useParams()
  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/marital-status/${params?.id}`
    );
    const clone = {...res.data }
    setData(clone);
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
        `https://abaris-j-p-backend.vercel.app/api/marital-status/add`,
        data
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-marital-status");
      }, 1000);
    } catch (error) { }
  }
  const submitDataUpdate = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/marital-status/update/${params.id}`,
        data
      );
      notify("Update Successfull");
      setTimeout(() => {
        navigate("/admin/list-marital-status");
      }, 1000);
    } catch (error) { }
  }
  return (
    <>
    <ToastContainer />
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Marital Status form</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Language</strong>
                </label>
                <select className="form-select" id="lang" value={data?.language_id} name="language_id" onChange={onchangeHandle}>
                  <option value>Select Language</option>
                  {languageData &&
                    languageData?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.lang}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Marital Status</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Marital Status"
                  type="text"
                  name='marital_status'
                  value={data.marital_status}
                  onChange={onchangeHandle}
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
                  <input className="form-check-input" type="radio" onChange={onchangeHandle}
                    value={0}
                    checked={data?.is_default == 0}
                    name="is_default" />
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
                    name="is_active" />
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
        <button className="btn btn-large btn-primary" type="button" onClick={params?.id ? submitDataUpdate : submitData}>     {params?.id ? 'Update' : 'Save'}  <BsFillArrowRightCircleFill /></button>
        </div>
      </div>
    </>
  )
}

export default CreateMaritalStatus