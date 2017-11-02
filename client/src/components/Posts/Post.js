import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Post extends Component {

  state={
    city: {},
    post: {}
  }
  
  async componentWillMount() {
    try{
      const cityId = this.props.match.params.cityId;
      const response = await axios.get(`/api/cities/${cityId}`);
      await this.setState({city: response.data})
      const postId = this.props.match.params.postId;
      const postResponse = await axios.get(`/api/cities/${cityId}/posts/${postId}`);
      await this.setState({post: postResponse.data});
      document.title = this.state.city.name
    }catch(err){console.log(err)}
  }
  

  render() {
    return (
      <div>
        <img src={this.state.city.photo_url} alt=""/>
        <h1>{this.state.post.user}</h1>
        <p>{this.state.post.content}</p>
        <Link to={`/cities/${this.state.city.id}`}>Back</Link>
      </div>
    );
  }
}

export default Post;