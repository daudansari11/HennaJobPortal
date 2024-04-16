import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const AddNewVideoLanguage = () => {
  const [data, setData] = useState({
    video_title: "",
    video_text: '',
    video_link: '',
    is_active: 1,
    is_default: 1,
    featured: 1,
  })

  const params = useParams()
  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/video/get/${params?.id}`
    );
    setData({...res?.data });
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
        `https://abaris-j-p-backend.vercel.app/api/video/add`,
        data
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-videos");
      }, 1000);
    } catch (error) { }
  }
  const submitDataUpdate = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/video/update/${params.id}`,
        data
      );
      notify("Update Successfull");
      setTimeout(() => {
        navigate("/admin/list-videos");
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
            <h5>VIDEO FORM</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Video Title</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Video Title"
                  type="text"
                  value={data.video_title}
                  name="video_title"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Video Text</strong>
                </label>
                <textarea
                  cols="30"
                  rows="6"
                  className="form-control"
                  placeholder="Video Text"
                  value={data.video_text}
                  name="video_text"
                  onChange={onchangeHandle}
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Video Link</strong>
                </label>
                <input
                  type="link"
                  className="form-control"
                  placeholder="Video Link"
                  value={data.video_link}
                  name="video_link"
                  onChange={onchangeHandle}
                />
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

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is default</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    onChange={onchangeHandle}
                    value={1}
                    checked={data?.is_default == 1}
                    name="is_default"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio"   onChange={onchangeHandle}
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
              </div>
              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is default</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    onChange={onchangeHandle}
                    value={1}
                    checked={data?.featured == 1}
                    name="featured"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio"   onChange={onchangeHandle}
                    value={0}
                    checked={data?.featured == 0}
                    name="featured"/>
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
  );
};

export default AddNewVideoLanguage;
