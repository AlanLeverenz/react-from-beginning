import React, { Component } from 'react';
import './SingleFullVenue.css';
import axios from 'axios';
import Point from './Point';
import { connect } from 'react-redux';
import openModal from '../../actions/openModal';
import {bindActionCreators} from 'redux';
import Login from '../Login/Login';
import moment from 'moment';

class SingleFullVenue extends Component {

    state = {
        singleVenue: {},
        points: [],
        checkIn: [],
        checkOut: [],
        numberOfGuests: 1
    }

async componentDidMount() {
    const vId = this.props.match.params.vid;
    const url = `${window.apiHost}/venue/${vId}`;
    const axiosResponse = await axios.get(url);
    const singleVenue = axiosResponse.data;

    const pointsUrl = `${window.apiHost}/points/get`;
    const pointsAxiosResponse = await axios.get(pointsUrl);

    const points = singleVenue.points.split(',').map((point,i)=>{
        return(<Point key={i} pointDesc={pointsAxiosResponse.data} point={point} />)
    })
    this.setState({singleVenue,points});
}

    changeNumberOfGuests = (e)=>{this.setState({numberOfGuests: e.target.value})}
    changeCheckIn = (e)=>{this.setState({checkIn: e.target.value})}
    changeCheckOut = (e)=>{this.setState({checkOut: e.target.value})}

    reserveNow = (e) => {
        const startDayMoment = moment(this.state.checkIn);
        console.log(startDayMoment);
        const endDayMoment = moment(this.state.checkOut);
        console.log(endDayMoment);
    }

    render(){
        console.log(this.props.auth);

        console.log(this.state.singleVenue);
        const sv = this.state.singleVenue;
        return(
            <div className="row single-venue">
                <div className="col s12 center">
                    <img src={sv.imageUrl} alt='venue' />
                </div>
                <div className="col s8 location-details offset-s2">
                    <div className="col s8 left-details">
                        <div className="location">{sv.location}</div>
                        <div className="title">{sv.title}</div>
                        <div className="guests">{sv.guests}</div>

                        <div className="divider"></div>

                        {this.state.points}

                        <div className="details">{sv.details}</div>
                        <div className="amenities">{sv.amenities}</div>
                    </div>

                    <div className="col s4 right-details">
                        <div className="price-per-day">${sv.pricePerNight} <span>per day</span></div>
                        <div className="rating">{sv.rating}</div>
                        <div className="col s6">Check-In
                        <input type="date" onChange={this.changeCheckIn} value={this.state.checkIn} />
                        </div>
                        <div className="col s6">Check-Out
                        <input type="date" onChange={this.changeCheckOut} value={this.state.checkOut} />
                        </div>
                        <div className="col s12">
                        <select className="browser-default" onChange={this.changeNumberOfGuests} value={this.state.numberOfGuests}>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                                <option value="5">5 Guests</option>
                                <option value="6">6 Guests</option>
                                <option value="7">7 Guests</option>
                                <option value="8">8 Guests</option>
                            </select>
                        </div>
                        <div className="col s12 center">
                        {this.props.auth.token ?
                            <button onClick={this.reserveNow} className="btn red accent-2">Reserve</button>
                        : <div>You must <span className="text-link" onClick={()=>{this.props.openModal('open',<Login />)}}>Log in</span> to reserve</div>
                        }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        openModal
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFullVenue);

