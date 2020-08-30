import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: '',
    };
  }
  render() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=7d4f2cda5bab002442683b32490d0c00`;
    axios.get(url).then((res) => {
      console.log(res);
      this.setState({
        temp: res.data.main.temp,
      });
    });

    return (
      <div className='App'>
        <h1>{this.state.temp}</h1>
      </div>
    );
  }
}

export default App;
