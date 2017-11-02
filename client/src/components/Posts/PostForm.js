import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    post: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newPost(this.state.post);
  }

  handleChange = (event) => {
    let field = event.target.name;
    let value = event.target.value;
    let updatedPost = { ...this.state.post };
    updatedPost[field] = value;
    this.setState({ post: updatedPost });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="user">Title: </label>
        <input onChange={this.handleChange} type="text" name="user" />
        <br />
        <label htmlFor="content">Post: </label>
        <textarea onChange={this.handleChange} name="content" cols="20" rows="5"></textarea>
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default PostForm;