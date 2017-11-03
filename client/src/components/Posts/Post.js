import React, { Component } from 'react';
import { Redirect } from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  img{
    background-position: cover;
  }
`

const PostContainer = styled.div`
  background-color: rgba(135, 207, 255, 0.6);
  width: 80%;
  margin: 0 auto;
  margin-top: -25%;
  border-radius: 10px 30px;
  border: 5px solid rgba(5,5,5,.1);
  padding: 10px;

  h1{
    text-align: left;
  }
`

const Content = styled.div`
  background-color: rgba(135, 207, 255, 0.6);
  border-radius: 10px 30px;
  border: 5px solid rgba(5,5,5,.1);
  display: flex;
  flex-direction: column;
  button{
    width: 200px;
    margin: 0 auto;
  }
`


class Post extends Component {

  state = {
    city: {},
    post: {},
    deletePopupShowing: false,
    edit: false
    // redirect: false
  }

  async componentWillMount() {
    try {
      const cityId = this.props.match.params.cityId;
      const response = await axios.get(`/api/cities/${cityId}`);
      await this.setState({ city: response.data })
      const postId = this.props.match.params.postId;
      const postResponse = await axios.get(`/api/cities/${cityId}/posts/${postId}`);
      await this.setState({ post: postResponse.data });
      document.title = this.state.city.name
    } catch (err) { console.log(err) }
  }

  deletePost = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.delete(`/api/cities/${this.state.city.id}/posts/${this.state.post.id}`);
      window.location = `/cities/${this.state.city.id}`
      // await this.setState({ redirect: true }) //WHY does this break everything?!
    } catch (err) { console.log(err) }
  }

  updatePost = async (event) => {
    try {
      const { cityId } = this.state.city.id;
      const postId = this.state.post.id
      const response = await axios.patch(`/api/cities/${cityId}/posts/${postId}`, {
        post: this.state.post
      })
      console.log(response)
      this.toggleEdit();
    } catch (err) { console.log(err) }
  }

  toggleDeletePopup = () => {
    this.setState({ deletePopupShowing: !this.state.deletePopupShowing })
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  

  handleChange = (event) => {
    let changedPost = this.state.post;
    const newContent = event.target.value;
    changedPost.content = newContent;
    this.setState({ post: changedPost })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={`/cities/${this.state.city.id}`} />
    }

    return (
      <PageContainer>
        <img src={this.state.city.photo_url} alt="" />
        <PostContainer>
          <h1>{this.state.post.user}</h1>
          <Content>
            {
              this.state.edit ?
                <form onBlur={this.updatePost}>
                  <textarea name="content" onChange={this.handleChange} value={this.state.post.content} cols="30" rows="10"></textarea>
                </form>
                :
                <p>{this.state.post.content}</p>
            }
            <button onClick={this.toggleEdit}>Toggle Edit</button>
            <br />
            {
              this.state.deletePopupShowing ?
                <form onSubmit={this.deletePost}>
                  <label htmlFor="delete">Are you absolutely Sure? <small>This cannot be undone</small></label>
                  <br />
                  <input name="delete" type="submit" value="Yes, just delete the dang post" />
                  <button onClick={this.toggleDeletePopup}>Actually, nevermind. I like this post</button>
                </form>
                :
                <button onClick={this.toggleDeletePopup}>Delete Post</button>
            }
          </Content>
          <br />
          <Link to={`/cities/${this.state.city.id}`}>Back</Link>
        </PostContainer>
      </PageContainer>
    );
  }
}

export default Post;