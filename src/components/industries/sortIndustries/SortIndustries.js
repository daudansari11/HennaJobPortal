import React from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineDrag } from "react-icons/ai";

const IndustriesData = {
  data: [
    { id: "1", industrySortData: "Advertising/PR" },
    { id: "2", industrySortData: "Accounting/Taxation" },
    { id: "3", industrySortData: "Agriculture/Fertilizer/Pesticide" },
    { id: "4", industrySortData: "Apparel/Clothing" },
    { id: "5", industrySortData: "Architecture/Interior Design" },
    { id: "6", industrySortData: "Arts / Entertainment" },
    { id: "7", industrySortData: "AutoMobile" },
    { id: "8", industrySortData: "Aviation" },
    { id: "9", industrySortData: "Banking/Financial Services" },
    { id: "10", industrySortData: "BPO" },
    { id: "11", industrySortData: "Broadcasting" },
    { id: "12", industrySortData: "Business Development" },
    { id: "13", industrySortData: "Call Center" },
    { id: "14", industrySortData: "Chemicals" },
    { id: "15", industrySortData: "Contruction/Cement/Metals" },
    { id: "16", industrySortData: "Consultants" },
    { id: "17", industrySortData: "Courier/Logistics" },
    { id: "18", industrySortData: "Education/Training" },
    { id: "19", industrySortData: "Electronics" },
    { id: "20", industrySortData: "Engineering" },
    { id: "21", industrySortData: "Event Management" },
  ],
};

function SortIndustries() {
  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>SORT INDUSTRIES</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <h6 className="mb-4 text-uppercase">Sort Industries</h6>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Drag and Drop to Sort Industries</strong>
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
export default SortIndustries;
