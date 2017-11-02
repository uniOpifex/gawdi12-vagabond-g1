import React, { Component } from 'react';
import { Redirect } from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
      <div>
        <img src={this.state.city.photo_url} alt="" />
        <h1>{this.state.post.user}</h1>
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
              <button onClick={this.toggleDeletePopup}>Acktually, nevermind. I like this post</button>
            </form>
            :
            <button onClick={this.toggleDeletePopup}>Delete Post</button>
        }
        <br />
        <Link to={`/cities/${this.state.city.id}`}>Back</Link>
        <br /><br /><br /><br />
      </div>
    );
  }
}

export default Post;