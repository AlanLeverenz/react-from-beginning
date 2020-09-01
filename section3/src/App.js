import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import keys from './mykeys';

const API_KEY = keys.ids.owm_key;

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: '',
      cityName: '',
      weather: '',
      high: '',
      low: '',
      icon: '',
    };
  }

  componentDidMount() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${API_KEY}`;
    axios.get(url).then((res) => {
      console.log(res);
      this.setState({
        temp: res.data.main.temp,
        high: res.data.main.temp_max,
        low: res.data.main.temp_min,
        weather: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
        cityName: res.data.name,
      });
    });
    const elems = document.querySelectorAll('.modal');
    const instances = window.M.Modal.init(elems);
  }

  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;

    return (
      <div className='App'>
        <h1>{this.state.temp}</h1>
        {/* <!-- Modal Trigger --> */}
        <a
          className='waves-effect waves-light btn modal-trigger'
          href='#modal1'
        >
          Details
        </a>

        {/* <!-- Modal Structure --> */}
        <div id='modal1' className='modal'>
          <div className='modal-content'>
            <h4>{this.state.cityName}</h4>
            <p>
              High: {this.state.high} - Low: {this.state.low}
            </p>
            <p>
              {this.state.weather} <img src={iconUrl} alt='icon' />
            </p>
          </div>
          <div className='modal-footer'>
            <a
              href='#!'
              className='modal-close waves-effect waves-green btn-flat'
            >
              OK
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
