import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function AddNewUserProfile() {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader mb-4">
          <div className="pageTitle">
            <FiSettings />
            <h5>USERS FORM</h5>
          </div>
        </div>

        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-5"
        >
          <Tab eventKey="Details" title="Details"></Tab>
          <Tab eventKey="Summery" title="Summery"></Tab>
          <Tab eventKey="C.V" title="C.V"></Tab>
          <Tab eventKey="Project" title="Project"></Tab>
          <Tab eventKey="Experience" title="Experience"></Tab>
          <Tab eventKey="Education" title="Education"></Tab>
          <Tab eventKey="Skills" title="Skills"></Tab>
          <Tab eventKey="Languages" title="Languages"></Tab>
        </Tabs>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>First Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Middle Name</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Middle Name"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Last Name</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Last Name"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Email</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Email"
                  type="Email"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Password</strong>
                </label>
                <input className="form-control" value="hello" type="password" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Father Name</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Father Name"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Date of birth</strong>
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Company CEO"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Gender</strong>
                </label>
                <select className="form-select">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Marital Status</strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">
                    Select Marital Status
                  </option>
                  <option value="Divorced">Divorced</option>
                  <option value="Married">Married</option>
                  <option value="Separated">Separated</option>
                  <option value="Single">Single</option>
                  <option value="Widow/er">Widow/er</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Nationality </strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">Select Nationality</option>
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>National ID Card#</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="National ID Card#"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Country </strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">Kuwait</option>
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>State </strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">Select State</option>
                  <option value="India">Delhi</option>
                  <option value="Pakistan">banglore</option>
                  <option value="Bangladesh">Jharkhand</option>
                  <option value="Saudi Arabia">Goa</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>City </strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">Select City</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Phone</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Phone"
                  type="number"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Mobile Number</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Mobile Number"
                  type="number"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Experience </strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">Select Experience</option>
                  <option value="India">Fresh</option>
                  <option value="Pakistan">Less then one Year</option>
                  <option value="Bangladesh">2 Years</option>
                  <option value="Saudi Arabia">3 Years</option>
                  <option value="Saudi Arabia">4 Years</option>
                  <option value="Saudi Arabia">5 Years</option>
                  <option value="Saudi Arabia">6 Years</option>
                  <option value="Saudi Arabia">7 Years</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Industry </strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">Select Industries</option>
                  <option value="India">Call Center</option>
                  <option value="Pakistan">Advertising/PR</option>
                  <option value="Bangladesh">Auto Mobile</option>
                  <option value="Saudi Arabia">Chemicals</option>
                  <option value="Saudi Arabia">Electronics</option>
                  <option value="Saudi Arabia">Engineering</option>
                  <option value="Saudi Arabia">Event Managment</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Functional Area </strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">
                    Select Functional Area
                  </option>
                  <option value="India">Accountant</option>
                  <option value="Pakistan">Admin</option>
                  <option value="Bangladesh">Admin Operation</option>
                  <option value="Saudi Arabia">Bank Operation</option>
                  <option value="Saudi Arabia">Clerical</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Current Salary</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Current Salary"
                ></input>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Expected Salary</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Expected Salary"
                ></input>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong> Salary currency</strong>
                </label>
                <input
                  className="form-control"
                  placeholder=" Salary Currency"
                ></input>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Location</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Street Address</strong>
                </label>
                <textarea
                  cols="30"
                  rows="4"
                  className="form-control"
                  placeholder="Street Address"
                ></textarea>
              </div>

              

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is Active?</strong>
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
                    Active
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    In-Active
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="is_default">
                  <strong>Verified</strong>
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
                    Verified
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Not Verified
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
}
export default AddNewUserProfile;
