import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";

function AddCandidateTable() {
  const [categorydata, setCategorydata] = useState();
  const [locationdata, setLocationdata] = useState();

  const params = useParams();
  const navigate = useNavigate();

  const [initialVal, setInitialVal] = useState({
    name: "",
    job_category: "",
    email: "",
    email2: null,
    mobile: "",
    mobile2: null,
    location: "",
    to: "12/2/2024",
    from: "12/2/2024",
    is_active: null,
  });

  const changeHandler = (e) => {
    const clone = { ...initialVal };
    const value = e.target.value;
    const name = e.target.name;
    if (name == "mobile2") {
      if (value.length == 11) {
        return;
      }
    }
    if (name == "mobile") {
      if (value.length == 11) {
        return;
      }
    }

    clone[name] = value;
    setInitialVal(clone);
  };

  const getById = async (id) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/candidate/${params?.id}`
      );
      const clone ={...res.data ,job_category:res.data.job_category._id}
      setInitialVal(res?.data);
    } catch (error) {}
  };

  const getData = async () => {
    try {
      const rescategory = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/job-category`
      );
      setCategorydata(rescategory.data?.data);

    } catch (error) {
      alert("wrog");
    }
  };
  const getData1 = async () => {
    try {
    
      const reslocation = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/location/`
      );
      setLocationdata(reslocation.data?.data);
    } catch (error) {
      alert("wrog");
    }
  };

  useEffect(() => {
    getData();
    getData1();
    if (params?.id) {
      getById();
    }
  }, []);

  const notify = (updateMassage) => toast(updateMassage);

  const handleSubmit = async () => {
    if (params?.id) {
      try {
        const res = await axios.put(
          `https://abaris-j-p-backend.vercel.app/api/candidate/update_candidate/${params?.id}`,
          initialVal
        );

        notify("updated Successfull");
        setTimeout(() => {
          navigate("/admin/candidate-list");
        }, 1000);
      } catch (error) {}
    } else {
      try {
        const res = await axios.post(
          `https://abaris-j-p-backend.vercel.app/api/candidate/add`,
          initialVal
        );
        notify("Add Successfull");
        setTimeout(() => {
          navigate("/admin/candidate-list");
        }, 1000);
      } catch (error) {}
    }
  };

  return (
    <>
      <div className="pageTable">
        <ToastContainer />
        <form>
          <div className="row mb-3">
            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="language_level">
                <strong>Candidate Name</strong>
              </label>
              <input
                className="form-control"
                placeholder="Candidate Name"
                type="text"
                name="name"
                value={initialVal.name}
                onChange={changeHandler}
              />
            </div>

            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="lang" className="mb-1">
                <strong>Job Category</strong>
              </label>
              <select
                className="form-select"
                onChange={changeHandler}
                name="job_category"
                value={initialVal.job_category._id}
              >
                  <option>Select Category</option>
                {categorydata &&
                  categorydata?.map((item) => {
                    return (
                      <option value={item._id}>{item.category_name}</option>
                    );
                  })}
              </select>
            </div>

            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Email 1</strong>
              </label>
              <input
                className="form-control"
                placeholder="Email 1"
                type="Email"
                name="email"
                value={initialVal.email}
                onChange={changeHandler}
              />
            </div>

            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Email 2</strong>
              </label>
              <input
                className="form-control"
                placeholder="Email 2"
                type="Email"
                name="email2"
                value={initialVal.email2}
                onChange={changeHandler}
              />
            </div>

            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="language_level">
                <strong>Mobile 1</strong>
              </label>
              <input
                className="form-control"
                placeholder="+91 8830 637322"
                type="number"
                name="mobile"
                value={initialVal.mobile}
                onChange={changeHandler}
              />

              {initialVal.mobile?.length < 10 && (
                <p style={{ color: "red" }}>Number must be 10 degit</p>
              )}
            </div>

            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="language_level">
                <strong>Mobile 2</strong>
              </label>
              <input
                className="form-control"
                placeholder="+91 9952 225272"
                type="number"
                name="mobile2"
                value={initialVal.mobile2}
                onChange={changeHandler}
              />
              {initialVal.mobile2?.length < 10 && (
                <p style={{ color: "red" }}>Number must be 10 degit</p>
              )}
            </div>

            {/* <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="language_level">
                <strong>From</strong>
              </label>
              <input
                className="form-control"
                placeholder="from"
                type="date"
                name="from"
                value={initialVal.from}
                onChange={changeHandler}
              />
            </div>

            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="language_level">
                <strong>to</strong>
              </label>
              <input
                className="form-control"
                placeholder="to"
                type="date"
                name="to"
                value={initialVal.to}
                onChange={changeHandler}
              />
            </div> */}

            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="lang" className="mb-1">
                <strong>Location</strong>
              </label>
              <select
                className="form-select"
                onChange={changeHandler}
                name="location"
                value={initialVal?.location._id}
              >
                <option>Select Location</option>
                {locationdata &&
                  locationdata.map((item) => {
                    return (
                      <option value={item._id}>{item.location_name}</option>
                    );
                  })}
              </select>
            </div>

            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <Button variant="info" type="button" className="mt-4">
                Browse
              </Button>{" "}
            </div>

            <div className="form-group mb-3 ">
              <label htmlFor="language_level">
                <strong>Candidate description</strong>
              </label>
              <textarea
                cols="30"
                rows="5"
                className="form-control"
                placeholder="Enter Candidate Description"
              ></textarea>
            </div>

            <div className="form-group mb-3 ">
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
                <label className="form-check-label" htmlFor="flexRadioDefault1">
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
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>

      <button
        className="btn btn-large btn-primary"
        type="button"
        onClick={handleSubmit}
      >
        Update <BsFillArrowRightCircleFill />
      </button>
    </>
  );
}
export default AddCandidateTable;
