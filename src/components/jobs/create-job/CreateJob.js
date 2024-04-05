import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";


const obj = {
  company_id: "9",
  title: "",
  description: "",
  benefits: "",
  country_id: "",
  state_id: "",
  city_id: "",
  is_freelance: '',
  career_level_id: "",
  salary_from: '',
  salary_to: '',
  hide_salary: '',
  salary_currency: "",
  salary_period_id: "",
  functional_area_id:'',
  job_type_id: "",
  job_shift_id: "",
  num_of_positions: "",
  gender_id: "",
  expiry_date: "",
  degree_level_id: "",
  job_experience_id: "",
  is_active: "1",
  is_featured: "1",
  created_at: "",
  updated_at: "",
  search: "",
  slug: "",
  reference: null,
  location: null,
  type: null,
  postal_code: null,
  job_advertiser: null,
  application_url: null,
  updatedAt: "",
  job_title: ""
}
const CreateJob = ({ allState }) => {
  const [data, setData] = useState({
    position: '',
    company_id: 8,
    job_title: '',
    job_description: '',
    job_benefits: '',
    state_id: '',
    is_freelance: 0,
    salary_from: 0,
    salary_to: 0,
    hide_salary: 0,
    salary_currency: 'USD',
    salary_period_id: 1,
    num_of_positions: 1,
    expiry_date: '',
    degree_level_id: 4,
    job_experience_id: 5,
    is_active: 1,
    is_featured: 1,
    reference: null,
    location: null,
    type: null,
    postal_code: null,
    job_advertiser: null,


    skills_id: '',
    country_id: '',
    states_id: '',
    city_id: '',
    currency_id: '',
    salery_periods_id: null,
    carrier_level_id: '',
    functional_area_id: '',
    job_type_id: '',
    job_shift_id: '',
    gender_id: '',
    degree_level: '',
    job_experience: '',
  })
  const onchangeHandle = (e) => {
    const clone = { ...data }
    clone[e.target.name] = e.target.value
    setData(clone)
  }
  const navigate = useNavigate()
  const notify = (updateMassage) => toast(updateMassage);

  const params = useParams()
  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/jobs/${params?.id}`
    );
    setData({...res?.data });
  };
  useEffect(() => {
    if (params?.id) {
      getById();
    }
  }, []);
  const sendData = async () => {
    try {
      const res = await axios.post(`https://abaris-j-p-backend.vercel.app/api/jobs/add`, {...data  })
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-jobs");
      }, 1000);
    } catch (error) {
      alert('Job Not Add')
    }
  }

  const submitDataUpdate = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/jobs/update/${params.id}`,
        data
      );
      notify("Update Successfull");
      setTimeout(() => {
        navigate("/admin/list-jobs");
      }, 1000);
    } catch (error) { }
  }
  return (
    <>
     <ToastContainer />
      <div className='pageTableWrapper'>
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Job form</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Company</strong>
                </label>
                <select className="form-select" id="lang" value={data?.company_id} name="company_id" onChange={onchangeHandle}>
                  <option value>Select Company</option>
                  {allState?.company_id &&
                    allState?.company_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.name}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Job Title</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Job Title"
                  type="text"
                  value={data.job_title}
                  name="job_title"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Job description</strong>
                </label>
                <textarea
                  cols="30"
                  rows="4"
                  className="form-control"
                  placeholder="Enter you Job Description"
                  value={data.job_description}
                  name="job_description"
                  onChange={onchangeHandle}
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Benefits</strong>
                </label>
                <textarea
                  cols="30"
                  rows="4"
                  className="form-control"
                  placeholder="Benefits"
                  value={data.job_benefits}
                  name="job_benefits"
                  onChange={onchangeHandle}
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Job Skills</strong>
                </label>
                <select className="form-select" id="lang" value={data?.skills_id} name="skills_id" onChange={onchangeHandle}>
                  <option value>Select Skill</option>
                  {allState?.skills_id &&
                    allState?.skills_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.job_skill}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Country</strong>
                </label>
                <select className="form-select" id="lang" value={data?.country_id} name="country_id" onChange={onchangeHandle}>
                  <option value>Select Country</option>
                  {allState?.country_id &&
                    allState?.country_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.country}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>State</strong>
                </label>
                <select className="form-select" id="lang" value={data?.states_id} name="states_id" onChange={onchangeHandle}>
                  <option value>Select State</option>
                  {allState?.states_id &&
                    allState?.states_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.state}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>City</strong>
                </label>
                <select className="form-select" id="lang" value={data?.city_id} name="city_id" onChange={onchangeHandle}>
                  <option value>Select City</option>
                  {allState?.city_id &&
                    allState?.city_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.location_name}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is Freelance?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                    onChange={onchangeHandle}
                    value={1}
                    name="is_freelance"
                    checked={data?.is_freelance == 1}
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
                    checked={data?.is_freelance == 0}
                    name="is_freelance" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Career Level</strong>
                </label>

                <select className="form-select" id="lang" value={data?.carrier_level_id} name="carrier_level_id" onChange={onchangeHandle}>
                  <option value>Select Career level</option>
                  {allState?.carrier_level_id &&
                    allState?.carrier_level_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.career_level}</option>;
                    })}
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Salary From</strong>
                </label>
                <input type="number" className="form-control" value={data.salary_from}
                  name="salary_from"
                  onChange={onchangeHandle} />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Salary To</strong>
                </label>
                <input type="number" className="form-control" value={data.salary_to}
                  name="salary_to"
                  onChange={onchangeHandle} />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Salary Currency</strong>
                </label>
                <select className="form-select" id="lang" value={data?.currency_id} name="currency_id" onChange={onchangeHandle}>
                  <option value>Select Currency</option>
                  {allState?.currency_id &&
                    allState?.currency_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.currency}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Salary Period</strong>
                </label>
                <select className="form-select" id="lang" value={data?.salary_period_id} name="salary_period_id" onChange={onchangeHandle}>
                  <option value>Select salary period</option>
                  {allState?.salery_periods_id &&
                    allState?.salery_periods_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.salary_period}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="hide_salary">
                  <strong>Hide Salary?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                    onChange={onchangeHandle}
                    value={1}
                    name="hide_salary"
                    checked={data?.hide_salary == 1}
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
                    checked={data?.hide_salary == 0}
                    name="hide_salary" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Functional Area</strong>
                </label>
                <select className="form-select" id="lang" value={data?.functional_area_id} name="functional_area_id" onChange={onchangeHandle}>
                  <option value>Select functional area</option>
                  {allState?.functional_area_id &&
                    allState?.functional_area_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.functional_area}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Job Type</strong>
                </label>
                <select className="form-select" id="lang" value={data?.job_type_id} name="job_type_id" onChange={onchangeHandle}>
                  <option value>Select Job Type</option>
                  {allState?.job_type_id &&
                    allState?.job_type_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.job_type}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Job Shift</strong>
                </label>
                <select className="form-select" id="lang" value={data?.job_shift_id} name="job_shift_id" onChange={onchangeHandle}>
                  <option value>Select job shift</option>
                  {allState?.job_shift_id &&
                    allState?.job_shift_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.job_shift}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Positions#</strong>
                </label>
                <select className="form-select" id="lang" value={data?.position} name="position" onChange={onchangeHandle}>
                  <option value>Select positions  </option>
                  {allState?.positions &&
                    allState?.positions?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.position}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Gender</strong>
                </label>
                <select className="form-select" id="lang" value={data?.gender_id} name="gender_id" onChange={onchangeHandle}>
                  <option value>Select Gender</option>
                  {allState?.gender_id &&
                    allState?.gender_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.gender}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Job expiry date</strong>
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Job Expiry Date"
                  value={data.expiry_date}
                  name="expiry_date"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Required Degree Level</strong>
                </label>
                <select className="form-select" id="lang" value={data?.degree_level} name="degree_level" onChange={onchangeHandle}>
                  <option value>Select degree level</option>
                  {allState?.degree_level_id &&
                    allState?.degree_level_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.degree_level}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Required job experience</strong>
                </label>
                <select className="form-select" id="lang" value={data?.job_experience} name="job_experience" onChange={onchangeHandle}>
                  <option value>Select Job Exp</option>
                  {allState?.job_experience &&
                    allState?.job_experience?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.job_experience}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is featured?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                    onChange={onchangeHandle}
                    value={1}
                    name="is_featured"
                    checked={data?.is_featured == 1}
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
                    checked={data?.is_featured == 0}
                    name="is_featured" />
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
        <button className="btn btn-large btn-primary" type="button" onClick={params?.id ? submitDataUpdate : sendData}>     {params?.id ? 'Update' : 'Save'}  <BsFillArrowRightCircleFill /></button>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
