import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from 'react-select';
const CandidateReportTable = ({ getCandidatelistDataFilter ,getCandidatelistData}) => {
  const [categorydata, setCategorydata] = useState();
  const [locationdata, setLocationdata] = useState();
  const getData = async () => {
    try {
      const rescategory = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/job-category/all-category`
      );
      const maped = rescategory.data?.map((item) => {
        return { ...item, value: item.category_name, label: item.category_name }
      })
      setCategorydata(maped);

    } catch (error) {
      alert("wrog");
    }
  };
  const getData1 = async () => {
    try {

      const reslocation = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/location/all-location`
      );
      setLocationdata(reslocation.data);
    } catch (error) {
      alert("wrog");
    }
  };

  useEffect(() => {
    getData();
    getData1();

  }, []);
  const [data, setData] = useState({
    name: '',
    dateFrom: '',
    dateTo: '',
    mobile1: '',
    email1: '',
    category: '',
    location: '',
    status: '',
  })
  const onchangeHandle = (e) => {
    const clone = { ...data }
    clone[e.target.name] = e.target.value
    setData(clone)
  }
  const [showCateg, setShoCagte] = useState([])
  const onchangeHandleCateg = (e) => {
    const clone = { ...data, category: e._id }
    setShoCagte([{...e}])
    setData(clone)
  }
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
                  value={data.name}
                  name="name"
                  onChange={onchangeHandle}
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
                  value={data.dateFrom}
                  name="dateFrom"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-6">
                <label htmlFor="language_level">
                  <strong>to</strong>
                </label>
                <input className="form-control" placeholder="to" type="date" value={data.dateTo}
                  name="dateTo"
                  onChange={onchangeHandle} />
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-6">
                <label htmlFor="language_level">
                  <strong>Mobile 1</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Mobile 1"
                  type="number"
                  value={data.mobile1}
                  name="mobile1"
                  onChange={onchangeHandle}
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
                  value={data.email1}
                  name="email1"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-4">
                <label htmlFor="lang" className="mb-1 ">
                  <strong>Category</strong>
                </label>
                <Select
                  // isMulti
                  defaultValue={showCateg}
                  value={showCateg}
                  name="category"
                  options={categorydata}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={onchangeHandleCateg}
                />
                {/* <select
                  className="form-select"
                  name="category"
                  value={data.category}
                  onChange={onchangeHandle}
                >
                  <option>Select Category</option>
                  {categorydata &&
                    categorydata?.map((item) => {
                      return (
                        <option value={item._id}>{item.category_name}</option>
                      );
                    })}
                </select> */}
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-4">
                <label htmlFor="lang" className="mb-1 ">
                  <strong>Location</strong>
                </label>
                <select
                  className="form-select"
                  name="location"
                  value={data.location}
                  onChange={onchangeHandle}
                >
                  <option value={null}>Select Location</option>
                  {locationdata &&
                    locationdata.map((item) => {
                      return (
                        <option value={item._id}>{item.location_name}</option>
                      );
                    })}
                </select>
              </div>

              <div className="form-group mb-3 col-lg-4 col-md-4">
                <label htmlFor="lang" className="mb-1 ">
                  <strong>Status</strong>
                </label>
                <select className="form-select" name="status"
                  value={data.status}
                  onChange={onchangeHandle}>
                  <option value="active">Active</option>
                  <option value="in_active">In Active</option>
                </select>
              </div>

              <div className="mb-3 col-lg-4 col-md-4">
                <div className="bt_container">
                  <a href="#" type="btn" className="bg-primary report_btn me-2" onClick={() => { getCandidatelistDataFilter(data) }}>
                    Search
                  </a>
                  <a href="" type="btn" className="bg-success report_btn">
                    Download
                  </a>
                  <a href="#" type="btn" className="bg-success report_btn me-2" style={{margin:"0 7px"}} onClick={getCandidatelistData}>
                    Reset
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
