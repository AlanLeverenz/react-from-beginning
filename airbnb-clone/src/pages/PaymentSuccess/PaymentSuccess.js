import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import moment from 'moment'
import {Link} from 'react-router-dom'
import Spinner from '../../utility/Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import './PaymentSuccess.css'
library.add(faLongArrowAltRight);

class PaymentSuccess extends Component {

    state = {
        reservationDetails: {},
        venueData: {},
        waiting: true,
    }

    async componentDidMount(){
        const stripeToken = this.props.match.params.stripeToken;
        const token = this.props.auth.token;
        const data = {stripeToken,token};
        const successUrl = `${window.apiHost}/payment/success`;
        const resp = await axios.post(successUrl,data);
        console.log(resp.data);
        this.setState({
            reservationDetails: resp.data.reservationDetails,
            userData: resp.data.userData,
            waiting: false
        })
    }

    render(){
        if(this.state.waiting){
            return(<Spinner/>)
        }
        const rd = this.state.reservationDetails;
        const vd = rd.venueData;
        console.log(vd);
        return(
            <div className="reservation-success row">
                <h1 className="col m12 center">Start Packing!</h1>
                <div className="resv-details col s8 offset-s2">
                <div className="confirmed col m12 row">
                    <FontAwesomeIcon icon="long-arrow-alt-right" size="1x" color="#ED0000" />Confirmed:     
                </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(PaymentSuccess);