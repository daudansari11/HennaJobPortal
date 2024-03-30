import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function SiteSettings() {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>SITE SETTING FORM</h5>
          </div>
        </div>

        <div className="pageTab">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Site" title="Site">
              <div className="pageBody">
                <div className="pageTable">
                  <form>
                    <div className="form-group mb-3">
                      <label htmlFor="lang" className="mb-1">
                        <strong>Site Name</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="HS Alghanim Delivery Job Portal Kuwait"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="language_level">
                        <strong>Site Slogan</strong>
                      </label>
                      <input
                        className="form-control"
                        placeholder="Find Jobs easily with HS Alghanim in Kuwait"
                        type="text"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="language_level">
                        <strong>Primary Phone#</strong>
                      </label>
                      <input
                        className="form-control"
                        placeholder="+918851746286"
                        type="text"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="language_level">
                        <strong>Secondary Phone#</strong>
                      </label>
                      <input
                        className="form-control"
                        placeholder="+918851746286"
                        type="Email"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="language_level">
                        <strong>From Email Address</strong>
                      </label>
                      <input
                        className="form-control"
                        placeholder="info@hsalghanimdelivery.com"
                        type="text"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="language_level">
                        <strong>From Email Name</strong>
                      </label>
                      <input
                        className="form-control"
                        placeholder="HS Alghanim Kuwait"
                        type="text"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="lang" className="mb-1">
                        <strong>To Email Address</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="info@hsalghanimdelivery.com"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="lang" className="mb-1">
                        <strong>To Email Name</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="HS Alghanim Kuwait"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="lang" className="mb-1">
                        <strong>Default Country</strong>
                      </label>
                      <select className="form-select">
                        <option value="kuwait">kuwait</option>
                        <option value="Korea">Korea</option>
                        <option value="North Korea">North Korea</option>
                        <option value="Afghan">Afghan</option>
                      </select>
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
                      <label htmlFor="lang" className="mb-1">
                        <strong>Default Currency Code</strong>
                      </label>
                      <select className="form-select">
                        <option value="kuwait">KYD</option>
                        <option value="Korea">KHR</option>
                        <option value="North Korea">KGS</option>
                        <option value="Afghan">JPY</option>
                      </select>
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="language_level">
                        <strong>Street Address</strong>
                      </label>
                      <textarea
                        cols="30"
                        rows="8"
                        className="form-control"
                        placeholder=" Jaleel Al-Shuyoukh Block -1
                        Opposite tourist Park Al Baser Complex Building No 29, office No23
                        Website –www.hsalghanimdelivery.com
                        "
                      ></textarea>
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="language_level">
                        <strong>Site Google Map</strong>
                      </label>
                      <textarea
                        cols="30"
                        rows="8"
                        className="form-control"
                        placeholder=" Jaleel Al-Shuyoukh Block -1
                        Opposite tourist Park Al Baser Complex Building No 29, office No23
                        Website –www.hsalghanimdelivery.com
                        "
                      ></textarea>
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
            <Tab eventKey="Email" title="Email">
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
            <Tab eventKey="Social Network" title="Social Network">
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
            <Tab eventKey="Manage Ads" title="Manage Ads">
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
            <Tab eventKey="Keptcha" title="Keptcha">
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
            <Tab eventKey="Social Media Login" title="Social Media Login">
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
            <Tab eventKey="Payment Getways" title="Payment Getways">
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
            <Tab eventKey="Home Page Slider" title="Home Page Slider">
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
export default SiteSettings;
