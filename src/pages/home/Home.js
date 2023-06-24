import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import PostCard from "../../components/post/PostCard";
import { ForumContext } from "../../contexts/ForumContext";
import "../home/Home.css";

function Home() {
  const { posts } = useContext(ForumContext);
  const [sortBy, setSortBy] = useState("");

  const timeDifference = (createdAt) => {
    const date1 = new Date();
    const date2 = new Date(createdAt);
    var diffMs = date1 - date2; //milliseconds
    var diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // minutes
    return diffMins;
  };

  const sortedVotes =
    sortBy.length > 0
      ? sortBy.includes("date")
        ? sortBy === "date-latest"
          ? [...posts].sort(
              (post1, post2) =>
                timeDifference(post1.createdAt) -
                timeDifference(post2.createdAt)
            )
          : [...posts].sort(
              (post1, post2) =>
                timeDifference(post2.createdAt) -
                timeDifference(post1.createdAt)
            )
        : [...posts].sort((post1, post2) => post2.upvotes - post1.upvotes)
      : posts;

  // const diffMins = timeDifference(postData.createdAt);

  return (
    <div className="flex-row-center justify-space-evenly home-div">
      <Sidebar />
      <div>
        <h2>Latest Posts</h2>
        {sortedVotes.map((postData) => (
          <PostCard key={postData.postId} postDetails={postData} />
        ))}
      </div>
      <div>
        <h3>Sort By</h3>
        <select
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="date-latest">Latest Posts</option>
          <option value="date-oldest">Oldest Posts</option>
          <option value="upvote-counts">Vote Count</option>
        </select>
      </div>
    </div>
  );
}

export default Home;
