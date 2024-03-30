import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

function AddBlog() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    placeholder: "Start typing...",
  };

  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageTab">
          <div className="">
            <div className="pageTable">
              <form>
                {/* <div className="form-group mb-3">
                  <label htmlFor="language_level">
                    <strong> Select Language </strong>
                  </label>
                  <input
                    className="form-control"
                    id="language_level"
                    placeholder="Language "
                    dir="ltr"
                    name="language_level"
                    type="text"
                  />
                </div> */}

                <div className="form-group mb-5">
                  <label htmlFor="lang" className="mb-1">
                    <strong>Select Language</strong>
                  </label>
                  <select className="form-select">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="German">German</option>
                    <option value="Urdu">Urdu</option>
                  </select>
                </div>

                <div className="form-group mb-5">
                  <label htmlFor="language_level">
                    <strong> Title </strong>
                  </label>
                  <input
                    className="form-control"
                    id="language_level"
                    placeholder=" "
                    dir="ltr"
                    name="language_level"
                    type="text"
                  />
                </div>

                <div className="form-group mb-5">
                  <label htmlFor="language_level">
                    <strong> Slug </strong>
                  </label>
                  <input
                    className="form-control"
                    id="language_level"
                    placeholder=" "
                    dir="ltr"
                    name="language_level"
                    type="text"
                  />
                </div>

                

                <div class="form-group mb-3">
                  <label for="language_level">
                    <strong>Questions </strong>
                  </label>

                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onChange={(newContent) => setContent(newContent)}
                  />
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
export default AddBlog;
