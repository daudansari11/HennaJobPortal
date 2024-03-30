import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

function AddNewSlider() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    placeholder: "Start typing...",
  };

  return (
    <>
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
                  <label htmlFor="language_level">
                    <strong>Language </strong>
                  </label>
                  <input
                    className="form-control"
                    id="language_level"
                    placeholder="Language "
                    dir="ltr"
                    name="language_level"
                    type="text"
                  />
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
                    name="language_level"
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
                    name="language_level"
                    type="text"
                  />
                </div>

                <div class="form-group mb-3">
                  <label for="language_level">
                    <strong>Slider description </strong>
                  </label>

                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onChange={(newContent) => setContent(newContent)}
                  />
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
                    name="language_level"
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
                    name="language_level"
                    type="text"
                  />
                </div>

                <div className="form-group mb-3">
                <label htmlFor="is_default">
                  <strong>Is Default</strong>
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>

                <div className="pageFooter">
                  <button className="btn btn-large btn-primary" type="button">
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
