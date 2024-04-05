import React, { useState } from "react";
import { BiChevronLeft, BiHomeAlt2, BiUser } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import { SlGraduation, SlWrench } from "react-icons/sl";
import {
  FaIndustry,
  FaUserTie,
  FaLevelUpAlt,
  FaRegMoneyBillAlt,
  FaUsers,
} from "react-icons/fa";
import {
  AiOutlinePieChart,
  AiOutlineAreaChart,
  AiOutlineFileText,
  AiOutlineLineChart,
  AiOutlineCamera,
} from "react-icons/ai";
import {
  BsGraphUpArrow,
  BsBank,
  BsGenderAmbiguous,
  BsBriefcase,
  BsBuildings,
  BsCurrencyExchange,
} from "react-icons/bs";

import { Link, NavLink } from "react-router-dom";

import { SiGoogletranslate } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { GoGlobe } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";

const SideBar = ({setSidebarActive}) => {
  const [allAside, setAllAside] = useState({
    admin: false,
    language: false,
    career: false,
    functional: false,
    gender: false,
    industry: false,
    experience: false,
    skill: false,
    types: false,
    shifts: false,
    degreeLevel: false,
    degreeType: false,
    majorSub: false,
    resultType: false,
    maritalStatus: false,
    ownership: false,
    salaryPeriod: false,
    jobs: false,
    company: false,
    users: false,
    translate: false,
    cms: false,
    manageblog: false,
    seo: false,
    faqs: false,
    homepage: false,
    testimonial: false,
    slider: false,
    candidate: false,
    category: false,
    location: false,
    countries: false,
    countrydetails: false,
    state: false,
    cities: false,
    packages: false,
    site: false,
    selectCandidate: false,
    position: false,
    currency: false,
  });

  const changeOpen = (val, str) => {
    const clone = { ...allAside };
    for (const iterator in clone) {
      if (iterator == str) {
        clone[str] = val;
      } else {
        clone[iterator] = false;
      }
    }
    setAllAside(clone);
    setSidebarActive(true)
  };

  return (
    <>
      <div className="pageSidebar ">
        <ul className="mainList">
          <li className="navItem start active">
            <div className="text">
              <BiHomeAlt2 />
              <Link to="/admin" className="title">
                Dashboard
              </Link>
            </div>
          </li>

          {/* ---admin--user--- */}
          <li className="heading">
            <h3 className="uppercase">Admin Users</h3>
          </li>
          <li className="navItem">
            <button
              className={`navLink ${allAside.admin ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.admin, "admin");
              }}
            >
              <div className="text">
                <BiUser />
                <span className="title">Admin Users</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.admin && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-admin-users" className="subLink">
                    <div className="subText">
                      <span className="title">List All Admin Users</span>
                    </div>
                  </Link>
                </li>

                <li className="subItem">
                  <Link to="create-admin-user" className="subLink">
                    <div className="subText">
                      <span className="title">Add Admin User</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* -----module--- */}
          {/* -----module--- */}
          {/* -----module--- */}
          <li className="heading">
            <h3 className="uppercase">modules</h3>
          </li>

          <li className="navItem">
            <button
              className={`navLink ${allAside.jobs ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.jobs, "jobs");
              }}
            >
              <div className="text">
                <BsBriefcase />
                <span className="title">jobs</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.jobs && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-jobs" className="subLink">
                    <div className="subText">
                      <span className="title">List jobs</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-job" className="subLink">
                    <div className="subText">
                      <span className="title">Add new jobs</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>



          {/* --company-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.company ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.company, "company");
              }}
            >
              <div className="text">
                <BsBuildings />
                <span className="title">Companies</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.company && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-companies" className="subLink">
                    <div className="subText">
                      <span className="title">List Companies</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-company" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Company</span>
                    </div>
                  </NavLink>
                </li>

                <li className="subItem">
                  <NavLink to="list-payment-history" className="subLink">
                    <div className="subText">
                      <span className="title">
                        List Company Payment History
                      </span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ---candidates */}
          {/* ---candidates */}
          {/* ---candidates */}
          {/* ---candidates */}

          <li className="navItem">
            <button
              className={`navLink ${allAside.candidate ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.candidate, "candidate");
              }}
            >
              <div className="text">
                <CiUser />
                <span className="title">Candidates</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.candidate && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="candidate-list" className="subLink">
                    <div className="subText">
                      <span className="title">Candidates List</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="add-candidate" className="subLink">
                    <div className="subText">
                      <span className="title">Add Candidates</span>
                    </div>
                  </NavLink>
                </li>

                <li className="subItem">
                  <NavLink to="candidate-CVS" className="subLink">
                    <div className="subText">
                      <span className="title">Candidates CSV Import</span>
                    </div>
                  </NavLink>
                </li>

                <li className="subItem">
                  <NavLink to="candidate-CVS" className="subLink">
                    <div className="subText">
                      <span className="title">Candidates CSV Import List</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ---selected--candidates */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.selectCandidate ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.selectCandidate, "selectCandidate");
              }}
            >
              <div className="text">
                <FaUsers />
                <span className="title">Selected Candidates</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.selectCandidate && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="selected-candidate" className="subLink">
                    <div className="subText">
                      <span className="title">Selected Candidate</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="selected-candidate-list" className="subLink">
                    <div className="subText">
                      <span className="title">Selected Candidate List</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ----category--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.category ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.category, "category");
              }}
            >
              <div className="text">
                <CiUser />
                <span className="title">Category</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.category && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="category-list" className="subLink">
                    <div className="subText">
                      <span className="title">Category List</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="add-category" className="subLink">
                    <div className="subText">
                      <span className="title">Add Category</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ----l0cation--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.location ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.location, "location");
              }}
            >
              <div className="text">
                <FaLocationDot />
                <span className="title">Location</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.location && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="location-list" className="subLink">
                    <div className="subText">
                      <span className="title">Location List</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="add-location" className="subLink">
                    <div className="subText">
                      <span className="title">Add Location</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ---C.M.S-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.cms ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.cms, "cms");
              }}
            >
              <div className="text">
                <AiOutlineFileText />
                <span className="title">C.M.S</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.cms && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-cms" className="subLink">
                    <div className="subText">
                      <span className="title">List C.M.S Pages</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-cms" className="subLink">
                    <div className="subText">
                      <span className="title">Add New C.M.S Pages</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="list-cmsContent" className="subLink">
                    <div className="subText">
                      <span className="title">List Translated Pages</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-cmsContent" className="subLink">
                    <div className="subText">
                      <span className="title">Add New Translate Pages</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ---manage--blog---- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.manageblog ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.manageblog, "manageblog");
              }}
            >
              <div className="text">
                <FaLevelUpAlt />
                <span className="title">Manage Blogs</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.manageblog && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="blog-list" className="subLink">
                    <div className="subText">
                      <span className="title">List Blogs</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="add-new-blog" className="subLink">
                    <div className="subText">
                      <span className="title">Add Blog</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="blog_category" className="subLink">
                    <div className="subText">
                      <span className="title">Categories</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          
          {/* ---SEO--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.seo ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.seo, "seo");
              }}
            >
              <div className="text">
                <AiOutlineLineChart />
                <span className="title">S.E.O</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.seo && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-seo" className="subLink">
                    <div className="subText">
                      <span className="title">List Page</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ----faqs---- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.faqs ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.faqs, "faqs");
              }}
            >
              <div className="text">
                <RxQuestionMarkCircled />
                <span className="title">FAQS</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.faqs && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-faqs" className="subLink">
                    <div className="subText">
                      <span className="title">List FAQS</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-faq" className="subLink">
                    <div className="subText">
                      <span className="title">Add New FAQ</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="sort-faq" className="subLink">
                    <div className="subText">
                      <span className="title">Sort FAQS</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>


          
          <li className="navItem">
            <button
              className={`navLink ${allAside.homepage ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.homepage, "homepage");
              }}
            >
              <div className="text">
                <AiOutlineCamera />
                <span className="title">Home Page Video</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.homepage && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-videos" className="subLink">
                    <div className="subText">
                      <span className="title">List Video Languages</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-video" className="subLink">
                    <div className="subText">
                      <span className="title">Add New Video Language</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* -----testimonial */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.testimonial ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.testimonial, "testimonial");
              }}
            >
              <div className="text">
                <AiOutlineFileText />
                <span className="title">Testimonials</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.testimonial && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-testimonials" className="subLink">
                    <div className="subText">
                      <span className="title">List Testimonials</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-testimonial" className="subLink">
                    <div className="subText">
                      <span className="title">Add New Testimonial</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="sort-testimonials" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Testimonials</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ---slider--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.slider ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.slider, "slider");
              }}
            >
              <div className="text">
                <FaLevelUpAlt />
                <span className="title">Sliders</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.slider && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-sliders" className="subLink">
                    <div className="subText">
                      <span className="title">List Sliders</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-slider" className="subLink">
                    <div className="subText">
                      <span className="title">Add New Slider</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="sort-sliders" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Sliders</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ---translation--- */}
          <li className="heading">
            <h3 className="uppercase">TRANSLATION</h3>
          </li>

          {/* --language-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.translate ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.translate, "translate");
              }}
            >
              <div className="text">
                <SiGoogletranslate />
                <span className="title">Languages</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.translate && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-languages" className="subLink">
                    <div className="subText">
                      <span className="title">List Languages</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-language" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Languages</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ---Countries----- */}
          <li className="heading">
            <h3 className="uppercase">MANAGE LOCATION</h3>
          </li>
          <li className="navItem">
            <button
              className={`navLink ${allAside.countries ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.countries, "countries");
              }}
            >
              <div className="text">
                <GoGlobe />
                <span className="title">Countries</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.countries && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-countries" className="subLink">
                    <div className="subText">
                      <span className="title">List Countries</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-country" className="subLink">
                    <div className="subText">
                      <span className="title">Add New Country</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ----CountryDetails----- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.countrydetails ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.countrydetails, "countrydetails");
              }}
            >
              <div className="text">
                <GoGlobe />
                <span className="title">Country Details</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.countrydetails && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-country-details" className="subLink">
                    <div className="subText">
                      <span className="title">List Country Details</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ----States--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.state ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.state, "state");
              }}
            >
              <div className="text">
                <GoGlobe />
                <span className="title">States </span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.state && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-states" className="subLink">
                    <div className="subText">
                      <span className="title">List States</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-state" className="subLink">
                    <div className="subText">
                      <span className="title">Add New States</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ---cities-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.cities ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.cities, "cities");
              }}
            >
              <div className="text">
                <GoGlobe />
                <span className="title">Cities</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.cities && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-cities" className="subLink">
                    <div className="subText">
                      <span className="title">List Cities</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-city" className="subLink">
                    <div className="subText">
                      <span className="title">Add New City</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* --user--package-- */}
          <li className="heading">
            <h3 className="uppercase">USER PACKAGES</h3>
          </li>
          <li className="navItem">
            <button
              className={`navLink ${allAside.packages ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.packages, "package");
              }}
            >
              <div className="text">
                <FaRegMoneyBillAlt />
                <span className="title">Packages</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.packages && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-packages" className="subLink">
                    <div className="subText">
                      <span className="title">List Packages</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-package" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Packages</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ---job--attributes-- */}
          <li className="heading">
            <h3 className="uppercase">job attributes</h3>
          </li>

          {/* --language--levels-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.language ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.language, "language");
              }}
            >
              <div className="text">
                <FaLanguage />
                <span className="title">Language Levels</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.language && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="list-language-levels" className="subLink">
                    <div className="subText">
                      <span className="title">List Language Levels</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="create-language-level" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Language Level</span>
                    </div>
                  </NavLink>
                </li>
                <li className="subItem">
                  <NavLink to="sort-language-levels" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Language Levels</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ----career-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.career ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.career, "career");
              }}
            >
              <div className="text">
                <BsGraphUpArrow />
                <span className="title">Career Levels</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.career && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-career-levels" className="subLink">
                    <div className="subText">
                      <span className="title">List Career Levels</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-career-level" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Career Level</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="sort-career-levels" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Career Levels</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ---functional--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.functional ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.functional, "functional");
              }}
            >
              <div className="text">
                <BsBank />
                <span className="title">Functional Areas</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.functional && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-functional-areas" className="subLink">
                    <div className="subText">
                      <span className="title">List Functional Areas</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-functional-area" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Functional Area</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ----Gender--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.gender ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.gender, "gender");
              }}
            >
              <div className="text">
                <BsGenderAmbiguous />
                <span className="title">Genders</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.gender && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-genders" className="subLink">
                    <div className="subText">
                      <span className="title">List Genders</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-gender" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Gender</span>
                    </div>
                  </Link>
                </li>

                <li className="subItem">
                  <Link to="sort-genders" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Genders</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ----industry-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.industry ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.industry, "industry");
              }}
            >
              <div className="text">
                <FaIndustry />
                <span className="title">Industries</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.industry && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-industries" className="subLink">
                    <div className="subText">
                      <span className="title">List Industries</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-industry" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Industry</span>
                    </div>
                  </Link>
                </li>

                <li className="subItem">
                  <Link to="sort-industries" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Industries</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ---experience-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.experience ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.experience, "experience");
              }}
            >
              <div className="text">
                <AiOutlinePieChart />
                <span className="title">Job Experiences</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.experience && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-job-experiences" className="subLink">
                    <div className="subText">
                      <span className="title">List Job Experiences</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-job-experience" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Job Experience</span>
                    </div>
                  </Link>
                </li>

                <li className="subItem">
                  <Link to="sort-job-experiences" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Job Experiences</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ---skill-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.skill ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.skill, "skill");
              }}
            >
              <div className="text">
                <AiOutlineAreaChart />
                <span className="title">Job Skills</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.skill && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-job-skills" className="subLink">
                    <div className="subText">
                      <span className="title">List Job Skills</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-job-skill" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Job Skills</span>
                    </div>
                  </Link>
                </li>

                <li className="subItem">
                  <Link to="sort-job-skills" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Job Skills</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ---types--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.types ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.types, "types");
              }}
            >
              <div className="text">
                <BsBriefcase />
                <span className="title">Job Types</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.types && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-job-types" className="subLink">
                    <div className="subText">
                      <span className="title">List Job Types</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-job-type" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Job Type</span>
                    </div>
                  </Link>
                </li>

                <li className="subItem">
                  <Link to="sort-job-types" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Job Types</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ---job--shift-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.shifts ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.shifts, "shifts");
              }}
            >
              <div className="text">
                <FaUserTie />
                <span className="title">Job Shifts</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.shifts && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-job-shifts" className="subLink">
                    <div className="subText">
                      <span className="title">List Job Shifts</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-job-shift" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Job Shift</span>
                    </div>
                  </Link>
                </li>

                <li className="subItem">
                  <Link to="sort-job-shifts" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Job Shifts</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ----degree--level */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.degreeLevel ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.degreeLevel, "degreeLevel");
              }}
            >
              <div className="text">
                <FaLevelUpAlt />
                <span className="title">Degree Levels</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.degreeLevel && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-degree-levels" className="subLink">
                    <div className="subText">
                      <span className="title">List Degree Levels</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-degree-level" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Degree Level</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ----dergreeType--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.degreeType ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.degreeType, "degreeType");
              }}
            >
              <div className="text">
                <AiOutlineFileText />
                <span className="title">Degree Types</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.degreeType && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-degree-types" className="subLink">
                    <div className="subText">
                      <span className="title">List Degree Types</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-degree-type" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Degree Types</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ---majorsub-- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.majorSub ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.majorSub , 'majorSub');
              }}
            >
              <div className="text">
                <MdSubject />
                <span className="title">Major Subjects</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.majorSub && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-major-subjects" className="subLink">
                    <div className="subText">
                      <span className="title">List Major Subjects</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-major-subject" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Major Subject</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="sort-major-subjects" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Major Subject</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ---resultType--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.resultType ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.resultType, "resultType");
              }}
            >
              <div className="text">
                <SlGraduation />
                <span className="title">Result Types</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.resultType && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-result-types" className="subLink">
                    <div className="subText">
                      <span className="title">List Result Types</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-result-type" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Result Type</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="sort-result-types" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Result Types</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ----marialStatus--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.maritalStatus ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.maritalStatus, "maritalStatus");
              }}
            >
              <div className="text">
                <SlGraduation />
                <span className="title">Material Status</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.maritalStatus && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-marital-status" className="subLink">
                    <div className="subText">
                      <span className="title">List Material Status</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-marital-status" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Material Status</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="sort-marital-status" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Material Status</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* --ownership--- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.ownership ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.ownership, "ownership");
              }}
            >
              <div className="text">
                <SlGraduation />
                <span className="title">Ownership Types</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.ownership && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-ownership-types" className="subLink">
                    <div className="subText">
                      <span className="title">List Ownership Types</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-ownership-type" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Ownership Type</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="sort-ownership-types" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Ownership Types</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ----salaryPeriod--- */}
          {/* ----salaryPeriod--- */}
          {/* ----salaryPeriod--- */}

          <li className="navItem">
            <button
              className={`navLink ${allAside.salaryPeriod ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.salaryPeriod, "salaryPeriod");
              }}
            >
              <div className="text">
                <SlGraduation />
                <span className="title">Salary Periods</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.salaryPeriod && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-salary-periods" className="subLink">
                    <div className="subText">
                      <span className="title">List Salary Periods</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-salary-period" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Salary Period</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="sort-salary-periods" className="subLink">
                    <div className="subText">
                      <span className="title">Sort Salary Periods</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ----currency----- */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.currency ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.currency, "currency");
              }}
            >
              <div className="text">
                <BsCurrencyExchange />
                <span className="title">currency</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.currency && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-currency" className="subLink">
                    <div className="subText">
                      <span className="title">List currency</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-currency" className="subLink">
                    <div className="subText">
                      <span className="title">Add new currency</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ----POSOTIONS------ */}
          {/* ----POSOTIONS------ */}
          {/* ----POSOTIONS------ */}
          {/* ----POSOTIONS------ */}
          <li className="navItem">
            <button
              className={`navLink ${allAside.position ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.position, "position");
              }}
            >
              <div className="text">
                <FcPositiveDynamic />
                <span className="title">Positions</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.position && (
              <ul className="subMenu">
                <li className="subItem">
                  <Link to="list-position" className="subLink">
                    <div className="subText">
                      <span className="title">List Positions</span>
                    </div>
                  </Link>
                </li>
                <li className="subItem">
                  <Link to="create-position" className="subLink">
                    <div className="subText">
                      <span className="title">Add new Position</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Manage---- */}
          {/* Manage---- */}
          {/* Manage---- */}
          <li className="heading">
            <h3 className="uppercase">MANAGE</h3>
          </li>
          <li className="navItem">
            <button
              className={`navLink ${allAside.site ? "active" : ""}`}
              onClick={() => {
                changeOpen(!allAside.site, "site");
              }}
            >
              <div className="text">
                <SlWrench />
                <span className="title">Site Settings</span>
              </div>
              <div className="arrow">
                <BiChevronLeft />
              </div>
            </button>
            {allAside.site && (
              <ul className="subMenu">
                <li className="subItem">
                  <NavLink to="edit-site-setting" className="subLink">
                    <div className="subText">
                      <span className="title">Manage Site Settings</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
