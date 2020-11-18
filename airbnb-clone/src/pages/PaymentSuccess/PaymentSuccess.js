import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react/react-FontAwesomeIcon';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './PaymentSuccess.css';
library.add(faLongArrowAltRight);

class PaymentSuccess extends Component {

    start = {

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