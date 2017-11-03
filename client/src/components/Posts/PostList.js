import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: rgba(135, 207, 255, 0.6);
  width: 80vw;
  margin: 0 auto;
  position: relative;
  border-radius: 10px 30px;
  border: 5px solid rgba(5,5,5,.1);
`

const PostContainer = styled.div`
  background-color: rgba(135, 207, 255, 0.6);
  border-radius: 10px 30px;
  border: 5px solid rgba(5,5,5,.1);
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 30px;
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
    form: false,
    posts: [],
    currentPosts: [],
    currentIndex: 0,
    lastPage: false,
    firstPage: true
  }

  async componentWillReceiveProps(nextProps) {
    await this.setState({ posts: nextProps.posts })
    let currentPosts;
    if (this.state.posts.length > 10) {
      currentPosts = this.state.posts.slice(0, 10);
      await this.setState({ currentIndex: 10 });
      await this.setState({ lastPage: false })
    } else {
      currentPosts = this.state.posts;
      await this.setState({ lastPage: true });
    }
    await this.setState({ currentPosts: currentPosts })
  }

  toggleForm = () => {
    this.setState({ form: !this.state.form })
  }

  newPost = (post) => {
    this.props.newPost(post);
    this.toggleForm()
  }

  nextPage = async (event) => {
    let endIndex;
    if (this.state.posts.length - this.state.currentIndex > 10) {
      endIndex = this.state.currentIndex + 10;
    } else {
      endIndex = this.state.posts.length;
      this.setState({ lastPage: true })
    }
    let nextPosts = this.state.posts.slice(this.state.currentIndex, endIndex)
    await this.setState({ currentPosts: nextPosts });
    await this.setState({ currentIndex: endIndex });
    await this.setState({ firstPage: false })
  }

  prevPage = async (event) => {
    let startIndex;
    let nextIndex;
    if (this.state.currentIndex % 10 === 0) {
      startIndex = this.state.currentIndex - 10;
      nextIndex = startIndex;
    } else {
      startIndex = this.state.currentIndex - (10 + this.state.currentIndex % 10)
      nextIndex = this.state.currentIndex - (this.state.currentIndex % 10)
    }
    let prevPosts = this.state.posts.slice(startIndex, startIndex + 10);

    await this.setState({ currentPosts: prevPosts });
    if (startIndex === 0) {
      await this.setState({ firstPage: true });
    }
    await this.setState({ currentIndex: nextIndex });
    this.setState({ lastPage: false });
  }

  render() {
    return (
      <ListContainer>
        <h1>Posts</h1>
        {
          this.state.currentPosts ?
            this.state.currentPosts.map((post, index) => {
              return (
                <PostContainer key={index}>
                  <Link to={`/cities/${post.city_id}/${post.id}`}>{post.user}</Link>
                  <p>{post.content}</p>
                </PostContainer>
              )
            })
            :
            null
        }
        {
          this.state.firstPage ?
            <button disabled>Previous Page</button>
            :
            <button onClick={this.prevPage}>Previous Page</button>

        }
        <button onClick={this.toggleForm}>New Post</button>
        {
          this.state.form ? <PostForm newPost={this.newPost} /> : null
        }
        {
          this.state.lastPage ?
            <button disabled>Next Page</button>
            :
            <button onClick={this.nextPage}>Next Page</button>
        }
      </ListContainer>
    );
  }
}

export default PostList;