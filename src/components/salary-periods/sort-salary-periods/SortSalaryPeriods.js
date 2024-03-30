import React from 'react';
import { FiSettings } from "react-icons/fi";
import { AiOutlineDrag } from "react-icons/ai";

const SortSalaryPeriods = () => {
  return (
    <>
    <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5> Sort Salary Period</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <h6 className="mb-2 text-uppercase">  Sort Salary Period </h6>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Drag and Drop to Sort Salary Period</strong>
                </label>
                <select className="form-select" id="lang" name="lang">
                  <option value>Select Career</option>
                  <option value="ar">عربى</option>
                  <option value="en" selected="selected">
                    English
                  </option>
                  <option value="es">Español</option>
                  <option value="ur">اردو</option>
                </select>
                <div id="CareerLevelSortDataDiv">
                  <ul id='sortable' className="ui-sortable">
                    <li className="ui-sortable-handle">
                      <AiOutlineDrag />Weekly   
                    </li>
                    <li className="ui-sortable-handle">
                      <AiOutlineDrag /> Monthly
                    </li>
                    <li className="ui-sortable-handle">
                      <AiOutlineDrag /> Yearly
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default SortSalaryPeriods