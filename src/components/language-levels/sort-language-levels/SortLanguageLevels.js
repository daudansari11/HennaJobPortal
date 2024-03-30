import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineDrag } from "react-icons/ai";

const SortLanguageLevels = () => {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Sort Language Levels</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <h6 className="mb-2 text-uppercase"> Sort Language Levels </h6>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Drag and Drop to Sort Language Levels</strong>
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
                <div id="languageLevelSortDataDiv">
                  <ul id="sortable" className="ui-sortable">
                    <li id={1} className="ui-sortable-handle" style={{}}>
                      {" "}
                      <AiOutlineDrag /> Beginner
                    </li>
                    <li id={2} className="ui-sortable-handle">
                      {" "}
                      <AiOutlineDrag />
                      Intermediate
                    </li>
                    <li id={3} className="ui-sortable-handle">
                      {" "}
                      <AiOutlineDrag />
                      Expert
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default SortLanguageLevels;
