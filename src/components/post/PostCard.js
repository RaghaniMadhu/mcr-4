import React from "react";
import { BsBookmark, BsBookmarkFill, BsShare } from "react-icons/bs";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import "../post/PostCard.css";

function PostCard({
  postDetails: {
    // postId,
    username,
    // name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    isBookmarked,
  },
}) {
  const date1 = new Date();
  const date2 = new Date(createdAt);
  var diffMs = date1 - date2; //milliseconds
  // var diffDays = Math.floor(diffMs / 86400000); // days
  // var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  var diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // minutes

  return (
    <div className="post-card-div flex-row-center">
      <div className="flex-column-center votes-div">
        <BiSolidUpArrow
          className="github-icons big-icons cursor-pointer"
          style={{ color: "#9ca3af" }}
        />
        <p className="margin-block-0">{upvotes - downvotes}</p>
        <BiSolidDownArrow className="github-icons big-icons cursor-pointer" />
      </div>
      <div className="flex-column post-card-details-div">
        <div className="flex-row justify-space-between">
          <div className="flex-row post-card-username-date-div">
            <img src={picUrl} alt="profile" className="profile-img" />
            <p className="margin-block-0">Posted by</p>
            <p className="margin-block-0 primary-color font-weight-semibold">
              @{username}
            </p>
            <p className="margin-block-0">•</p>
            <p className="margin-block-0">{diffMins} mins</p>
          </div>
        </div>
        <div className="flex-column post-details">
          <h3 className="margin-block-0">{post}</h3>
          <div className="flex-row-center justify-space-between tags-div">
            {tags.map((tag) => (
              <p key={tag} className="margin-block-0 tags">
                {tag}
              </p>
            ))}
          </div>
          <p className="margin-block-0" style={{ textAlign: "justify" }}>
            {postDescription}
          </p>
        </div>
        <div className="flex-row justify-space-between post-icons-div">
          <GoComment className="github-icons cursor-pointer" />
          <BsShare className="github-icons" />
          {isBookmarked ? (
            <BsBookmarkFill className="github-icons cursor-pointer" />
          ) : (
            <BsBookmark className="github-icons cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
