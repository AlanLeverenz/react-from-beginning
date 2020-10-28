import React, {Component} from 'react';
import './Login.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';
import Login from './Login';

class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            lowerPartOfForm: <button type="button" onClick={this.showInputs} className="sign-up-button">Sign up with email</button>
        }
    }

    // componentDidMount(){
    //     this.setState({
    //         lowerPartOfForm: <button type="button" onClick={this.showInputs} className="sign-up-button">Sign up with email</button>
    //     })
    // }

    showInputs = () => {
        console.log("user click on signup with email button");
    }

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    {this.state.lowerPartOfForm}
                    <div className="divider"></div>
                    <div>Already have an account? <span onClick={()=>{this.props.openModal('open', <Login />)}}>Log In</span></div>
                </form>
            </div>

        )
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
      openModal: openModal
    }, dispatcher)
  }
  
  export default connect(null, mapDispatchToProps)(SignUp);