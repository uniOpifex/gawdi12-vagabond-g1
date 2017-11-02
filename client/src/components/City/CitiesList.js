import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CitiesList extends Component {
  
  async componentWillMount() {
    document.title = 'Cities'
  }

  render() {
    return (
      <div>
        <img src="https://www.muralswallpaper.co.uk/app/uploads/chalk-board-world-map-maps-plain-kj-820x532.jpg" alt=""/>
        <h1>All Cities</h1>
        {
          this.props.cities.map((city, index)=>{
            return (
              <div key={index}>
                <Link to={`/cities/${city.id}`}>{city.name}</Link>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default CitiesList;