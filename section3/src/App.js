import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import keys from './mykeys';
import Headers from './Headers';
import Modal from './Modal';

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
      showModal: true,
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

  removeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;

    return (
      <div className='App'>
        <div className='row'>
          <div className='col s6 offset-s3'>
            <button onClick={this.removeModal} className='btn'>
              Remove from DOM!!
            </button>
            <Headers temp={this.state.temp} isRaining={this.state.isRaining} />
            <a
              className='waves-effect waves-light btn modal-trigger'
              href='#modal1'
            >
              Details
            </a>
            <form onSubmit={this.searchCity}>
              <input type='text' id='city' placeholder='Enter a City Name' />
            </form>
          </div>
        </div>

        {this.state.showModal ? (
          <Modal
            iconUrl={iconUrl}
            weather={this.state.weather}
            cityName={this.state.cityName}
            low={this.state.low}
            high={this.state.high}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default App;
