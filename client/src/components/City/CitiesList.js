import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import City from './City';

class CitiesList extends Component {
  
  async componentWillMount() {
    document.title = 'Cities'
  }

  render() {
    return (
      <div>
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