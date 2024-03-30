import React from 'react';
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CreateMaritalStatus = () => {
  return (
    <>
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
                <select className="form-select" id="lang" name="lang">
                  <option value>Select Language</option>
                  <option value="ar">عربى</option>
                  <option value="en" selected="selected">
                    English
                  </option>
                  <option value="es">Español</option>
                  <option value="ur">اردو</option>
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
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default" className="d-block mb-1">
                  <strong>Is Default?</strong>
                </label>

                <div className="form-check d-inline-block me-3">
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
                <div className="form-check d-inline-block">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="is_default" className="d-block mb-1">
                  <strong>Is Active?</strong>
                </label>

                <div className="form-check d-inline-block me-3">
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
                <div className="form-check d-inline-block">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                     In-Active
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
  )
}

export default CreateMaritalStatus