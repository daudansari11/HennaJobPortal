import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AddCategory() {
  const params = useParams();
  const [initialVal, setInitialVal] = useState({
    category_code: "",
    category_name: "",
    category_color: "",
    category_description: "",
    meta_title: "",
    meta_description: "",
    meta_keyword: "",
    is_active: null,
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

  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/job-category/get/${params?.id}`
    );
    setInitialVal(res?.data);
  };

  useEffect(() => {
    if (params?.id) {
      getById();
    }
  }, []);

  const notify = (updateMassage) => toast(updateMassage);

  const handleUpdate = async () => {
    try {
      const res = await axios.post(
        `https://abaris-j-p-backend.vercel.app/api/job-category/add`,
        initialVal
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/category-list");
      }, 1000);
    } catch (error) {}
  };

  const updateHandle = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/job-category/update/${params.id}`,
        initialVal
      );
      notify("update Successfull");
      setTimeout(() => {
        navigate("/admin/category-list");
      }, 1000);
    } catch (error) {}
  };

  return (
    <>
      <div className="pageTableWrapper">
        <ToastContainer />
        <div className="pageHeader mb-4">
          <div className="pageTitle">
            <FiSettings />
            <h5>CATEGORY FORM</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="row mb-3">
                <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong>Category Code</strong>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Category Code"
                    type="text"
                    name="category_code"
                    value={initialVal?.category_code}
                    onChange={changeHandler}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong>Category Name</strong>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Category Name"
                    type="text"
                    name="category_name"
                    value={initialVal?.category_name}
                    onChange={changeHandler}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="language_level" className="mb-1">
                    <strong>Category Color</strong>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Category Color"
                    type="color"
                    name="category_color"
                    value={initialVal?.category_color}
                    onChange={changeHandler}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong>Category description</strong>
                  </label>
                  <textarea
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Enter you Category Description"
                    name="category_description"
                    value={initialVal?.category_description}
                    onChange={changeHandler}
                  ></textarea>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong>Meta title</strong>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Meta title"
                    type="text"
                    name="meta_title"
                    value={initialVal?.meta_title}
                    onChange={changeHandler}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong>Meta description</strong>
                  </label>
                  <textarea
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Enter you Meta Description"
                    name="meta_description"
                    value={initialVal?.meta_description}
                    onChange={changeHandler}
                  ></textarea>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong>Meta Keyword</strong>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Meta Keyword"
                    name="meta_keyword"
                    value={initialVal?.meta_keyword}
                    onChange={changeHandler}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="is_default">
                    <strong>Is Active?</strong>
                  </label>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="is_active"
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
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="is_active"
                      value={0}
                      onChange={changeHandler}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="pageFooter">
          <button
            className="btn btn-large btn-primary"
            type="button"
            onClick={params.id ? updateHandle : handleUpdate}
          >
            Update <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
}
export default AddCategory;
