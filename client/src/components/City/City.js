import React, { Component } from 'react';
import axios from 'axios';
import PostList from '../Posts/PostList';

class City extends Component {

  state = {
    city: {},
    posts: []
  }

  async componentWillMount() {
    try {
      await this.updatePosts();
      document.title = this.state.city.name
    } catch (err) { console.log(err) }
  }

  newPost = async (post) => {
    try {
      await axios.post(`/api/cities/${this.state.city.id}/posts`, post);
      this.updatePosts();
    } catch (err) { console.log(err) }
  }

  updatePosts = async () => {
    try {
      const cityId = this.props.match.params.cityId;
      const response = await axios.get(`/api/cities/${cityId}`);
      await this.setState({ city: response.data })
      const postResponse = await axios.get(`/api/cities/${cityId}/posts`);
      await this.setState({ posts: postResponse.data });
    } catch (err) { console.log(err) }
  }

  render() {
    return (
      <div>
        <img src={this.state.city.photo_url} alt={this.state.city.name} />
        <PostList
          posts={this.state.posts}
          newPost={this.newPost}
        />
      </div>
    );
  }
}

export default City;