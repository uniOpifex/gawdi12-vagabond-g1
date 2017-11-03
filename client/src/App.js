import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import CitiesList from './components/City/CitiesList';
import City from './components/City/City';
import Post from './components/Posts/Post';
import styled from 'styled-components';


const Footer = styled.div`
position: absolute;
bottom: 10%;
left: 0%;
color: white;
`


class App extends Component {

  state = {
    cities: []
  }

  async componentWillMount() {
    try {
      const response = await axios.get('/api/cities')
      const cities = response.data
      await this.setState({ cities: cities })
    } catch (err) { console.log(err) }
  }

  render() {

    const CitiesListComponent = () => { return <CitiesList cities={this.state.cities} /> }

    return (
      <Router>
        <div>
          <NavBar />

          <Switch>
            {/* why does changing order affect which component renders? */}
            <Route exact path="/" component={HomePage} />
            <Route path='/cities/:cityId/:postId' component={Post} />
            <Route path='/cities/:cityId' component={City} />
            <Route path='/cities' render={CitiesListComponent} />
          </Switch>
          <Footer>
          <ul>
<li><a href="#">Facebook</a></li>
<li><a href='#'>Instagram</a></li>
<li><a href='#'>Twitter</a></li>
<li><a href='#'>LinkedIn</a></li>
          </ul>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
