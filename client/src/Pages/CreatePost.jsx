// Import necessary modules
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const CreatePost = () => {
  // Define state variables for form fields
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [user_name, setUser_name] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a new post object with form data
    const newPost = {
      title,
      descr,
      user_name,
    };

    try {
      // Send a POST request to the backend API endpoint to create a new post
      const response = await axios.post('http://localhost:8800/posts', newPost);
      console.log('Post created successfully:', response.data);
      // Optionally, clear form or fetch posts again to reflect the new post
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
 
      <Link to="/">See all Posts</Link>
 </form>
 );
};

export default CreatePost;
