import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function AddNewPackage() {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>PACKAGE FORM</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Package Title</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="Package Title"
                  dir="ltr"
                  name="language_level"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Package Price(In USD)</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="Package Price"
                  dir="ltr"
                  name="language_level"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Package num days</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="Package num days"
                  dir="ltr"
                  name="language_level"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Package num listings*</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="Package num listings*"
                  dir="ltr"
                  name="language_level"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Package for?</strong>
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
                    Job Seeker
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Employer
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Cv Search
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
export default AddNewPackage;
