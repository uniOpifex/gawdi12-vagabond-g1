import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: rgba(135, 207, 255, 0.6);
  width: 80%;
  margin: 0 auto;
  margin-top: -525px;
  border-radius: 10px 30px;
  border: 5px solid rgba(5,5,5,.1);
  padding: 50px;
`

const PostContainer = styled.div`
  background-color: rgba(135, 207, 255, 0.6);
  border-radius: 10px 30px;
  border: 5px solid rgba(5,5,5,.1);
  display: flex;
  flex-direction: column;
  padding: 10px;
 

  a{
    color: black;
    text-align: left;
    text-decoration: none;
  }
  a:hover{
    color: blue;
  }
`

class PostList extends Component {
  state = {
    form: false
  }

  toggleForm = () => {
    this.setState({ form: !this.state.form })
  }

  newPost = (post) => {
    this.props.newPost(post);
    this.toggleForm()
  }

  render() {
    return (
      <ListContainer>
        <h1>Posts</h1>
        {
          this.props.posts.map((post, index) => {
            return (
              <PostContainer key={index}>
                <Link to={`/cities/${post.city_id}/${post.id}`}>{post.user}</Link>
                <p>{post.content}</p>
              </PostContainer>
            )
          })
        }
        <button onClick={this.toggleForm}>New Post</button>
        {
          this.state.form ? <PostForm newPost={this.newPost} /> : null
        }
      </ListContainer>
    );
  }
}

export default PostList;