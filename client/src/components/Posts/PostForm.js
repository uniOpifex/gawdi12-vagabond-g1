import React, { Component } from 'react';

class PostForm extends Component {
  state={
    post: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newPost(this.state.post);
  }

  handleChange = (event) =>{
    let field = event.target.name;
    let value = event.target.value;
    let updatedPost = {...this.state.post};
    updatedPost[field] = value;
    this.setState({post: updatedPost});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="user">User</label>
        <input onChange={this.handleChange} type="text" name="user"/>
        <label htmlFor="content">Post:</label>
        <textarea onChange={this.handleChange} name="content" cols="30" rows="10"></textarea>
        <input type="submit"/>
      </form>
    );
  }
}

export default PostForm;