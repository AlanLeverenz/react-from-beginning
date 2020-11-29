import React, { Component } from 'react';
import './Search.css';
import '../Home/Home.css';
import Spinner from '../../utility/Spinner/Spinner';
import axios from 'axios';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';
import Venues from '../../utility/Venue/Venues';

class Search extends Component{

    async componentDidMount(){
        const searchTerm = this.props.match.params.searchTerm;
        console.log(searchTerm);
        const url = `${window.apiHost}/search/${searchTerm}`;
        const resp = await axios.get(url);
        this.setState({
            activities: resp.data.activities,
            cities: resp.data.cities,
            venues: resp.data.venues
        })
    }

    render(){
        return (
            <div className="container-fluid lower-fold">
                <div className="row">
                    <div className="col s12">

                    </div>
                </div>
            </div>
        )
    }
}

export default Search;