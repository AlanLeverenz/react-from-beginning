import React, {useState} from 'react';
import './App.css';
import CityWeatherHooks from './CityWeatherHooks';

function WeatherApp (props) {

        // destructures an array by calling useState, value + setter
        const [  city, changeCity ] = useState("London");
        const [  cityNameForWeather, changeCityNameForWeather ] = useState("London");

    const citysearch = (e)=>{
        e.preventDefault();
        changeCityNameForWeather(city);
    }

    // use rocket function for onChange, an inline

    return(
        <div className="container">
            <CityWeatherHooks cityName={cityNameForWeather} />
            <div className="row justify-content-center">
                <form onSubmit={citysearch}>
                    <input type="text" value={city} onChange={(e)=>changeCity(e.target.value)} />
                    <input type="submit" className="btn btn-primary" value="Search!" />
                </form>
            </div>
        </div>
    )
}

export default WeatherApp;
