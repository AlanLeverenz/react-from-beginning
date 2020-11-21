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

    }

    async componentDidMount(){

    }

    render(){
        return(
            <h1>PaymentSuccess</h1>

        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(PaymentSuccess);