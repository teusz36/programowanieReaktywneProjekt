import React, { Component } from 'react';
import account_icon from '../icons/account_icon.png';
import './header.css';
import { Link } from "react-router-dom";

class LogIn extends Component {
    render() {
        return <div style={{marginLeft: '5vw'}}>
                   <Link to="/signin" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                        <img src={account_icon} style={{height: '5vh'}} alt="login"/>
                        <span className="login-text">Zaloguj się</span>
                   </Link>
               </div>
    }
}

export default LogIn;