import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import PageBar from "../../dashboard/page-bar/PageBar"

function EditSeo(){
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Edit S.E.O" />
        
        <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>S.E.O FORM</h5>
          </div>
        </div>

        <div className="pageTab">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="SEO" title="SEO">
            <div className="">
                <div className="pageTable">
                  <form>
                    <div className="form-group mb-3">
                      <label htmlFor="language_level">
                        <strong>SEO Titlee</strong>
                      </label>
                      <input
                        className="form-control"
                        id="language_level"
                        placeholder="Jobs In Dubai, Kuwait, Qatar, Saudia Arab, INDIA"
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
                        placeholder="Find best Jobs in Dubai, Kuwait, Qatar, Saudia Arab, jobs listings and job opportunities on HS Alghanim Delivery Co. Kuwait Browse more than 100K jobs in Dubai, Kuwait, Qatar, Saudia Arab and apply for free!  hsalghanimdelivery.com is Kuwait's leading job website where more than 52K top companies are posting jobs."
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

              <div className="pageFooter">
                <button className="btn btn-large btn-primary" type="button">
                  Update <BsFillArrowRightCircleFill />
                </button>
              </div>
            </Tab>
            <Tab eventKey="Details" title="Details">
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
      </div>
    </>
  )
}
export default EditSeo