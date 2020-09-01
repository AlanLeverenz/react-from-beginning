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
      isRaining: '',
    };
  }

  componentDidMount() {
    this.getCityWeather('London');
    const elems = document.querySelectorAll('.modal');
    const instances = window.M.Modal.init(elems);
  }

  // compare to prevState to avoid overunning the render stack limit
  componentDidUpdate(prevProps, prevState) {
    if (this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes('rain');
      if (isRaining) {
        this.setState({
          isRaining: 'Rain rain go away!!!',
        });
      }
    }
  }

  // Search function using form submit. arrow function doesn't need binding.
  searchCity = (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    this.getCityWeather(city);
  };

  getCityWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;
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
  };

  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;

    return (
      <div className='App'>
        <div className='row'>
          <div className='col s6 offset-s3'>
            <h1>{this.state.temp}</h1>
            <h1>{this.state.isRaining}</h1>
            {/* <!-- Modal Trigger --> */}
            <a
              className='waves-effect waves-light btn modal-trigger'
              href='#modal1'
            >
              Details
            </a>

            {/* <!-- Input Box --> */}
            <form onSubmit={this.searchCity}>
              <input type='text' id='city' placeholder='Enter a City Name' />
            </form>
          </div>
        </div>

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
              Close
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
