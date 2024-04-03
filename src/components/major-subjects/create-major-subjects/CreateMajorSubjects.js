

import React, { useEffect, useState } from 'react';
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CreateMajorSubjects = () => {
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
    is_default: 1,
    is_active: 1,
    language_id: "",
    major_subject: "",
  })

  const params = useParams()
  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/major-subject/${params?.id}`
    );
    setData({...res?.data ,language_id:res?.data?.language_id._id });
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
        `https://abaris-j-p-backend.vercel.app/api/major-subject/add`,
        data
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-major-subjects");
      }, 1000);
    } catch (error) { }
  }
  const submitDataUpdate = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/major-subject/update/${params.id}`,
        data
      );
      notify("Update Successfull");
      setTimeout(() => {
        navigate("/admin/list-major-subjects");
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
            <h5>Degree Type form</h5>
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
                  <strong>Major Subject</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Major Subject"
                  type="text"
                  name='major_subject'
                  value={data?.major_subject}
                  onChange={onchangeHandle}
                />
              </div>

              {/* <div className="form-group mb-3">
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

export default CreateMajorSubjects