import { createContext, useState } from "react";
import { forumData } from "../db/ForumData";

export const ForumContext = createContext();

function ForumContextProvider({ children }) {
  const { accountId, username, name, picUrl } = forumData;
  const userProfile = { accountId, username, name, picUrl };

  const [posts] = useState(forumData.posts);

  return (
    <ForumContext.Provider value={{ userProfile, posts }}>
      {children}
    </ForumContext.Provider>
  );
}

export default ForumContextProvider;
