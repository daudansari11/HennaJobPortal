import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function AddNewState() {
  return (
    <>
      <div className="pageTableWrapper">
        {/* <ToastContainer /> */}
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>State form</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Language</strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">English</option>
                  <option value="Cold Calling">Hindi</option>
                  <option value="Cold Calling">Urdu</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Country</strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">India </option>
                  <option value="Cold Calling">German</option>
                  <option value="Cold Calling">itali</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>State</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="State"
                  dir="ltr"
                  name="language_level"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>is_default ?</strong>
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

              <div className="form-group">
                <label htmlFor="is_default">
                  <strong>Active</strong>
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
                <div className="form-check mt-1 mb-2">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    inActive
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="pageFooter">
          <button
            className="btn btn-large btn-primary"
            type="button"
            // onClick={params.id ? updateHandle : handleAdd}
          >
            Update <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
}
export default AddNewState;
