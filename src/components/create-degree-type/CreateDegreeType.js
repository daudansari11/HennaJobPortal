import React from 'react';
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CreateDegreeType = () => {
  return (
    <>
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
                  <strong>Degree Level</strong>
                </label>
                <select className="form-select" name="degree_level_id"><option value selected="selected">Select Degree Level</option><option value={1}>Non-Matriculation</option><option value={2}>Matriculation/O-Level</option><option value={3}>Intermediate/A-Level</option><option value={4}>Bachelors</option><option value={5}>Masters</option><option value={6}>MPhil/MS</option><option value={7}>PHD/Doctorate</option><option value={8}>Certification</option><option value={9}>Diploma</option><option value={10}>Short Course</option></select>

              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Degree Type</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Degree Type"
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

export default CreateDegreeType