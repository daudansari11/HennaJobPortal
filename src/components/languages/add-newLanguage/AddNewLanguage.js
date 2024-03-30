import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AddNewLanguage() {
  const params = useParams();

  const [initialVal, setInitialVal] = useState({
    lang: "",
    native: "",
    iso_code: "",
    is_active: null,
    is_rtl: null,
    is_default: null,
    created_at: "",
    updated_at: null,
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const clone = { ...initialVal };
    const value = e.target.value;

    const name = e.target.name;
    console.log(e.target.name);

    clone[name] = value;

    setInitialVal(clone);
  };

  // on click edit button then u shift add-language page then first you get data (which data ) where u click.
  // get by id

  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/language/${params?.id}`
    );
    setInitialVal(res?.data);
  };

  useEffect(() => {
    if (params?.id) {
      getById();
    }
  }, []);

  const notify = (updateMassage) => toast(updateMassage);

  const handleAdd = async () => {
    try {
      const res = await axios.post(
        `https://abaris-j-p-backend.vercel.app/api/language/add`,
        initialVal
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-languages");
      }, 1000);
    } catch (error) {}
  };

  const updateHandle = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/language/update/${params.id}`,
        initialVal
      );
      notify("update Successfull");
      setTimeout(() => {
        navigate("/admin/list-languages");
      }, 1000);
    } catch (error) {}
  };

  return (
    <>
      <div className="pageTableWrapper">
        <ToastContainer />
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>LANGUAGE FORM</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Language</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="Language"
                  dir="ltr"
                  type="text"
                  name="lang"
                  value={initialVal?.lang}
                  onChange={changeHandler}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Native</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="Native"
                  dir="ltr"
                  type="text"
                  name="native"
                  value={initialVal?.native}
                  onChange={changeHandler}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>ISO Code</strong>
                </label>
                <input
                  className="form-control"
                  id="language_level"
                  placeholder="ISO Code"
                  dir="ltr"
                  type="text"
                  name="iso_code"
                  value={initialVal?.iso_code}
                  onChange={changeHandler}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="#">
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
                    id="active1"
                  />
                  <label className="form-check-label" htmlFor="active1">
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
                    id="active2"
                  />
                  <label className="form-check-label" htmlFor="active2">
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="#">
                  <strong>Is RTL?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_rtl"
                    value={1}
                    onChange={changeHandler}
                    defaultChecked
                    id="rtl11"
                  />
                  <label className="form-check-label" htmlFor="rtl11">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_rtl"
                    value={0}
                    onChange={changeHandler}
                    id="rtl2"
                  />
                  <label className="form-check-label" htmlFor="rtl2">
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="is_default">
                  <strong>Is Default?</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="is_default"
                    value={1}
                    onChange={changeHandler}
                    defaultChecked
                    id="flexRadioDefault1"
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
                    name="is_default"
                    value={0}
                    onChange={changeHandler}
                    id="flexRadioDefault2"
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
            onClick={params.id ? updateHandle : handleAdd}
          >
            Update <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
}
export default AddNewLanguage;
