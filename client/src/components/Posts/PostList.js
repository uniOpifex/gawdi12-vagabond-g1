import React from 'react';
import { Link } from 'react-router-dom';

const PostList = (props) => {
  return (
    <div>
      <h1>Posts</h1>
      {
        props.posts.map((post, index)=>{
          return (
            <div>
              <Link to={`/cities/${post.city_id}/${post.id}`}>{post.user}</Link>
              <p>{post.content}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default PostList;