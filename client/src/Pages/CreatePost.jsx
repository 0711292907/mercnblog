// Import necessary modules
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CreatePost.css'; // Assuming CreatePost.css exists

const CreatePost = (props) => { // Pass props as an argument
  // Define state variables for form fields
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [user_name, setUser_name] = useState('');

  // Function to handle form submission
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

      // **New:** Call a callback function (passed as a prop) to update posts in PostList
      if (props.onPostCreated) {
        props.onPostCreated(newPost); // Pass the created post object
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // Return JSX for the CreatePost component
  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for title, description, and user name */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Name"
        value={user_name}
        onChange={(e) => setUser_name(e.target.value)}
      />

      {/* Submit button */}
      <button type="submit">Create Post</button>

      <Link to="/PostList">See all Posts</Link>
    </form>
  );
};

export default CreatePost;

