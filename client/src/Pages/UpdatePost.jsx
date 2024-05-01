import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UpdatePost = ({ selectedPost, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setDescription(selectedPost.descr);
      setUsername(selectedPost.user_name);
    }
  }, [selectedPost]);

  const handleChange = (e) => {
    // Handle input changes
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    else if (name === 'description') setDescription(value);
    else if (name === 'username') setUsername(value);
  };

  const handleClick = async () => {
    try {
      const updatedPost = {
        id: selectedPost.id,
        title,
        description,
        username,
      };

      const response = await axios.put(
        `http://localhost:8800/posts/${updatedPost.id}`,
        updatedPost
      );

      onUpdate(updatedPost);
      console.log('Post updated successfully:', response.data);
      // Optionally clear form or close update modal
    } catch (error) {
      console.error('Error updating post:', error);
      setError('Something went wrong!'); // Set error state
    }
  };

  return (
    <div className="form">
      <h1>Update Post</h1>
      <input
        type="text"
        placeholder="Post title"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        rows={5}
        placeholder="Post description"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && <p>{error}</p>}
      <Link to="/">See all Posts</Link>
    </div>
  );
};

export default UpdatePost;

