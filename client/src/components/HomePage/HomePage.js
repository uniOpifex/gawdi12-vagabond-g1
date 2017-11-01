import React, { Component } from 'react';
import HomeBody from './HomeBody'

class HomePage extends Component {

  state ={

  }

  
  componentWillMount() {
    document.title = 'Homepage'
  }
  
  render() {
    return (
      <div>
        <HomeBody/>

      </div>
    );
  }
}

export default HomePage