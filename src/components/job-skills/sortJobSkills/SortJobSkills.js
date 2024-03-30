import React from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineDrag } from "react-icons/ai";

const IndustriesData = {
  data: [
    { id: "1", industrySortData: "Fresh" },
    { id: "2", industrySortData: "Less Than 1 Year" },
    { id: "3", industrySortData: "2 Year" },
    { id: "4", industrySortData: "3 Year" },
  ],
};

function SortjobSkills() {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Sort Job Skills</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <h6 className="mb-4 text-uppercase">Sort Job Skills</h6>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Drag and Drop to Sort Job Skills</strong>
                </label>
                <select className="form-select" id="lang" name="lang">
                  <option>Select Language</option>
                  <option value="ar">عربى</option>
                  <option value="en" selected="selected">
                    English
                  </option>
                  <option value="es">Español</option>
                  <option value="ur">اردو</option>
                </select>
                <div id="languageLevelSortDataDiv">
                  <ul id="sortable" className="ui-sortable">
                    {IndustriesData.data.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="ui-sortable-handle"
                          style={{}}
                        >
                          {" "}
                          <AiOutlineDrag /> {item.industrySortData}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SortjobSkills;
