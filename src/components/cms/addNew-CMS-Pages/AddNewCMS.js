import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function AdddNewCMS() {
  const [data, setData] = useState({
    page_slug: "",
    show_in_top_menu: '',
    show_in_footer_menu: '',
    seo_title: '',
    seo_description: '',
    seo_keywords: '',
    seo_other: '',
  })

  const params = useParams()
  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/cms/get/${params?.id}`
    );
    setData({ ...res?.data });
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
        `https://abaris-j-p-backend.vercel.app/api/cms/add`,
        data
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-cms");
      }, 1000);
    } catch (error) { }
  }
  const submitDataUpdate = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/cms/update/${params.id}`,
        data
      );
      notify("Update Successfull");
      setTimeout(() => {
        navigate("/admin/list-cms");
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
            <h5>C.M.S FORM</h5>
          </div>
        </div>

        <div className="pageTab">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>SEO Title</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="SEO Title"
                  dir="ltr"
                  name="seo_title"
                  value={data.seo_title}
                  onChange={onchangeHandle}
                  type="text"
                />
              </div>

              <div class="form-group mb-3">
                <label for="language_level">
                  <strong>SEO Description</strong>
                </label>
                <textarea
                  cols="30"
                  rows="8"
                  class="form-control"
                  placeholder="SEO Description"
                  name="seo_description"
                  value={data.seo_description}
                  onChange={onchangeHandle}
                ></textarea>
              </div>

              <div class="form-group mb-3">
                <label for="language_level">
                  <strong>SEO Keywords</strong>
                </label>
                <textarea
                  cols="30"
                  rows="8"
                  class="form-control"
                  placeholder="SEO Keywords"
                  name="seo_keywords"
                  value={data.seo_keywords}
                  onChange={onchangeHandle}
                ></textarea>
              </div>

              <div class="form-group mb-3">
                <label for="language_level">
                  <strong>Other SEO Tags</strong>
                </label>
                <textarea
                  cols="30"
                  rows="8"
                  class="form-control"
                  placeholder="Other SEO Tags"
                  name="seo_other"
                  value={data.seo_other}
                  onChange={onchangeHandle}
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Page Slug</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="Page Slug"
                  dir="ltr"
                  type="text"
                  name="page_slug"
                  value={data.page_slug}
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Show in top Menu</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    onChange={onchangeHandle}
                    value={1}
                    checked={data?.show_in_top_menu == 1}
                    name="show_in_top_menu"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio"  value={0}
                    checked={data?.show_in_top_menu == 0}
                    onChange={onchangeHandle}
                    name="show_in_top_menu"/>
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
                  <strong>Show in footer Menu</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={1}
                    checked={data?.show_in_footer_menu == 1}
                    onChange={onchangeHandle}
                    name="show_in_footer_menu"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio"  value={0}
                    checked={data?.show_in_footer_menu == 0}
                    onChange={onchangeHandle}
                    name="show_in_footer_menu"/>
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="pageFooter">
                <button className="btn btn-large btn-primary" style={{margin:"15px 0"}} type="button" onClick={params?.id ? submitDataUpdate : submitData}>     {params?.id ? 'Update' : 'Save'}  <BsFillArrowRightCircleFill /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdddNewCMS;
