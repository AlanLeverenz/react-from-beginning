import React, { Component } from 'react';
import './CityVenues.css';
import {Link} from 'react-router-dom';

class CityVenues extends Component {
  render() {

    return (
        <h1>{this.props.match.params.cityName}</h1>
    )
  }
}

export default CityVenues;