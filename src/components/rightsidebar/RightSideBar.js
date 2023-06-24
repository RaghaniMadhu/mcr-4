import React from "react";
import "../rightsidebar/RightSideBar.css";

function RightSideBar() {
  return (
    <div>
      <h3>Sort By</h3>
      <select>
        <option value="date">Latest Posts</option>
        <option value="upvote-counts">Upvote Count</option>
      </select>
    </div>
  );
}

export default RightSideBar;
