import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '.Pages/PostList'; // Import PostList component
import CreatePost from '.Pages/CreatePost'; // Import CreatePost component
import UpdatePost from '.Pages/UpdatePost'; // Import UpdatePost component



const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8800/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures this runs only once during initial render

  const handlePostCreate = async (newPost) => {
    try {
      const response = await axios.post('http://localhost:8800/posts', newPost);
      setPosts([...posts, response.data]); // Add new post to state
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handlePostUpdate = async (updatedPost) => {
    try {
      await axios.put(`http://localhost:8800/posts/${updatedPost.id}`, updatedPost);
      const updatedPosts = posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handlePostDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:8800/posts/${postId}`);
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <CreatePost onCreate={handlePostCreate} />
      <PostList posts={posts} onUpdate={handlePostUpdate} onDelete={handlePostDelete} />
    </div>
  );
};

export default App;
