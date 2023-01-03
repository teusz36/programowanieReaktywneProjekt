import React, { Component } from 'react';
import logo from '../logo.png';
import './header.css';
import { Link } from "react-router-dom";

class Logo extends Component {
    render() {
        return <div>
                    <button className="transparent-button">
                        <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                                          aria-controls="pills-home" aria-selected="true">
                            <img src={logo} style={{height: '8vh'}} alt="logo"/>
                        </Link>
                    </button>
               </div>
    }
}

export default Logo;