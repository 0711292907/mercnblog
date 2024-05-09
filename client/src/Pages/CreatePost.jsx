
import React, { useState } from 'react';
import axios from 'axios';
import '../CreatePost.css'; 

const CreatePost = (props) => {
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

      // Call a callback function (passed as a prop) to update posts in PostList
      if (props.onPostCreated) {
        props.onPostCreated(newPost); // Pass the created post object
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="create-post-container">
      {/* Input fields for title, description, and user name */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="create-post-input"
      />
      <textarea
        placeholder="Description"
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
        className="create-post-description"
      />
      <input
        type="text"
        placeholder="User Name"
        value={user_name}
        onChange={(e) => setUser_name(e.target.value)}
        className="create-post-input"
      />

      {/* Submit button */}
      <button type="submit" onClick={handleSubmit} className="create-post-button">
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;

