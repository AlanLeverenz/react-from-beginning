import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Venue extends Component{

    render(){
        console.log(this.props.venue);
        const { id, title, location, pricePerNight, imageUrl, rating } = this.props.venue;
        const starSize = {
            fontSize: 12
        }
        return(
            <div className="venue col s12">
                <Link to={`/venue/${id}`}>
                    <div className="image">
                        <img src={imageUrl} alt="venue"/>
                    </div>
                    <div className="location-stars">
                        <span className="location">{location}</span>
                        <span className="rating right"><i className="material-icons" style={starSize}>star</i>{rating}</span>
                    </div>
                    <div className="title">${title}</div>
                    <div className="price-per-night">${pricePerNight}/night</div>
                </Link>
            </div>
        )
    }
}

export default Venue;