import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CreateJob = () => {
  const [data , setData] = useState({
    positions: '',
    id: 5,
    company_id: 8,
    title:  'Developer',
    description: '',
    benefits: '',
    state_id: 3926,
    is_freelance: 0,
    salary_from: 45000,
    salary_to: 70000,
    hide_salary: 0,
    salary_currency: 'USD',
    salary_period_id: 1,
    num_of_positions: 1,
    expiry_date: '',
    degree_level_id: 4,
    job_experience_id: 5,
    is_active: 1,
    is_featured: 1,
    search:'' ,
    slug: 'laravel-developer-5',
    reference: null,
    location: null,
    logo: null,
    type: null,
    postal_code: null,
    job_advertiser: null,
    application_url: null,
    json_object: null
  })
  const onchangeHandle = (e) => {
    const clone = { ...data }
    clone[e.target.name] = e.target.value
    setData(clone)
  }
  return (
    <>
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
                <select className="form-select">
                  <option value>Company Name</option>
                  <option value="Alpha">Alpha</option>
                  <option value="Bita" selected="selected">
                    Bita
                  </option>
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
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Job Skills</strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">Adobe Illustrator</option>
                  <option value="Cold Calling">Cold Calling</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Country</strong>
                </label>
                <select className="form-select">
                  <option value="Kuwait">Kuwait</option>
                  <option value="Hongkong">Hongkong</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>State</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Al-Asimah</option>
                  <option value="Al-Ahmadi">Al-Ahmadi</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>City</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Kuwait</option>
                  <option value="Al-Ahmadi">Kuwait</option>
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
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
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
                <select className="form-select">
                  <option value selected="selected">
                    Select Career level
                  </option>
                  <option value={1}>Department Head</option>
                  <option value={2}>Entry Level</option>
                  <option value={3}>Experienced Professional</option>
                  <option value={4}>GM / CEO / Country Head / President</option>
                  <option value={5}>Intern/Student</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Salary From</strong>
                </label>
                <input type="number" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Salary To</strong>
                </label>
                <input type="number" className="form-control" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Salary Currency</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select Salary Currency</option>
                  <option value="Al-Ahmadi">AUED</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Salary Period</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select Salary Period</option>
                  <option value="Al-Ahmadi">Weekly</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="hide_salary">
                  <strong>Hide Salary?</strong>
                </label>

                <div className="form-check">
                  <input className="form-check-input" type="radio" />
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
                    defaultChecked
                  />
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
                <select className="form-select">
                  <option value="Al-Asimah">Select Functional Area</option>
                  <option value="Al-Ahmadi">Accountant</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Job Type</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select Job Type</option>
                  <option value="Al-Ahmadi">Contact</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Job Shift</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select Job Shift</option>
                  <option value="Al-Ahmadi">First Shift</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Positions#</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select Positions#</option>
                  <option value="Al-Ahmadi">1</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Gender</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select No Preference</option>
                  <option value="Al-Ahmadi">Male</option>
                  <option value="Al-Ahmadi">Female</option>
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
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Required Degree Level</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">
                    Select Required Degree Level
                  </option>
                  <option value="Al-Ahmadi">Non Matriculation</option>
                  <option value="Al-Ahmadi">Bachelors</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Required job experience</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">
                    Select Required job experience
                  </option>
                  <option value="Al-Ahmadi">Fresh</option>
                  <option value="Al-Ahmadi">Less than 1 year</option>
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
                  <input className="form-check-input" type="radio"  onChange={onchangeHandle}
                    value={0}
                    checked={data?.is_featured == 0}
                    name="is_featured"/>
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
          <button className="btn btn-large btn-primary" type="button">
            Update <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
