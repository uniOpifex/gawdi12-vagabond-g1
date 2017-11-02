import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';

class PostList extends Component {

  state={
    form: false
  }

  toggleForm = () =>{
    this.setState({form: !this.state.form})
  }

  newPost = (post) =>{
    this.props.newPost(post);
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {
          this.props.posts.map((post, index)=>{
            return (
              <div key={index}>
                <Link to={`/cities/${post.city_id}/${post.id}`}>{post.user}</Link>
                <p>{post.content}</p>
              </div>
            )
          })
        }
        <button onClick={this.toggleForm}>New Post</button>
        {
          this.state.form ? <PostForm newPost={this.newPost}/> : null
        }
      </div>
    );
  }
}

export default PostList;