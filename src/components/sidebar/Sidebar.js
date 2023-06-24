import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsRocket, BsBookmark } from "react-icons/bs";
import "../sidebar/Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "700" : "",
    fontSize: isActive ? "large" : "",
    backgroundColor: isActive ? "#e0e7ff" : "",
  });

  return (
    <aside className="flex-column aside-div justify-space-between">
      <div className="flex-column explore-links-div">
        <NavLink to="/" className="flex-row navlink" style={getActiveStyle}>
          <AiOutlineHome className="github-icons" /> Home
        </NavLink>
        <div className="flex-row navlink">
          <BsRocket className="github-icons" /> Explore
        </div>
        <div className="flex-row navlink">
          <BsBookmark className="github-icons" /> Bookmark
        </div>
        <div className="flex-row navlink">
          <AiOutlineUser className="github-icons" /> Profile
        </div>
      </div>
      <div className="flex-row profile-card-div">
        <div>
          <img
            src="https://res.cloudinary.com/djbnm7p4c/image/upload/v1687341993/1_tqef33.png"
            alt="profile"
            className="profile-img"
          />
        </div>
        <div className="flex-column justify-space-between profile-card-name-div">
          <p className="margin-block-0 font-weight-bold">Madhu Raghani</p>
          <p className="margin-block-0 gray-color font-size-small">
            @madhuraghani
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
