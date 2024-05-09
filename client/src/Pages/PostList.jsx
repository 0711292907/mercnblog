import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';


const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await axios.get('http://localhost:8800/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false); // Set loading state to false after request completes
      }
    };

    fetchPosts();
  }, []); // Empty dependency array to fetch posts only once

  const handleUpdate = async (updatedPost) => {
    //  update logic 
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:8800/posts/${postId}`); // Send delete request

      // Update the state with filtered posts (excluding the deleted one)
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
      // Optionally, display an error message to the user
    }
  };

  const renderPosts = () => {
    if (isLoading) {
      return <p>Loading posts...</p>;
    } else if (!posts.length) {
      return <p>No posts found.</p>;
    } else {
      return (
        <ul>
          {posts.map((post) => (
            <Post key={post.id} post={post} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))}
        </ul>
      );
    }
  };

  

  return (
    <div>
      {renderPosts()}
    </div>
  );
};

export default PostList;


