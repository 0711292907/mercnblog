import { BrowserRouter, Routes, Route } from "react-router-dom";  
import CreatePost from "./Pages/CreatePost";
import Home from "./Pages/Home";
import UpdatePost from "./Pages/UpdatePost";
import PostList from "./Pages/PostList";


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