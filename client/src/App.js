import { BrowserRouter, Routes, Route } from "react-router-dom";  
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import UpdatePost from "./pages/UpdatePost";
import PostList from "./pages/PostList";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreatePost" element={<CreatePost />} />
          <Route path="/UpdatePost" element={<UpdatePost />} />
          <Route path="/PostList" element={<PostList />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;