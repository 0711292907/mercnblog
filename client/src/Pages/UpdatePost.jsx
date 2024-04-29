import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdatePost = ({ selectedPost, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setDescription(selectedPost.descr);
      setUsername(selectedPost.user_name);
    }
  }, [selectedPost]); // Update form fields when selectedPost changes

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      id: selectedPost.id, // Include existing ID for update
      title,
      description,
      username,
    };

    try {
      const response = await axios.put(`http://localhost:8800/posts/${updatedPost.id}`, updatedPost);
      onUpdate(updatedPost); // Call parent function to update state
      console.log('Post updated successfully:', response.data);
      // Optionally clear form or close update modal
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePost;
