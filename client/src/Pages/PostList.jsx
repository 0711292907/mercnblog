
import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios'; // Import axios for making API calls

const PostList = () => {
  const [posts, setPosts] = useState([]); // State to store fetched posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8800/posts'); // Fetch posts from API
        setPosts(response.data); // Update state with fetched posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts(); // Call the function to fetch posts on component mount
  }, []); // Empty dependency array to fetch posts only once

  const handleUpdate = async (updatedPost) => {
    try {
      const updateResponse = await axios.put(`http://localhost:8800/posts/${updatedPost.id}`, updatedPost); // Update post on server
      console.log('Post updated successfully:', updateResponse.data);
      // Optionally, update the local state to reflect the changes
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      const deleteResponse = await axios.delete(`http://localhost:8800/posts/${postId}`); // Delete post on server
      console.log('Post deleted successfully:', deleteResponse.data);
      // Optionally, remove the deleted post from the local state using filter
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default PostList;

