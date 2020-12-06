import React, {Component} from 'react';
import './App.css';
import CityWeather from './CityWeather';

class WeatherApp extends Component {

        state = {city: 'London'
        }
        // constructor() {
        // super();
        // this.state = {
        //     city: 'London'
        // }
        // }

    changeCity = (e)=>{
        this.setState({city:e.target.value})
    }

    render(){
        return(
            <div className="container">
                <CityWeather />
                <div className="row justify-content-center">
                    <form onSubmit={this.citysearch}>
                        <input type="text" value={this.state.city} onChange={this.changeCity} />
                        <input type="submit" className="btn btn-primary" value="Search!" />
                    </form>
                </div>
            </div>
        )
    }
}

export default WeatherApp;
