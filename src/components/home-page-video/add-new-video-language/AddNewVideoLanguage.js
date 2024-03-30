import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const AddNewVideoLanguage = () => {
  return (
    <>
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
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Video Link</strong>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Video Link"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is default</strong>
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

export default AddNewVideoLanguage;
