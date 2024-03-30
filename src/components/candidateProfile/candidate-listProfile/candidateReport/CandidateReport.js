import React from "react";

const CandidateReportTable = () => {
  return (
    <>
      <div className="candidate_report_bg bg-dark text-white">
        All Candidate list Report
      </div>
      <div className="pageBody">
        <div className="pageTable">
          <form>
            <div className="row mb-3">
              <div className="form-group mb-3 col-lg-4 col-md-6">
                <label htmlFor="language_level">
                  <strong>Name</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Name"
                  type="text"
                />
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-6">
                <label htmlFor="language_level">
                  <strong>From</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="From"
                  type="date"
                />
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-6">
                <label htmlFor="language_level">
                  <strong>to</strong>
                </label>
                <input className="form-control" placeholder="to" type="date" />
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-6">
                <label htmlFor="language_level">
                  <strong>Mobile 1</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Mobile 1"
                  type="number"
                />
              </div>
              <div className="form-group mb-3 col-lg-4 col-md-6">
                <label htmlFor="language_level">
                  <strong>Mobile 2</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Mobile 2"
                  type="number"
                />
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-6">
                <label htmlFor="language_level">
                  <strong>Email 1</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="daniyan@11229"
                  type="email"
                />
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-4">
                <label htmlFor="lang" className="mb-1 ">
                  <strong>Category</strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">Adobe Illustrator</option>
                  <option value="Advertising">Advertising</option>
                  <option value="Advertising">Investment</option>
                  <option value="Advertising">Managment</option>
                </select>
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-4">
                <label htmlFor="lang" className="mb-1 ">
                  <strong>Location</strong>
                </label>
                <select className="form-select">
                  <option value="Adobe Illustrator">Delhi</option>
                  <option value="Advertising">Mumbai</option>
                  <option value="Advertising">kolkata</option>
                  <option value="Advertising">pune</option>
                </select>
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-4">
                <label htmlFor="lang" className="mb-1 ">
                  <strong>Status</strong>
                </label>
                <select className="form-select">
                  <option value="Kuwait">Active</option>
                  <option value="Hongkong">In Active</option>
                </select>
              </div>

              <div className="mb-3 col-lg-4 col-md-4">
                <div className="bt_container">
                  <a href="" type="btn" className="bg-primary report_btn me-2">
                    Search
                  </a>
                  <a href="" type="btn" className="bg-success report_btn">
                    Download
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CandidateReportTable;
