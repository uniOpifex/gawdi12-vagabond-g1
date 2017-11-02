import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import CitiesList from './components/City/CitiesList';
import City from './components/City/City';
import Post from './components/Posts/Post';

class App extends Component {

  state={
    cities: []
  }

  async componentWillMount() {
    // document.title = 'Cities'
    try{
      const response = await axios.get('/api/cities')
      const cities = response.data
      await this.setState({cities: cities})
    }catch(err){console.log(err)}
  }

  render() {

    const CitiesListComponent = () =>{ return <CitiesList cities={this.state.cities}/>}

    return (
      <Router>
        <div>
          <NavBar />
          
          <Switch>
            {/* why does changing order affect which component renders? */}
            <Route exact path="/" component={HomePage} />
            <Route path='/cities/:cityId/:postId' component={Post}/>
            <Route path='/cities/:cityId' component={City}/> 
            <Route path='/cities' render={CitiesListComponent}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
