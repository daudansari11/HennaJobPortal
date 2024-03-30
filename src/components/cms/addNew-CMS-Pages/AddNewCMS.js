import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function AdddNewCMS() {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>C.M.S FORM</h5>
          </div>
        </div>

        <div className="pageTab">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Details">
              <div className="">
                <div className="pageTable">
                  <form>
                    <div className="form-group mb-3">
                      <label htmlFor="language_level">
                        <strong>Page Slug</strong>
                      </label>
                      <input
                        className="form-control"
                        id="language_level"
                        placeholder="Page Slug"
                        dir="ltr"
                        name="language_level"
                        type="text"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="is_default">
                        <strong>Show in top Menu</strong>
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
                        <strong>Show in footer Menu</strong>
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
            </Tab>
            <Tab eventKey="profile" title="S.E.O">
              <div className="">
                <div className="pageTable">
                  <form>
                    <div className="form-group mb-3">
                      <label htmlFor="language_level">
                        <strong>SEO Title</strong>
                      </label>
                      <input
                        className="form-control"
                        id="language_level"
                        placeholder="SEO Title"
                        dir="ltr"
                        name="language_level"
                        type="text"
                      />
                    </div>

                    <div class="form-group mb-3">
                      <label for="language_level">
                        <strong>SEO Description</strong>
                      </label>
                      <textarea
                        cols="30"
                        rows="8"
                        class="form-control"
                        placeholder="SEO Description"
                      ></textarea>
                    </div>

                    <div class="form-group mb-3">
                      <label for="language_level">
                        <strong>SEO Keywords</strong>
                      </label>
                      <textarea
                        cols="30"
                        rows="8"
                        class="form-control"
                        placeholder="SEO Keywords"
                      ></textarea>
                    </div>

                    <div class="form-group mb-3">
                      <label for="language_level">
                        <strong>Other SEO Tags</strong>
                      </label>
                      <textarea
                        cols="30"
                        rows="8"
                        class="form-control"
                        placeholder="Other SEO Tags"
                      ></textarea>
                    </div>

                    <div className="pageFooter">
                      <button
                        className="btn btn-large btn-primary"
                        type="button"
                      >
                        Update <BsFillArrowRightCircleFill />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
export default AdddNewCMS;
