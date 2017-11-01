import React, { Component } from 'react';

class HomePage extends Component {

  state ={

  }

  
  componentWillMount() {
    document.title = 'Homepage'
  }
  
  render() {
    return (
      <div>
        <div>This div
          <div>nested div</div>
        </div>
        <br/>
        <br/>
        <hr/>
        <div>This div is not part of the group className="lonely div"</div>

      </div>
    );
  }
}

export default HomePage