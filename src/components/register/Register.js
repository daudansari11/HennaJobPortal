import React from "react";
import logo from "../../assets/image/logo/Henna_Logo-removebg-preview.png";
function Register() {
  return (
    <section className="login_main_sec">
      <div className="container">
        <div className="login_card">
          <div className="login_logo_container">
            <img src={logo} alt="" className="login_logo" />
          </div>

          <div className="login_form_container">
            <div className="header-area">
              <h4 className="lgo">Register</h4>
            </div>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Create a Password"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm a Password"
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
                    I Accept All Terms & Conditions
                  </label>
                </div>
                {/* <div>
                  <a href="">forgot Password</a>
                </div> */}
              </div>

              <button type="submit" className="btn btn-primary btn_login">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
