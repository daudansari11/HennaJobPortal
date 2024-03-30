import React from "react";
import logo from "../../../assets/image/logo/Henna Logo.jpeg";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  const { sidebarActive, setSidebarActive } = data;
  return (
    <>
      <header className="headerSec">
        <div className="leftSide">
          <div className="logoPart">
            <Link to="/">
              <img src={logo} alt="Logo" className="img-fluid w-50" />
            </Link>
          </div>
          <div
            className="bar"
            onClick={() => {
              setSidebarActive(!sidebarActive);
            }}
          >
            {sidebarActive ? <FaBars /> : <ImCross />}
          </div>
        </div>
        <div className="rightSide">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Super Admin Sufiyan
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  My Profile
                </a>
              </li>

              <li>
                <Link className="dropdown-item" to="login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/login">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
