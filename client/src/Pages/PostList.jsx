import React from 'react';
import Post from './Post';

const PostList = ({ posts, onUpdate, onDelete }) => {
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default PostList;

