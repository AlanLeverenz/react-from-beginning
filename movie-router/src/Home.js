import React, { Component } from 'react';
import axios from 'axios';
import config from './config';

class Home extends Component {
  componentDidMount() {
    const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
    axios.get(nowPlayingUrl).then((response) => {
      console.log(response.data);
    });
  }
  render() {
    return <h1>Home page!</h1>;
  }
}

export default Home;
