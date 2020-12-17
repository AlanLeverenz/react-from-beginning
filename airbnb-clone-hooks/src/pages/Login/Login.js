import React, {useState} from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import openModal from '../../actions/openModal';
import regAction from '../../actions/regAction'
import SignUp from './SignUp';
import axios from 'axios';
import swal from 'sweetalert'

function Login (props) {

    const dispatch = useDispatch();

    const [ email, changeEmail ] = useState[""];
    const [ password, changePassword ] = useState[""];

    const submitLogin = async(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);

        const url = `${window.apiHost}/users/login`;
        const data = {
            email: email,
            password: password
        }
        const resp = await axios.post(url,data);
        const token = resp.data.token;
        console.log(token);

        // -- noEmail
        if(resp.data.msg === "noEmail"){
            swal({
                title: "Please provide an email",
                icon: "error",
              })  
        // -- badPass          
        }else if(resp.data.msg === "badPass"){
            swal({
                title: "Invalid email/password",
                text: "We don't have a match for that user name and password.",
                icon: "error",
              })
        // -- loggedIn
        }else if(resp.data.msg === "loggedIn"){
            swal({
                title: "Success!",
                icon: "success",
              });
            // we call our register action to updtae our auth reducer!!
            // props.regAction(resp.data);
            // window.setTimeout(()=>{
                // dispatch({
                    // type: "REGISTER_ACTION",
                    // payload: resp.data,
                    // });
                // }, 3000)
            
            // this.props.regAction(resp.data);
            dispatch(regAction(resp.data));
        }
    }

    return(
        <div className="login-form">
            <form onSubmit={submitLogin}>
                <button className="facebook-login">Connect With Facebook</button>
                <button className="google-login">Connect With Google</button>
                <div className="login-or center">
                    <span>or</span>
                    <div className="or-divider"></div>
                </div>
                <input onChange={changeEmail} value={email} type="text" className="browser-default" placeholder="Email address" />
                <input onChange={changePassword} value={password} type="password" className="browser-default" placeholder="Password" />
                <button className="sign-up-button">Login</button>

                <div className="divider"></div>
                <div>Don't have an account? <span className="pointer" onClick={()=>dispatch(openModal('open', <SignUp />))}>Sign Up</span>
                </div>
            </form>
        </div> 
    )
}
  
export default Login;