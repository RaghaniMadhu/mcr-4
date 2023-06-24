import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import PostPage from "./pages/posts/PostPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
