import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CreateCompany = ({dataAll}) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    ceo: "",
    description: "",
    address: "",
    no_of_offices: 1,
    website: "",
    no_of_employees: 1,
    established_in: "",
    fax: 1,
    phone: "",
    logo: "",
    slug: "",
    is_active: 1,
    is_featured: 1,
    ownership_type_id: "",
    industry_id: "",
    country_id: "",
    city_id: "",
    map: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    google_plus: "",
    pinterest: "",
    package_id: "",
    package_start_date: "",
    package_end_date: "",
  })

  const params = useParams()
  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/company/${params?.id}`
    );
    setData({ ...res?.data,country_id:res.data.country_id._id ,city_id:res.data.city_id._id });
  };

  useEffect(() => {
    if (params?.id) {
      getById();
    }
  }, []);

  const onchangeHandle = (e) => {
    const clone = { ...data }
    clone[e.target.name] = e.target.value
    setData(clone)
  }
  const navigate = useNavigate()
  const notify = (updateMassage) => toast(updateMassage);
  const submitData = async () => {
    try {
      const res = await axios.post(
        `https://abaris-j-p-backend.vercel.app/api/company/add`,
        data
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-companies");
      }, 1000);
    } catch (error) { }
  }
  const submitDataUpdate = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/company/update/${params.id}`,
        data
      );
      notify("Update Successfull");
      setTimeout(() => {
        navigate("/admin/list-companies");
      }, 1000);
    } catch (error) { }
  }
  return (
    <>
      <ToastContainer />
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Company form</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Company Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  value={data.name}
                  name="name"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Company Email</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Company Email"
                  type="email"
                  value={data.email}
                  name="email"
                  onChange={onchangeHandle}
                />
              </div>

              {/* <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Password</strong>
                </label>
                <input className="form-control"  value={data.p}
                  name="email"
                  onChange={onchangeHandle} type="password" />
              </div> */}

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Company CEO</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company CEO"
                  value={data.ceo}
                  name="ceo"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Industry</strong>
                </label>
                <select className="form-select" id="lang" value={data?.industry_id} name="industry_id" onChange={onchangeHandle}>
                  <option value>Select Industries</option>
                  {dataAll?.industrys &&
                    dataAll?.industrys?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.industry}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Ownership Type</strong>
                </label>
                <select className="form-select" id="lang" value={data?.ownership_type_id} name="ownership_type_id" onChange={onchangeHandle}>
                  <option value>Select Ownership</option>
                  {dataAll?.owners &&
                    dataAll?.owners?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.ownership_type}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Description</strong>
                </label>
                <textarea
                  cols="30"
                  rows="4"
                  className="form-control"
                  placeholder="Enter you  Description"
                  value={data.description}
                  name="description"
                  onChange={onchangeHandle}
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Location</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  value={data.address}
                  name="address"
                  onChange={onchangeHandle}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Slug</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="slug"
                  value={data.slug}
                  name="slug"
                  onChange={onchangeHandle}
                />
              </div>
{/* 
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Google Map</strong>
                </label>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54005290917!2d77.04417188693083!3d28.52725273691211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1712389298806!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" value={data.map}
                  name="map"
                  style={{margin:"14px"}}
                  onChange={onchangeHandle} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div> */}

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Number of offices</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data.no_of_offices}
                  name="no_of_offices"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Website</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Website"
                  value={data.website}
                  name="website"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Number of employees</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  value={data.no_of_employees}
                  name="no_of_employees"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Established in</strong>
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={data.established_in}
                  name="established_in"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Fax #</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fax #"
                  value={data.fax}
                  name="fax"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Phone #</strong>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone #"
                  value={data.phone}
                  name="phone"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Facebook Address</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Facebook Address"
                  value={data.facebook}
                  name="facebook"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Twitter</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Twitter"
                  value={data.twitter}
                  name="twitter"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Linkedin</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Linkedin"
                  value={data.linkedin}
                  name="linkedin"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Google+</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Google+"
                  value={data.google_plus}
                  name="google_plus"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Pinterest</strong>
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Pinterest"
                  value={data.pinterest}
                  name="pinterest"
                  onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Country</strong>
                </label>
                <select className="form-select" id="lang" value={data?.country_id} name="country_id" onChange={onchangeHandle}>
                  <option value>Select Country</option>
                  {dataAll?.contry &&
                    dataAll?.contry?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.country}</option>;
                    })}
                </select>
              </div>

              {/* <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>State</strong>
                </label>
                <select className="form-select" id="lang" value={data?.} name="country_id" onChange={onchangeHandle}>
                  <option value>Select Country</option>
                  {dataAll?.contry &&
                    dataAll?.contry?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.country}</option>;
                    })}
                </select>
              </div> */}

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>City</strong>
                </label>
                <select className="form-select" id="lang" value={data?.city_id} name="city_id" onChange={onchangeHandle}>
                  <option value>Select City</option>
                  {dataAll?.city &&
                    dataAll?.city?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.location_name}</option>;
                    })}
                </select>
              </div>

              {/* <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Package</strong>
                </label>
                <select className="form-select">
                  <option value="Al-Asimah">Select Package</option>
                  <option value="Al-Ahmadi">Package</option>
                </select>
              </div> */}
              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is featured?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                    onChange={onchangeHandle}
                    value={1}
                    name="is_featured"
                    checked={data?.is_featured == 1}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={onchangeHandle}
                    value={0}
                    checked={data?.is_featured == 0}
                    name="is_featured" />
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
                  <strong>Is Active?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                    onChange={onchangeHandle}
                    value={1}
                    checked={data?.is_active == 1}
                    name="is_active"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" checked={data?.is_active == 0} onChange={onchangeHandle}
                    value={0}
                    name="is_active" />
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
          <button className="btn btn-large btn-primary" type="button" onClick={params?.id ? submitDataUpdate : submitData}>     {params?.id ? 'Update' : 'Save'}  <BsFillArrowRightCircleFill /></button>
        </div>
      </div>
    </>
  );
};

export default CreateCompany;
