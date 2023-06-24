import React, { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { ForumContext } from "../../contexts/ForumContext";
import { BsBookmark, BsBookmarkFill, BsShare } from "react-icons/bs";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { GoComment } from "react-icons/go";

function PostPage() {
  const { postId } = useParams();
  const { posts, increaseDecreaseUpvoteCount, bookmarkUnBookmark } =
    useContext(ForumContext);

  const reqdPost = posts.find((post) => post.postId === postId);

  const date1 = new Date();
  const date2 = new Date(reqdPost.createdAt);
  var diffMs = date1 - date2; //milliseconds
  // var diffDays = Math.floor(diffMs / 86400000); // days
  // var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  var diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // minutes

  return (
    <div className="flex-row-center justify-space-evenly home-div">
      <Sidebar />
      <div className="post-card-div flex-row-center">
        <div className="flex-column-center votes-div">
          <BiSolidUpArrow
            className="github-icons big-icons cursor-pointer upvote-downvote"
            onClick={() => {
              increaseDecreaseUpvoteCount(postId, true);
            }}
          />
          <p className="margin-block-0">
            {reqdPost.upvotes - reqdPost.downvotes}
          </p>
          <BiSolidDownArrow
            className="github-icons big-icons cursor-pointer upvote-downvote"
            onClick={() => {
              increaseDecreaseUpvoteCount(postId, false);
            }}
          />
        </div>
        <div className="flex-column post-card-details-div">
          <div className="flex-row justify-space-between">
            <div className="flex-row post-card-username-date-div">
              <img
                src={reqdPost.picUrl}
                alt="profile"
                className="profile-img"
              />
              <p className="margin-block-0">Posted by</p>
              <p className="margin-block-0 primary-color font-weight-semibold">
                @{reqdPost.username}
              </p>
              <p className="margin-block-0">•</p>
              <p className="margin-block-0">{diffMins} mins</p>
            </div>
          </div>
          <div className="flex-column post-details">
            <h3 className="margin-block-0">{reqdPost.post}</h3>
            <div className="flex-row-center justify-space-between tags-div">
              {reqdPost.tags.map((tag) => (
                <p key={tag} className="margin-block-0 tags">
                  {tag}
                </p>
              ))}
            </div>
            <p className="margin-block-0" style={{ textAlign: "justify" }}>
              {reqdPost.postDescription}
            </p>
          </div>
          <div className="flex-row justify-space-between post-icons-div">
            <BsShare className="github-icons" />
            {reqdPost.isBookmarked ? (
              <BsBookmarkFill
                className="github-icons cursor-pointer"
                onClick={() => {
                  bookmarkUnBookmark(postId);
                }}
              />
            ) : (
              <BsBookmark
                className="github-icons cursor-pointer"
                onClick={() => {
                  bookmarkUnBookmark(postId);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
