import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function AddLocation({allState}) {
  const params = useParams();

  const [initialVal, setInitialVal] = useState({
    location_code: "",
    location_name: "",
    state_id: "",
    country_id: "",
    lang: "",
    meta_description: "",
    is_active: 1,
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const clone = { ...initialVal };
    const value = e.target.value;

    const name = e.target.name;
    clone[name] = value;

    setInitialVal(clone);
  };

  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/location/get/${params?.id}`
    );
    const clone = {...res.data ,country_id:res.data?.country_id._id ,state_id:res.data?.state_id?._id}
    setInitialVal(clone);
  };

  useEffect(() => {
    if (params?.id) {
      getById();
    }
  }, []);

  const notify = (updateMassage) => toast(updateMassage);

  const handleUpdate = async () => {
    try {
      const res = await axios.post(
        `https://abaris-j-p-backend.vercel.app/api/location/add`,
        initialVal
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/location-list");
      }, 1000);
    } catch (error) {}
  };

  const updateHandle = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/location/update/${params.id}`,
        initialVal
      );
      notify("update Successfull");
      setTimeout(() => {
        navigate("/admin/location-list");
      }, 1000);
    } catch (error) {}
  };
  return (
    <div className="pageTableWrapper">
      <ToastContainer />
      <div className="pageHeader mb-4">
        <div className="pageTitle">
          <FiSettings />
          <h5>LOCATION FORM</h5>
        </div>
      </div>

      <div className="pageBody">
        <div className="pageTable">
          <form>
            <div className="row mb-3">
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Location Code</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Category Code"
                  type="text"
                  name="location_code"
                  value={initialVal?.location_code}
                  onChange={changeHandler}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Location Name</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Category Name"
                  type="text"
                  name="location_name"
                  value={initialVal?.location_name}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Country</strong>
                </label>
                <select className="form-select" id="lang" value={initialVal?.country_id} name="country_id" onChange={changeHandler}>
                  <option value>Select Country</option>
                  {allState?.country_id &&
                    allState?.country_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.country}</option>;
                    })}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>State</strong>
                </label>
                <select className="form-select" id="lang" value={initialVal?.state_id} name="state_id" onChange={changeHandler}>
                  <option value>Select State</option>
                  {allState?.states_id &&
                    allState?.states_id?.map((item) => {
                      return <option key={item._id} value={item._id}>{item.state}</option>;
                    })}
                </select>
               
              </div>

{/*              

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Language</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Language"
                  type="text"
                  name="lang"
                  value={initialVal?.lang}
                  onChange={changeHandler}
                />
              </div> */}

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Meta description</strong>
                </label>
                <textarea
                  cols="30"
                  rows="5"
                  className="form-control"
                  placeholder="Enter you Meta Description"
                  name="meta_description"
                  value={initialVal?.meta_description}
                  onChange={changeHandler}
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is Active?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_active"
                    value={1}
                    onChange={changeHandler}
                    defaultChecked
                    checked={initialVal?.is_active == 1}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_active"
                    value={0}
                    onChange={changeHandler}
                    checked={initialVal?.is_active == 0}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="pageFooter">
        <button
          className="btn btn-large btn-primary"
          type="button"
          onClick={params.id ? updateHandle : handleUpdate}
        >
          Save <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
}

export default AddLocation;
