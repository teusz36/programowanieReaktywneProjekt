import React, { Component, useEffect } from 'react';
import account_icon from '../icons/account_icon.png';
import './header.css';
import { Link } from "react-router-dom";
import { isExpired } from "react-jwt";

const LogIn = (params) => {

        let button;
        const logout = () => {
            localStorage.removeItem('token');
            window.location.reload();
        }
            isExpired(localStorage.getItem('token') ? (
                                     button = <div style={{cursor: 'pointer'}} onClick={logout} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                        <img src={account_icon} style={{height: '5vh'}} alt="login"/>
                                        <span  className="login-text">Wyloguj się</span>
                                     </div>
                                ) : (
                                     button = <Link to="/signin" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                        <img src={account_icon} style={{height: '5vh'}} alt="login"/>
                                        <span className="login-text">Zaloguj się</span>
                                    </Link>
                                )
                                )

        console.log(isExpired(localStorage.getItem('token')))
        return <div style={{marginLeft: '5vw'}}>
                {
                    button
                }
               </div>

}

export default LogIn;