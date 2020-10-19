import React, { Component } from 'react';
import './Activity.css';
import Activity from './Activity';

class Activities extends Component {

    render() {
        console.log(this.props.activities);
        const activities = this.props.activities.map((activity,i)=>{
            return(
                <div key={i} className="col s3">
                    <Activity activity={activity} />
                </div>
            )
        })
        return (
            <div className="activity">
                {activities}
            </div>
        )
    }
}

export default Activities;