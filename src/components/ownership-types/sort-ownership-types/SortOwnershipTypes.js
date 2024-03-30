import React from 'react';
import { FiSettings } from "react-icons/fi";
import { AiOutlineDrag } from "react-icons/ai";

const SortOwnershipTypes = () => {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5> Sort Ownership Types</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <h6 className="mb-2 text-uppercase">  Sort Ownership Types </h6>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Drag and Drop to Sort Ownership Types</strong>
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
                      <AiOutlineDrag />Public
                    </li>
                    <li className="ui-sortable-handle">
                      <AiOutlineDrag /> Private
                    </li>
                    <li className="ui-sortable-handle">
                      <AiOutlineDrag /> Government
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

export default SortOwnershipTypes