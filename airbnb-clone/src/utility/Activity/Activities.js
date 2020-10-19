import React, { Component } from 'react';
import './Activity.css';

class Activities extends Component {

    render() {
        console.log(this.props.activities);
        return (
            <div className="activity">
                <h1>Activities</h1>
            </div>
        )
    }
}

export default Activities;