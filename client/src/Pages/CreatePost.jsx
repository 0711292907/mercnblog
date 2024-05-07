
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [user_name, setUser_name] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      descr,
      user_name,
    };

    try {
      const response = await axios.post('http://localhost:8800/posts', newPost);
      console.log('Post created successfully:', response.data);
      // Optionally, clear form or fetch posts again to reflect the new post
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      {/* Input fields with vertical alignment and a larger description box */}
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="descr">Description:</label>
        <textarea
          id="descr"
          placeholder="Write a detailed description..."
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
          rows="5"
          className="description-input" // Add styling for description box
        />
      </div>
      <div className="form-group">
        <label htmlFor="user_name">User Name:</label>
        <input
          type="text"
          id="user_name"
          placeholder="User Name"
          value={user_name}
          onChange={(e) => setUser_name(e.target.value)}
        />
      </div>

      {/* Submit button with some basic styling */}
      <button type="submit" className="create-post-button">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;

