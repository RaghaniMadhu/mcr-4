import React, { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import PostCard from "../../components/post/PostCard";
import RightSideBar from "../../components/rightsidebar/RightSideBar";
import { ForumContext } from "../../contexts/ForumContext";

function Home() {
  const { posts } = useContext(ForumContext);

  return (
    <div className="flex-row-center justify-space-evenly home-div">
      <Sidebar />
      <div>
        <h2>Latest Posts</h2>
        {posts.map((postData) => (
          <PostCard key={postData.postId} postDetails={postData} />
        ))}
      </div>
      <RightSideBar />
    </div>
  );
}

export default Home;
