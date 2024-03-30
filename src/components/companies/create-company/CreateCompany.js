import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CreateCompany = () => {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Company form</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Company Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Company Email</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Company Email"
                  type="email"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Password</strong>
                </label>
                <input className="form-control" value="hello" type="password" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Company CEO</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company CEO"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Industry</strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">Select Industry</option>
                  <option value="Cold Calling">Advertising</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Ownership Type</strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">
                    Select Ownership Type
                  </option>
                  <option value="Cold Calling">Sole</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Company Detail</strong>
                </label>
                <textarea
                  cols="30"
                  rows="4"
                  className="form-control"
                  placeholder="Enter you Job Description"
                ></textarea>
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
                  <strong>Google Map</strong>
                </label>
                <textarea
                  cols="30"
                  rows="4"
                  className="form-control"
                  placeholder="Google Map"
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Number of offices</strong>
                </label>
                <select className="form-select">
                  <option value="Kuwait">Select Number of offices</option>
                  <option value="Hongkong">Number of offices</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Website</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Website"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Number of employees</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select Number of employees</option>
                  <option value="Al-Ahmadi">Number of employees</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Established in</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select Established in</option>
                  <option value="Al-Ahmadi">Established in</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Fax #</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fax #"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Phone #</strong>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone #"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Facebook Address</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Facebook Address"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Twitter</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Twitter"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Linkedin</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Linkedin"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Google+</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Google+"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Pinterest</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Pinterest"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Country</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select Country</option>
                  <option value="Al-Ahmadi">Country</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>State</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select State</option>
                  <option value="Al-Ahmadi">State</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>City</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select City</option>
                  <option value="Al-Ahmadi">City</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Package</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select Package</option>
                  <option value="Al-Ahmadi">Package</option>
                </select>
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
                  <strong>Is Featured?</strong>
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
                    Featured
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Not Featured
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

export default CreateCompany;
