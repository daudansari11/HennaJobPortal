import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiFillCheckSquare } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const RecentRegisterUsers = () => {
  return (
    <>
      <div className="recentCard">
        <div className="portTitle">
          <h5>recent register users</h5>
        </div>
        <div className="feeds">
          <ul>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Arjun Karanath (arjun.km@gmail.com)</Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span> Vapi, Gujarat, India</span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Arjun Karanath (arjun.km@gmail.com)</Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span> Vapi, Gujarat, India</span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Arjun Karanath (arjun.km@gmail.com)</Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span> Vapi, Gujarat, India</span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Arjun Karanath (arjun.km@gmail.com)</Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span> Vapi, Gujarat, India</span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Arjun Karanath (arjun.km@gmail.com)</Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span> Vapi, Gujarat, India</span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Arjun Karanath (arjun.km@gmail.com)</Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span> Vapi, Gujarat, India</span>
                </div>
              </div>
            </li>
            <li>
              <div className="check">
                <AiFillCheckSquare />
              </div>
              <div className="desc">
                <div className="linkInfo">
                  <Link to="/">Arjun Karanath (arjun.km@gmail.com)</Link>
                </div>
                <div className="address">
                  <BiHomeAlt2 />
                  <span> Vapi, Gujarat, India</span>
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

export default RecentRegisterUsers;
