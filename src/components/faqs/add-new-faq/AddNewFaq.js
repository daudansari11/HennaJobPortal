

import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function AddNewFaq() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState();
  const config = {
    placeholder: "Start typing..."
  }
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


  const [data, setData] = useState({
    faq_question: "",
    faq_answer: "",
    is_default: 1,
    is_active: 1,
    language_id: "en",
  })

  const params = useParams()
  const getById = async (id) => {
    const res = await axios.get(
      `https://abaris-j-p-backend.vercel.app/api/faqs/${params?.id}`
    );
    setData(res?.data);
  };

  useEffect(() => {
    if (params?.id) {
      getById();
    }
    getLanguageData()
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
        `https://abaris-j-p-backend.vercel.app/api/faqs/add`,
        data
      );
      notify("Add Successfull");
      setTimeout(() => {
        navigate("/admin/list-faqs");
      }, 1000);
    } catch (error) { }
  }
  const submitDataUpdate = async () => {
    try {
      const res = await axios.put(
        `https://abaris-j-p-backend.vercel.app/api/faqs/update/${params.id}`,
        data
      );
      notify("Update Successfull");
      setTimeout(() => {
        navigate("/admin/list-faqs");
      }, 1000);
    } catch (error) { }
  }
  return (
    <> <ToastContainer />
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
                  <select
                    className="form-select"
                    id="lang"
                    name="language_id"
                    onChange={onchangeHandle}
                    value={data?.language_id}
                  >
                    {language &&
                      language?.map((item) => {
                        return <option value={item?._id}>{item?.lang}</option>;
                      })}
                  </select>
                </div>

                <div class="form-group mb-3">
                  <label for="language_level">
                    <strong>Questions </strong>
                  </label>

                  <input
                    className="form-control"
                    id="language_level"
                    placeholder="faq_question "
                    dir="ltr"
                    name="faq_question"
                    value={data.faq_question}
                    onChange={onchangeHandle}
                    type="text"
                  />
                </div>

                <div class="form-group mb-3">
                  <label for="language_level">
                    <strong>Answer </strong>
                  </label>

                  <input
                    className="form-control"
                    id="language_level"
                    placeholder="faq_answer "
                    dir="ltr"
                    name="faq_answer"
                    value={data.faq_answer}
                    onChange={onchangeHandle}
                    type="text"
                  />

                  {/* <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onChange={newContent=>setContent(newContent)}
                  /> */}
                </div>

                <div className="pageFooter">
                  <button className="btn btn-large btn-primary" type="button" onClick={params?.id ? submitDataUpdate : submitData}>     {params?.id ? 'Update' : 'Save'}  <BsFillArrowRightCircleFill /></button>
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
