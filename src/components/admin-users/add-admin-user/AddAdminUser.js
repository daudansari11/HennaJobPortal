import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const AddAdminUser = () => {
  const params = useParams();
  console.log(params);
  const [initialVal, setInitialVal] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
    role: "user",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const clone = { ...initialVal };
    const value = e.target.value;
    const name = e.target.name;

     if (name == "mobile") {
       if (value.length == 11) {
         return;
       }
     }

    clone[name] = value;
    setInitialVal(clone);
  };

  const getById = async (id) => {
    try {
      const res = await axios.get(
        `https://abaris-j-p-backend.vercel.app/api/adminuser/get/${params?.id}`
      );

      setInitialVal(res?.data.getaAdminUser);
    } catch (error) {}
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
        `https://abaris-j-p-backend.vercel.app/api/adminuser/register`,
        initialVal
      );
      notify("Add Successfull");

      setTimeout(() => {
        navigate("/admin/list-admin-users");
      }, 1000);
    } catch (error) {}
  };

  const updateHandle = async () => {
    try {
      const res = await axios.patch(
        `https://abaris-j-p-backend.vercel.app/api/adminuser/updateUser/${params?.id}`,
        initialVal
      );
      notify("update Successfull");
      setTimeout(() => {
        navigate("/admin/list-admin-users");
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
            <h5>ADD NEW ADMIN USER FORM</h5>
          </div>
        </div>

        <div className="pageBody">
          <div className="pageTable">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong> Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Name"
                  name="firstname"
                  value={initialVal?.firstname}
                  onChange={changeHandler}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong> Email Address</strong>
                </label>
                <input
                  className="form-control"
                  placeholder="Email Adress"
                  type="email"
                  name="email"
                  value={initialVal?.email}
                  onChange={changeHandler}
                />
              </div>

              {!params?.id && <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Password</strong>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="password"
                  name="password"
                  value={initialVal?.password}
                  onChange={changeHandler}
                />
              </div>}

              <div className="form-group mb-3">
                <label htmlFor="language_level">
                  <strong>Mobile</strong>
                </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Mobile"
                  name="mobile"
                  value={initialVal?.mobile}
                  onChange={changeHandler}
                />
                {initialVal.mobile?.length < 10 && (
                  <p style={{ color: "red" }}>Number must be 10 degit</p>
                )}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lang" className="mb-1">
                  <strong>Role</strong>
                </label>
                <select
                  className="form-select"
                  onChange={changeHandler}
                  name="role"
                  value={initialVal.role}
                >
                  <option value="user" defaultChecked>
                    User
                  </option>
                </select>
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
            Create New Admin User! <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddAdminUser;
