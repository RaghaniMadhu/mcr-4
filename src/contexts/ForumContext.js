import { createContext, useState } from "react";
import { forumData } from "../db/ForumData";

export const ForumContext = createContext();

function ForumContextProvider({ children }) {
  const { accountId, username, name, picUrl } = forumData;
  const userProfile = { accountId, username, name, picUrl };

  const [posts, setPosts] = useState(forumData.posts);

  const bookmarkUnBookmark = (postId) => {
    setPosts(
      posts.map((post) =>
        post.postId === postId
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post
      )
    );
  };

  const increaseDecreaseUpvoteCount = (postId, incraeseOrDecrease) => {
    setPosts(
      posts.map((post) =>
        post.postId === postId
          ? {
              ...post,
              upvotes: incraeseOrDecrease ? post.upvotes + 1 : post.upvotes - 1,
            }
          : post
      )
    );
  };

  return (
    <ForumContext.Provider
      value={{
        userProfile,
        posts,
        bookmarkUnBookmark,
        increaseDecreaseUpvoteCount,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
}

export default ForumContextProvider;
