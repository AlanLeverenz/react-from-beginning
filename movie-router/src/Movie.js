import React, { Component } from 'react';

class Movie extends Component {
  render() {
    console.log(this.props.match);
    return <h1>{this.props.match.params.movieId}</h1>;
  }
}

export default Movie;
