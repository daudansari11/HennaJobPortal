import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import { useNavigate, useParams } from "react-router-dom";
function AddPosition() {
  // const [languageData, setLanguageData] = useState();

  // const getData = async () => {
  //   try {
  //     const resLanguage = await axios.get(
  //       "https://abaris-j-p-backend.vercel.app/api/language"
  //     );
  //     setLanguageData(resLanguage.data);
  //   } catch (error) {
  //     alert("wrog");
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  // const [data, setData] = useState({
  //   job_shift: "",
  //   is_default: 1,
  //   is_active: 1,
  //   sort_order: 0,
  //   lang: "",
  // });

  // const params = useParams();
  // const getById = async (id) => {
  //   const res = await axios.get(
  //     `https://abaris-j-p-backend.vercel.app/api/job-shift/${params?.id}`
  //   );
  //   setData(res?.data);
  // };

  // useEffect(() => {
  //   if (params?.id) {
  //     getById();
  //   }
  // }, []);

  // const onchangeHandle = (e) => {
  //   const clone = { ...data };
  //   clone[e.target.name] = e.target.value;
  //   setData(clone);
  // };
  // const navigate = useNavigate();
  // const notify = (updateMassage) => toast(updateMassage);
  // const submitData = async () => {
  //   try {
  //     const res = await axios.post(
  //       `https://abaris-j-p-backend.vercel.app/api/job-shift/add`,
  //       data
  //     );
  //     notify("Add Successfull");
  //     setTimeout(() => {
  //       navigate("/admin/list-job-shifts");
  //     }, 1000);
  //   } catch (error) {}
  // };
  // const submitDataUpdate = async () => {
  //   try {
  //     const res = await axios.put(
  //       `https://abaris-j-p-backend.vercel.app/api/job-shift/update/${params.id}`,
  //       data
  //     );
  //     notify("Update Successfull");
  //     setTimeout(() => {
  //       navigate("/admin/list-job-shifts");
  //     }, 1000);
  //   } catch (error) {}
  // };
  return (
    <>
      <div className="pageTableWrapper">
        <ToastContainer />
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>Position FORM</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Language</strong>
                </label>
                <select
                  className="form-select"
                  id="lang"
                  // value={data?.lang}
                  // name="lang"
                  // onChange={onchangeHandle}
                >
                  <option value>Select Language</option>
                  <option value>himdi</option>
                  {/* {languageData &&
                    languageData?.map((item) => {
                      return (
                        <option key={item._id} value={item.lang}>
                          {item.lang}
                        </option>
                      );
                    })} */}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="job_shift">
                  <strong>Add Position</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Add Position"
                  dir="ltr"
                  // name="job_shift"
                  // value={data.job_shift}
                  // type="text"
                  // onChange={onchangeHandle}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is Default?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    // defaultChecked
                    // onChange={onchangeHandle}
                    // value={1}
                    // name="is_default"
                    // checked={data.is_default == 1}
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
                    // onChange={onchangeHandle}
                    // value={0}
                    // checked={data.is_default == 0}
                    // name="is_default"
                  />
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
                    // defaultChecked
                    // onChange={onchangeHandle}
                    // value={1}
                    // checked={data.is_active == 1}
                    // name="is_active"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    // checked={data.is_active == 0}
                    // type="radio"
                    // onChange={onchangeHandle}
                    // value={0}
                    // name="is_active"
                  />
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
          <button
            className="btn btn-large btn-primary"
            type="button"
            // onClick={params?.id ? submitDataUpdate : submitData}
          >
            update <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
}
export default AddPosition;
