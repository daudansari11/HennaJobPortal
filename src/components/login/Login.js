import React, { useState } from "react";
import logo from "../../assets/image/logo/Henna_Logo-removebg-preview.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [initialVal, setInitialVal] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const clone = { ...initialVal };
    const value = e.target.value;

    const name = e.target.name;
    clone[name] = value;
    setInitialVal(clone);
  };

  const navigate = useNavigate();

  const notify = (updateMassage) => toast(updateMassage);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `https://abaris-j-p-backend.vercel.app/api/adminuser/admin-login`,
        initialVal
      );
      notify("Login Successfull");
      window.localStorage.setItem('token' ,res.data.token)
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } catch (error) {
      alert("Wrong Password or Email Detect");
    }
  };

  return (
    <section className="login_main_sec">
      <ToastContainer />
      <div className="container">
        <div className="login_card">
          <div className="login_logo_container">
            <img src={logo} alt="" className="login_logo" />
          </div>

          <div className="login_form_container">
            <div className="header-area">
              <h4 className="lgo">Login to your account.</h4>
            </div>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  name="email"
                  value={initialVal.email}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  value={initialVal.password}
                  onChange={changeHandler}
                />
              </div>

              <div className="forgot mb-4">
                <div className=" form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="">forgot Password</a>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary btn_login"
                onClick={handleSubmit}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
