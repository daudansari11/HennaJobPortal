

import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

function AddNewFaq() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config={
    placeholder:"Start typing..."
  }

  return (
    <>
      <div className="pageTableWrapper">
        <div className="pageHeader">
          <div className="pageTitle">
            <FiSettings />
            <h5>FAQS FORM</h5>
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

                <div class="form-group mb-3">
                  <label for="language_level">
                    <strong>Questions </strong>
                  </label>
                  
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onChange={newContent=>setContent(newContent)}
                  />
                </div>

                <div class="form-group mb-3">
                  <label for="language_level">
                    <strong>Answer </strong>
                  </label>
                  
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onChange={newContent=>setContent(newContent)}
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
export default AddNewFaq;
