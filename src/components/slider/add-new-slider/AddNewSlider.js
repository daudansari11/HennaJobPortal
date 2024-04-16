import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function AddNewSlider() {
  const params = useParams();
  const [language, setLanguage] = useState();
  const [chanegImage, changeHandlerImage] = useState();

  const [initialVal, setInitialVal] = useState({
    slider_image: "",
    slider_heading: "",
    slider_description: "",
    slider_link: "",
    slider_link_text: "",
    is_active: 1,
    language_id: "",
    is_default: 1,
  });

  const navigate = useNavigate();

  const getLanguageData = async () => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/language`
      );
      setLanguage(res.data);
    } catch (error) {
      alert("language data not found");
    }
  };

  const changeHandler = (e) => {
    const clone = { ...initialVal };
    const value = e.target.value;
    const name = e.target.name;
    clone[name] = value;
    setInitialVal(clone);
  };

  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/slider/${params?.id}`
    );
    const clone = { ...res.data, language_id: res.data.language_id._id };
    setInitialVal(clone);
  };

  useEffect(() => {
    getLanguageData();
    if (params?.id) {
      getById();
    }
  }, []);

  const notify = (updateMassage) => toast(updateMassage);

  const handleAdd = async () => {
   
    const formData = new FormData();
    formData.append('slider_image', chanegImage);
    formData.append('slider_heading', initialVal.slider_heading);
    formData.append('slider_description', initialVal.slider_description);
    formData.append('slider_link', initialVal.slider_link);
    formData.append('slider_link_text', initialVal.slider_link_text);
    formData.append('is_active', initialVal.is_active);
    formData.append('is_default', initialVal.is_default);
    formData.append('language_id', initialVal.language_id);
    try {
      const res = await axios.post(
        `https://abaris-j-p-backend.vercel.app/api/slider/add`,
        formData
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-industries");
      }, 1000);
    } catch (error) { }
  };

  const updateHandle = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/slider/update/${params.id}`,
        { ...initialVal, slider_image: chanegImage }
      );
      notify("update Successfull");
      setTimeout(() => {
        navigate("/admin/list-industries");
      }, 1000);
    } catch (error) { }
  };

  return (
    <><ToastContainer />
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>SLIDER FORM</h5>
          </div>
        </div>

        <div className="pageTab">
          <div className="">
            <div className="pageTable">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="lang" className="mb-1">
                    <strong>Language</strong>
                  </label>
                  <select
                    className="form-select"
                    id="lang"
                    name="language_id"
                    onChange={changeHandler}
                    value={initialVal?.language_id}
                  >
                    {language &&
                      language?.map((item) => {
                        return <option value={item?._id}>{item?.lang}</option>;
                      })}
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong>Slider Image </strong>
                  </label>
                  <input
                    className="form-control"
                    id="language_level"
                    placeholder="No File Chosen "
                    dir="ltr"
                    onChange={(e) => { changeHandlerImage(e.target.files[0]) }}
                    type="file"
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong>Slider Heading </strong>
                  </label>
                  <input
                    className="form-control"
                    id="language_level"
                    placeholder="Slider heading"
                    dir="ltr"
                    name="slider_heading"
                    onChange={changeHandler}
                    value={initialVal?.slider_heading}
                    type="text"
                  />
                </div>

                <div class="form-group mb-3">
                  <label for="language_level">
                    <strong>Slider description </strong>
                  </label>
                  <input
                    className="form-control"
                    id="language_level"
                    placeholder="Slider Description"
                    dir="ltr"
                    name="slider_description"
                    onChange={changeHandler}
                    value={initialVal?.slider_description}
                    type="text"
                  />
                  {/* <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onChange={(newContent) => setContent(newContent)}
                  /> */}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong>Slider Link </strong>
                  </label>
                  <input
                    className="form-control"
                    id="language_level"
                    placeholder="Slider Link"
                    dir="ltr"
                    name="slider_link"
                    onChange={changeHandler}
                    value={initialVal?.slider_link}
                    type="text"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong>Slider Link Text</strong>
                  </label>
                  <input
                    className="form-control"
                    id="language_level"
                    placeholder="Slider Link Text"
                    dir="ltr"
                    name="slider_link_text"
                    onChange={changeHandler}
                    value={initialVal?.slider_link_text}
                    type="text"
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
                      name="is_default"
                      value={1}
                      checked={initialVal?.is_default == 1}
                      onChange={changeHandler}
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
                      onChange={changeHandler}
                      value={0}
                      checked={initialVal?.is_default == 0}
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
                      name="is_active"
                      value={1}
                      checked={initialVal?.is_active == 1}
                      onChange={changeHandler}
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

                <div className="pageFooter">
                  <button
                    className="btn btn-large btn-primary"
                    type="button"
                    onClick={params.id ? updateHandle : handleAdd}
                  >
                    Update <BsFillArrowRightCircleFill />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddNewSlider;
