import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiFillCheckSquare } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const RecentRegisterJobs = () => {
  return (
    <>
      <div className="recentCard">
        <div className="portTitle">
          <h5>recent jobs</h5>
        </div>
        <div className="feeds">
          <ul>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Graphic Designer Required </Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span>   Bessemer, Alabama, United States of America </span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Graphic Designer Required </Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span>   Bessemer, Alabama, United States of America </span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Graphic Designer Required </Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span>   Bessemer, Alabama, United States of America </span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Graphic Designer Required </Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span>   Bessemer, Alabama, United States of America</span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Graphic Designer Required </Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span>   Bessemer, Alabama, United States of America </span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Graphic Designer Required </Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span>   Bessemer, Alabama, United States of America </span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Graphic Designer Required </Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span>   Bessemer, Alabama, United States of America</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="seeAll">
          <Link to="/">
            See All Users <BsFillArrowRightCircleFill />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecentRegisterJobs;
