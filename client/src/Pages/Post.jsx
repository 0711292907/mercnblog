import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Post = ({ post, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPost, setUpdatedPost] = useState(post)


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedPost(post); // Reset updated post on cancel
  };

  const handleUpdate = async () => {
    onUpdate(updatedPost); // Call parent function to handle update
    setIsEditing(false);
  };

  const handleDelete = async () => {
    onDelete(post.id); // Call parent function to handle delete
  };

  return (
    <li key={post.id}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedPost.title}
            onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })}
          />
          <input
            type="text"
            value={updatedPost.descr}
            onChange={(e) => setUpdatedPost({ ...updatedPost, descr: e.target.value })}
          />
          <input
            type="text"
            value={updatedPost.user_name}
            onChange={(e) => setUpdatedPost({ ...updatedPost, user_name: e.target.value })}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div class="card-container">
        <div class="card">
        <h3>{updatedPost.title}</h3>
          <p>{updatedPost.descr}</p>
          <p>Author: {updatedPost.user_name}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <Link to="/">Home</Link>
        </div>
      </div>
      
        
      )}
    </li>
  

  );
};

export default Post;
