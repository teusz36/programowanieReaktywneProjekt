import React, { Component } from 'react';
import account_icon from '../icons/account_icon.png';
import './header.css';

class LogIn extends Component {
    render() {
        return <div style={{marginLeft: '5vw'}}>
                   <button className="transparent-button">
                        <img src={account_icon} style={{height: '5vh'}}/>
                        <span className="login-text">Zaloguj się</span>
                   </button>
               </div>
    }
}

export default LogIn;