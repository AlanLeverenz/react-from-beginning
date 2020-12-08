import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class CityWeather extends Component {

    state = {
        cityData: {},
    }

    async componentDidMount() {
        this.getWeather();
    }

    componentDidUpdate(oldProps){
        if(oldProps.cityName !== this.props.cityName){
            this.getWeather();
        }
    }

    getWeather = async ()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName}&units=imperial&appid=7d4f2cda5bab002442683b32490d0c00`;
        // const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`;
        const resp = await axios.get(url);
        this.setState({
            cityData: resp.data,
        })
        console.log(resp.data);
    }

    render(){
        const iconUrl = `http://openweathermap.org/img/wn/${this.state.cityData.weather[0].icon}@2x.png`
        return(
            <div className="container">
                <div className="city-name">{this.state.cityData.name}</div>
                <div className="temp">{this.state.cityData.main.temp} <img src={iconUrl} alt="icon"/></div>
            </div>
        )
    }
}

// <div className="temp">{this.state.cityData.main.temp} <img src={iconUrl} alt="icon"/></div>

// const iconUrl = `http://openweathermap.org/img/w/${this.state.cityData.weather[0].icon}.png`

export default CityWeather;
