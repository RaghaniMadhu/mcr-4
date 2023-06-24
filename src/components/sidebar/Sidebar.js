import React, { useContext } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsRocket, BsBookmark } from "react-icons/bs";
import "../sidebar/Sidebar.css";
import { NavLink } from "react-router-dom";
import { ForumContext } from "../../contexts/ForumContext";

function Sidebar() {
  const { userProfile } = useContext(ForumContext);
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
          <img src={userProfile.picUrl} alt="profile" className="profile-img" />
        </div>
        <div className="flex-column justify-space-between profile-card-name-div">
          <p className="margin-block-0 font-weight-bold">{userProfile.name}</p>
          <p className="margin-block-0 gray-color font-size-small">
            @{userProfile.username}
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
